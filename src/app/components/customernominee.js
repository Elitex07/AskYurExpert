'use client';

export default function NomineeCustomer(){
return(
<div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-[1070px] h-[auto] max-sm:h-[100%] max-sm:max-w-[100%] m-auto rounded-2xl space-y-0.5 max-sm:flex-col" style={{ backgroundColor: "#ffffff", opacity: "100%", zIndex: "100", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)" }}>
                
                <section className="pb-3 rounded-2xl z-50" style={{ fontFamily: "Inter" }}>
                    <div className="space-y-10 pl-5 mt-5">
          
                        <div className="text-2xl font-bold">Nominee Details</div>
                        <form className="space-y-8 grid grid-cols-4  gap-x-175 max-sm:grid-cols-1">
                            <div className="space-y-4 flex gap-x-15 max-sm:flex-col">
                                <div className="space-y-4">
                                    <div className="">
                                        <label>Nominee Opted:</label>
                                        <div className="flex">
                                            <input className="w-[280px] max-sm:w-[220px] rounded-lg focus:outline-none placeholder:text-gray-700" placeholder="-Choose Nominee Opted-" style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)", opacity: "100%", backgroundColor: "#ffffff", height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>

                                    <div className="space-x-5 max-sm:justify-center">
                                        <div className="">
                                            <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                                <label className="text-sm opacity-90">Nominee Type:</label>
                                            </div>
                                            <div className="flex">
                                                <input placeholder="-Choose Type" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                                <label className="text-sm opacity-90">Name:</label>
                                            </div>
                                            <div className="flex">
                                                <input placeholder="Enter Name" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-x-5 max-sm:justify-center flex">
                                        <div className="mt-1">
                                            <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                                <label className="text-sm opacity-90">Address 1:</label>
                                            </div>
                                            <div className="flex">
                                                <input className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" placeholder="" style={{ height: "35px", padding: "8px" }}></input>
                                            </div>
                                        </div>
                                     
                                    </div>
                                    <div className="mt-6">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Address 2:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-6 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Address 3:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="mt-0 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Relation:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="Select Relation" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-3 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Nominee1 Guardian Name:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-3 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Select Nominee:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="--Select No. of Nominee--" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-3 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Nominee 1 PAN:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>

                                    <div className="mt-3 justify-center">
                                        <div className="w-[280px] max-sm:w-[320px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Nominee 1 DOB:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="space-y-3 mr-5 flex gap-x-5 max-sm:flex-col">

                                <div className="">
                                    <div className="w-[280px] max-sm:w-[220px]">
                                        <label className="text-lg opacity-90]">City:</label>
                                        <input type="text" placeholder="-Choosed City-" className=" rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                    </div>
                                    <div className="mt-3 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">State:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="-Choose State-" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF] placeholder:text-gray-700" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-3 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Pincode:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-4 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Percentage:</label>
                                        </div>
                                        <div className="flex">
                                            <input placeholder="" className="rounded-lg shadow-sm w-[280px] max-sm:w-[220px] focus:outline-none focus:border-[2px] focus:border-[#2614EF]" type="text" style={{ height: "35px", padding: "8px" }}></input>
                                        </div>
                                    </div>
                                    <div className="mt-4 justify-center">
                                        <div className="w-[280px] max-sm:w-[220px] max-sm:mx-auto">
                                            <label className="text-sm opacity-90">Nominee1 Guardian PAN:</label>
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