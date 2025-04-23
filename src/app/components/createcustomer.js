
'use client';

export default function FormCustomer() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-[470px] h-[560px] max-sm:h-[600px] max-sm:w-[400px] m-auto rounded-2xl space-y-0.5" style={{ backgroundColor: "#ffffff", opacity: "100%", zIndex: "100", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)" }}>
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
                                <div className="flex space-x-5 max-sm:flex max-sm:justify-center">
                                    <div className="">
                                        <label className="text-sm opacity-90">First Name</label>
                                        <div>
                                            <input placeholder="First Name" className="rounded-lg shadow-sm w-[180px] max-sm:w-[150px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{height: "35px",padding: "8px" }}></input>
                                        </div>
                                    </div>

                                    <div className="">
                                        <label className="text-sm opacity-90">Last Name</label>
                                        <div>
                                            <input placeholder="Last Name" className="rounded-lg shadow-sm w-[180px] max-sm:w-[150px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{height: "35px",padding: "8px" }}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-5 max-sm:flex max-sm:justify-center">
                                    <div className="mt-1">
                                        <label className="text-sm opacity-90">Date of Birth</label>
                                        <div>
                                            <input className="rounded-lg shadow-sm w-[180px] max-sm:w-[150px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" placeholder="dd/mm/yy" style={{height: "35px",padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <label className="text-sm opacity-90">Phone no</label>
                                        <div>
                                            <input className="rounded-lg shadow-sm w-[180px] max-sm:w-[150px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" placeholder="Phone number" style={{height: "35px",padding: "8px" }}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="w-[380px] max-sm:w-[320px] max-sm:mx-auto">
                                    <label className="text-sm opacity-90">Email ID</label>
                                    </div>
                                    <div className="flex justify-center">
                                        <input placeholder="Enter your Email address" className="rounded-lg shadow-sm w-[380px] max-sm:w-[320px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{height: "35px",padding: "8px" }}></input>
                                    </div>
                                </div>


                                <div className="mt-6 justify-center">
                                <div className="w-[380px] max-sm:w-[320px] max-sm:mx-auto">
                                    <label className="text-sm opacity-90">Aadhar no</label>
                                    </div>
                                    <div className="flex justify-center">
                                        <input placeholder="Enter your Aadhar number" className="rounded-lg shadow-sm w-[380px] max-sm:w-[320px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{height: "35px",padding: "8px" }}></input>
                                    </div>
                                </div>


                                <div className="mt-8 flex justify-center">
                                    <button className="rounded-md w-[380px] h-8 text-white max-sm:w-[320px]" style={{ backgroundColor: "#2614EF",margin:"auto" }}>Create Customer</button>
                                </div>
                                <div className="">
                                    <div className="">
                                        <label className="">If already a customer?<a className="ml-1" href="/login" style={{textDecoration:"underline"}} onMouseOver={(e) => e.target.style.color = '#2614EF'} 
  onMouseOut={(e) => e.target.style.color = '#212529'}>Login</a></label>
                                    </div>
                                    

                                </div>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        </div>

    );
}