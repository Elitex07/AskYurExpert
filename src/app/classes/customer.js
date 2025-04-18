import { Configs } from "@/constants";

class Cus {
    constructor(clerkUser) {
        this.clerkId = clerkUser.id;
        this.email = clerkUser.emailAddresses[0].emailAddress;
        this.name = clerkUser.fullName || clerkUser.primaryEmailAddress.emailAddress;
        this._rawData = null;
    }

    async init() {
        this._rawData = await this.get(this.clerkId);
        if(!this._rawData) await this.create(this.clerkId, this.email, this.name);
        return this;
    }

    async get(clerkId) {
        return fetch(`${Configs.API_URL}/customers/${clerkId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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
    async create(clerkId, email, name) {
        return fetch(`${Configs.API_URL}/customers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clerkId,
                email,
                name
            })
        }).then(res => res.json());
    }
}

export default Cus;