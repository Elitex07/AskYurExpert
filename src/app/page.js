'use client';
import { useState } from "react";
import Nav from "./components/nav";
import SignupModal from "./components/SignupModal";
import Image from 'next/image';

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignupModal = () => {
    setShowSignup(!showSignup);
  };

  return (
    <section className="w-full h-full">
      <Nav />
      <main>
        <div>
          <style>
            @import url(https://fonts.googleapis.com/css2?family=Itim&display=swap);
          </style>
          <div
            style={{ fontFamily: '"Itim"' }}
            className="text-4xl text-black text-center font-medium"
          >
            INVESTING AT YOUR FINGERTIPS
          </div>
        </div>
        <div className="text-zinc-800 text-center my-7 text-2xl font-normal">
          <div>Seamlessly connect with mutual fund</div>
          <div>Distributors, exploring top-performing</div>
          <div>funds, and track your investments-all</div>
          <div>in one place.</div>
        </div>
        <div className="flex space-x-8 justify-center">
          <div>
            <button
              className="px-5 py-1.5 rounded-lg border-0 text-center text-white"
              style={{ backgroundColor: "#4558BD", cursor: "pointer" }}
              onClick={toggleSignupModal}
            >
              Get Started
            </button>
          </div>
          <div>
            <button
              className="px-5 py-1.5 rounded-lg border-0 text-center text-white"
              style={{ backgroundColor: "#7E37B3", cursor: "pointer" }}
            >
              Explore Funds
            </button>
          </div>
        </div>
        <div className="mt-20 mb-20 justify-center">
          <div className="text-center font-bold text-3xl mb-20">
            Why Choose ASKYUREXPERT?
          </div>
          <div className="md:flex justify-center gap-x-20 my-10 flex-wrap space-y-6 sm:justify-items-center">
            <div className="w-auto h-30 bg-gray-200 rounded-2xl place-content-center">
              <h1 className="text-lg font-bold text-center">Direct Access to Distributors</h1>
              <p className="text-center">Get expert guidance from</p>
              <p className="text-center">certified professionals.</p>
            </div>
            <div className="w-auto h-30 bg-gray-200 rounded-2xl place-content-center">
              <h1 className="text-lg font-bold text-center">Explore high performing funds</h1>
              <p className="text-center">Stay updated with curated</p>
              <p className="text-center">list of top rated funds.</p>

            </div>
            <div className="w-auto h-30 bg-gray-200 rounded-2xl place-content-center">
              <h1 className="text-lg font-bold text-center">Track your portfolio</h1>
              <p className="text-center">Monitor performance,returns,and stay</p>
              <p className="text-center">on top of your goals.</p>
            </div>
            <div className="rounded-2xl bg-gray-200 h-30 w-auto place-content-center">
              <h1 className="text-lg font-bold text-center">Secure & Transparent</h1>
              <p className="text-center">Your investments are safe with top-</p>
              <p className="text-center">notch security.</p>
            </div>
          </div>
        </div>

        <div className="md:flex gap-x-30 justify-center mb-25 mt-25 bg-gray-200 pt-2.5 pb-2.5 flex-wrap sm:w-full">
          <div className="justify-items-center">
            <img src="https://www.assetplus.in/assets/drawables/feature-1.svg" className=""></img>
            <p className="text-center">Trusted by over 4,00,000+</p>
            <p className="text-center">users</p>
          </div>
          <div className="justify-items-center"><img src="https://www.assetplus.in/assets/drawables/feature-2.svg" className=""></img>
            <p className="text-center">Handling 8500 +Cr of</p>
            <p className="text-center">investments</p></div>
          <div className="justify-items-center"><img src="https://www.assetplus.in/assets/drawables/feature-3.svg" className=""></img>
            <p className="text-center">Achieving goals for over</p>
            <p className="text-center">1,00,000+ families</p></div>
          <div className="justify-items-center"><img src="https://www.assetplus.in/assets/drawables/feature-4.svg" className=""></img>
            <p className="text-center">Rated 4.7+ on Playstore and</p>
            <p className="text-center">Appstore</p></div>
        </div>
        <div className="md:flex lg:flex sm:flex space-x-25 mt-40 mb-40">
          <div className="max-w-[50%] h-auto space-y-8 ml-12 max-sm:max-w-[100%] max-sm:justify-items-center">


            <h1 style={{ fontFamily: "CrimsonText" }} className="text-3xl font-bold max-sm:text-center">Build Wealth the Smart Way with Mutual Funds</h1>
            <div className="mt-5">
              <p className="text-lg text-zinc-800">True wealth creation doesn’t happen overnight—it’s the result of careful</p>
              <p className="text-lg text-zinc-800">planning,emotional discipline,and consistent execution.At Askyourexpert,</p>
              <p className="text-lg text-zinc-800">you every step of the way,helping you turn your financial dreams into reality.</p>


            </div>
            <div className="space-y-3 mt-15">

              <div className="space-y-1">
                <h1 className="text-lg font-bold" style={{ fontFamily: "CrimsonText" }}>1. Certified Investment Experts</h1>
                <p className="text-lg text-zinc-800">Work with professionals who are qualified and experienced in mutual fund advisory.</p>
                <h1 className="text-lg font-bold" style={{ fontFamily: "CrimsonText" }}>2. Personalized, Goal-Based Planning</h1>
                <p className="text-lg text-zinc-800">We tailor your investment strategy around your unique financial goals and life aspirations.</p>
                <h1 className="text-lg font-bold" style={{ fontFamily: "CrimsonText" }}>3. 100% Paperless Process</h1>
                <p className="text-lg text-zinc-800">Enjoy a seamless and eco-friendly experience with fully digital investments.</p>
                <h1 className="text-lg font-bold" style={{ fontFamily: "CrimsonText" }}>4. Real-Time Online Tracking</h1>
                <p className="text-lg text-zinc-800">Stay in control with transparent, anytime access to your investment performance.</p>
              </div>
            </div>

          </div>
          <div className="w-[50%] h-auto">
            <img src="https://www.assetplus.in/assets/drawables/howitworks@2x.png" className="md:w-150 md:h-130 ml-10 mt-10 sm:w-140 sm:h-120 lg:w-160 lg:h-150 max-sm:hidden"></img>
          </div>
        </div>
        <div className="md:flex lg:flex sm:flex gap-x-30 mt-10 mb-5">
          <div className="max-w-[50%] h-auto ml-12 max-sm:max-w-[100%]">
            <h1 style={{ fontFamily: "CrimsonText" }} className="text-3xl font-bold text-center">What is ASKYUREXPERT?</h1>
            <div className="mt-7 space-y-1">
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">Askyurexpert is a dynamic online platform designed to connect you with a diverse network of verified experts across various industries and disciplines.
              </p>
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">Whether you are facing a complex technical issue,seeking professional advice, or need</p>

              <p className="font-light md:text-lg lg:text-lg text-zinc-800">guidance on a specific project,Askyurexpert provides a seamless and </p>
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">efficient way to get the answers you need. Simply ask your question and let our community of experienced professionals share their knowledge and insights.</p>
            </div>
          </div>
          <div className="w-[50%] justify-end h-auto">
            <img src="https://personalfinancelab.com/wp-content/uploads/distracting-students-grab-attention.png" className="md:w-140 md:h-100 sm:w-140 sm:h-120 lg:w-160 lg:h-140 max-sm:hidden"></img>
          </div>
        </div>
        <div className="md:flex lg:flex sm:flex mt-5 mb-50 gap-x-20">
          <div className="max-w-[50%] h-auto ml-12 max-sm:max-w-[100%]">

            <h1 style={{ fontFamily: "CrimsonText" }} className="text-3xl font-bold text-center">How it works?</h1>
            <div className="mt-7 mb-10 space-y-2">
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">Clearly and concisely describe your query. Provide relevant details to</p>
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">help experts understand your needs.</p>
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">Your question is routed to relevant experts within our network.</p>
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">Review the responses and choose the insights that best address your question.</p>
            </div>
          </div>

          <div className="max-w-[50%] max-sm:max-w-[100%] h-auto ml-12">
            <h1 style={{ fontFamily: "CrimsonText" }} className="text-3xl font-bold text-center">Key Features & Benefits</h1>
            <div className="mt-7 mb-10 space-y-2">
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">Connect with professionals from various fields, ensuring you find</p>
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">the right expertise for your specific needs.</p>
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">Get tailored answers directly relevant to your challenges, eliminating irrelevant information.</p>
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">Stop sifting through countless articles and forums.Get direct answers quickly and efficiently.</p>
              <p className="font-light md:text-lg lg:text-lg text-zinc-800">Benefit from the practical experience and in-depth knowledge of seasoned professionals.</p>
            </div>
          </div>

        </div>



      </main>

      <footer style={{ backgroundColor: "#7ED1ED" }} className="w-full h-auto">

        {/* <div className="w-full h-[86px] bg-blue-300"></div> */}
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 flex flex-col">
          <div className="space-y-6 sm:order-1 order-2 ml-5 mt-2">
            <div style={{ fontFamily: '"Crimson Text"' }}
              className="text-2xl text-zinc-800 font-bold">ASKYUREXPERT</div>
            <div className="text-sm text-zinc-800 font-extralight my-2">
              <p>Copyright © 2025 ValuePlus Technologies Pvt. Ltd. All Rights Reserved</p>
              <p>AssetPlus (ValuePlus Technologies Private Limited) is an AMFI registered</p>
              <p>distributor of Mutual Funds (ARN-114376)</p>
            </div>
            <div className="text-sm text-zinc-800 font-extralight my-5">
              <p>Mutual Fund investments are subject to market risks, read all scheme</p>
              <p>related documents carefully before investing. Past performance is not</p>
              <p>indicative of future performance</p>
            </div>
          </div>
          <div className="order-1 sm:order-2 grid grid-cols-3 mb-5 mt-2 ml-5 sm:grid-cols-3 md:gap-10 sm:gap-7 lg:gap-15 sm:space-y-2">
            <div className="space-y-1">
              <div className="text-zinc-800">Legal</div>
              <div className="text-blue-700 cursor-pointer">Privacy Policy</div>
              <div className="text-blue-700 cursor-pointer">Terms & Conditions</div>
              <div className="text-blue-700 cursor-pointer">Disclaimer</div>
            </div>
            <div className="space-y-1">
              <div className="text-zinc-800">Quick Links</div>
              <div className="text-blue-700 cursor-pointer">Home</div>
              <div className="text-blue-700 cursor-pointer">Features</div>
              <div className="text-blue-700 cursor-pointer">Contact us</div>
              <div className="text-blue-700 cursor-pointer">About us</div>
            </div>
            <div className="space-y-1">
              <div className="text-zinc-800">Follow us</div>
              <div className="text-blue-700 cursor-pointer">Facebook</div>
              <div className="text-blue-700 cursor-pointer">Instagram</div>

            </div>
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      <SignupModal
        showSignup={showSignup}
        onClose={() => setShowSignup(false)}
      />
    </section>
  );
}
