'use client';

export default function BankCustomer(){
    return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-[1070px] h-[auto] max-sm:h-[100%] max-sm:max-w-[100%] m-auto rounded-2xl space-y-0.5 max-sm:flex-col" style={{ backgroundColor: "#ffffff", opacity: "100%", zIndex: "100", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)" }}>
                
                <section className="pb-3 rounded-2xl z-50" style={{ fontFamily: "Inter" }}>
                    <div className="space-y-10 pl-5 mt-5">
          
                        <div className="text-2xl font-bold">Bank Details</div>
                        <form className="space-y-8 grid grid-cols-4  gap-x-175 max-sm:grid-cols-1">
                            <div className="space-y-4 flex gap-x-15 max-sm:flex-col">
                                <div className="space-y-4">
                                    <div className="">
                                        <label>Bank Name:</label>
                                        <div className="flex">
                                            <input className="w-[280px] max-sm:w-[220px] rounded-lg focus:outline-none placeholder:text-gray-700" placeholder="State Bank of India" style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)", opacity: "100%", backgroundColor: "#ffffff", height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>

                                    <div className="space-x-5 max-sm:justify-center">
                                        <div className="">
                                            <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                                <label className="text-sm opacity-90">Account No:</label>
                                            </div>
                                            <div className="flex">
                                                <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                                <label className="text-sm opacity-90">IFSC Code:</label>
                                            </div>
                                            <div className="flex">
                                                <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-x-5 max-sm:justify-center flex">
                                        <div className="mt-1">
                                            <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                                <label className="text-sm opacity-90">Investor Name as per Bank record</label>
                                            </div>
                                            <div className="flex">
                                                <input className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" placeholder="" style={{ height: "35px", padding: "8px" }}></input>
                                            </div>
                                        </div>
                                     
                                    </div>
                                    <div className="mt-6">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Branch Name:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Branch City:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="-Choose City-" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="mt-0 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Branch Country:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="-Choose Country-" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-3 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Branch Address 1:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-3 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Branch Address 2:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-3 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Branch Address 3:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>

                                    <div className="mt-3 justify-center">
                                        <div className="w-[280px] max-sm:w-[320px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Branch Pincode:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="space-y-3 mr-5 flex gap-x-5 max-sm:flex-col">

                                <div className="mt-[10px]">
                                    <div className="flex gap-5">
                                        <label className="text-lg opacity-90]">Check IMPS:</label>
                                        <input type="checkbox" className="ml-3 w-5 h-5"></input>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Account Type:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="-Choose Account Type-" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Re enter Account Number:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">MICR No:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
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