
'use client';

export default function FormCustomer() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-[1300px] h-[auto] max-sm:h-[100%] max-sm:max-w-[100%] m-auto rounded-2xl space-y-0.5 max-sm:flex-col" style={{ backgroundColor: "#ffffff", opacity: "100%", zIndex: "100", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)" }}>
                <header className="pt-2">
                    <div className="text-center mt-3">
                        <span className="text-3xl font-semibold" style={{ color: "#212529", fontFamily: "Inter" }}>ASKYUR</span>
                        <span className="text-3xl font-semibold" style={{ color: "#2614EF", fontFamily: "Inter" }}>EXPERT</span>
                    </div>
                </header>
                <section className="pb-3 rounded-2xl z-50" style={{ fontFamily: "Inter" }}>
                    <div className="space-y-10 pl-5">
                        <div className="text-lg font-normal pb-1 text-center">Welcome!Get a chance to become a valued customer</div>
                        <div className="text-2xl font-bold">Customer Details</div>
                        <form className="space-y-8 grid grid-cols-4  gap-x-165 max-sm:grid-cols-1">
                            <div className="space-y-4 flex gap-x-5 max-sm:flex-col">
                                <div className="space-y-4">
                                    <div className="">
                                        <label>Title:</label>
                                        <div className="flex">
                                            <input className="w-[80px] max-sm:w-[48px] rounded-lg focus:outline-none placeholder:text-gray-700" placeholder="Mr./Mrs." style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)", opacity: "100%", backgroundColor: "#ffffff", height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>

                                    <div className="space-x-5 max-sm:justify-center flex">
                                        <div className="">
                                            <div className="w-[150px] max-sm:w-[120px] max-sm:mx-auto">
                                                <label className="text-sm opacity-90">First Name(As per PAN):</label>
                                            </div>
                                            <div className="flex">
                                                <input placeholder="First Name" className="rounded-lg shadow-sm w-[150px] max-sm:w-[120px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="w-[150px] max-sm:w-[120px] max-sm:mx-auto">
                                                <label className="text-sm opacity-90">Last Name(As per PAN):</label>
                                            </div>
                                            <div className="flex">
                                                <input placeholder="Last Name" className="rounded-lg shadow-sm w-[150px] max-sm:w-[120px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-x-5 max-sm:justify-center flex">
                                        <div className="mt-1">
                                            <div className="w-[150px] max-sm:w-[120px] max-sm:mx-auto">
                                                <label className="text-sm opacity-90">Date of Birth</label>
                                            </div>
                                            <div className="flex">
                                                <input className="rounded-lg shadow-sm w-[150px] max-sm:w-[120px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" placeholder="dd/mm/yy" style={{ height: "35px", padding: "8px" }}></input>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <label className="text-sm opacity-90">Phone no</label>
                                            <div className="flex">
                                                <input className="rounded-lg shadow-sm w-[150px] max-sm:w-[120px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" placeholder="Phone number" style={{ height: "35px", padding: "8px" }}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Email ID</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="Enter your Email address" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Father Name:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="mt-0 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Aadhar no</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="Enter your Aadhar number" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">PAN Card No.</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="Enter your PAN Card number" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">KYC:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="-Choose KYC status-" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Investor CKYC:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="-Choose CKYC status-" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>

                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[320px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Add mode of transaction:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="-Choose an option-" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="space-y-3 mr-5 flex gap-x-5 max-sm:flex-col">

                                <div className="">
                                    <div className="flex gap-5">
                                        <label className="text-lg opacity-90]">Check KRA:</label>
                                        <input type="checkbox" className="ml-3 w-5 h-5"></input>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Exemption Category:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="-Choose category-" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">PAN Reference No:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Holding Nature:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Occupation:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="-Choose Occupation-" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mt-0 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">DP ID:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Investor CKYC Ref No:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Mother Name:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">IIN Activation Mode:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="Digital" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
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