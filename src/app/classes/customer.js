import { Configs } from "../../constants";

class Cus {
    constructor(clerkUser) {
        this.clerkId = clerkUser.id;
        this.email = clerkUser.emailAddresses[0].emailAddress;
        this.name = clerkUser.fullName || clerkUser.primaryEmailAddress.emailAddress;
        this._rawData = null;
    }

    async init() {
        this._rawData = await this.get(this.clerkId);
        if(!this._rawData) this._rawData = await this.create(this.clerkId, this.email, this.name);
        return this;
    }

    async get(clerkId) {
        return fetch(`${Configs.API_URL}/customers/${clerkId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${Configs.API_HOST}`,
            }
        }).then(res => res.json());
    }

    /**
     * 
     * @param {String} clerkId 
     * @param {String} email 
     * @param {String} name 
     * @returns Customer
     */
    async create(clerkId, email, name, panNumber, status = 'unverified') {
        return fetch(`${Configs.API_URL}/customers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${Configs.API_HOST}`,
            },
            body: JSON.stringify({
                clerkId,
                email,
                name,
                createdAt: new Date().toISOString(),
                panNumber,
                status
            })
        }).then(res => res.json());
    }
}

export default Cus;