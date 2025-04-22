
'use client';

export default function FormCustomer() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-[470px] h-[580px] max-sm:h-[640px] max-sm:w-[400px] m-auto rounded-2xl space-y-0.5" style={{ backgroundColor: "#ffffff", opacity: "100%", zIndex: "100", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)" }}>
                <header className="pt-2">
                    <div className="text-center mt-3">
                        <span className="text-3xl font-semibold" style={{ color: "#212529", fontFamily: "Inter" }}>ASKYUR</span>
                        <span className="text-3xl font-semibold" style={{ color: "#2614EF", fontFamily: "Inter" }}>EXPERT</span>
                    </div>
                </header>
                <section className="pb-3 rounded-2xl z-50" style={{ fontFamily: "Inter" }}>
                    <div className="space-y-8 place-items-center">
                        <div className="text-lg font-normal pb-1 text-center">Welcome!Get a chance to become a valued customer</div>
                       <form>
                        <div className="space-y-4">
                            <div className="flex space-x-5">
                                <div className="">
                                    <label className="text-sm opacity-90">First Name</label>
                                    <div>
                                        <input placeholder="First Name" className="rounded-lg shadow-sm" type="text" style={{ width: "180px", height: "35px", border: "0px solid black", padding: "8px" }}></input>
                                    </div>
                                </div>

                                <div className="">
                                    <label className="text-sm opacity-90">Last Name</label>
                                    <div>
                                        <input placeholder="Last Name" className="rounded-lg shadow-sm" type="text" style={{ width: "180px", height: "35px", border: "0px solid black", padding: "8px" }}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-5">
                                <div className="mt-1">
                                    <label className="text-sm opacity-90">Date of Birth</label>
                                    <div>
                                        <input className="rounded-lg shadow-sm" type="text" placeholder="dd/mm/yy" style={{ width: "180px", height: "35px", border: "0px solid black", padding: "8px" }}></input>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <label className="text-sm opacity-90">Phone no</label>
                                    <div>
                                        <input className="rounded-lg shadow-sm" type="text" placeholder="Phone number" style={{ width: "180px", height: "35px", border: "0px solid black", padding: "8px" }}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 max-sm:justify-center max-sm:items-center">
                                <label className="text-sm opacity-90 max-sm:text-center">Email ID</label>
                                <div>
                                    <input placeholder="Enter your Email address" className="rounded-lg shadow-sm" type="text" style={{ width: "380px", height: "35px", border: "0px solid black", padding: "8px" }}></input>
                                </div>
                            </div>


                            <div className="mt-6">
                                <label className="text-sm opacity-90">Aadhar card no</label>
                                <div>
                                    <input placeholder="Enter your Aadhar number" className="rounded-lg shadow-sm" type="text" style={{ width: "380px", height: "35px", border: "0px solid black", padding: "8px" }}></input>
                                </div>
                            </div>


                            <div className="mt-8">
                                <button className="rounded-md w-[380px] h-8 text-white" style={{ backgroundColor: "#2614EF" }}>Create Customer</button>
                            </div>
                            <div className="space-y-1">
                                <div className="">
                                    <label className="">If already a customer?</label>
                                </div>
                                <button className="rounded-md w-[100px] h-8 text-white" style={{ backgroundColor: "#384347" }}>Login</button>

                            </div>
                        </div>
                        </form>
                    </div>
                </section>

            </div>
        </div>

    );
}