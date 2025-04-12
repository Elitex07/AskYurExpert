'use client';
import { useState } from "react";
import Nav from "./components/nav";
import SignupModal from "./components/SignupModal";

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
        <div className="text-black text-center my-7 text-2xl font-normal">
          <div>Seamlessly connect with mutual fund</div>
          <div>Distributors, exploring top-performing</div>
          <div>funds, and track your investments-all</div>
          <div>in one place.</div>
        </div>
        <div className="flex space-x-8 justify-center">
          <div>
            <button
              className="px-5 py-1.5 rounded-lg border-0 text-center text-white"
              style={{ backgroundColor: "#384347", cursor: "pointer" }}
              onClick={toggleSignupModal}
            >
              Get Started
            </button>
          </div>
          <div>
            <button
              className="px-5 py-1.5 rounded-lg border-0 text-center text-zinc-800"
              style={{ backgroundColor: "#7ED1ED", cursor: "pointer" }}
            >
              Explore Funds
            </button>
          </div>
        </div>
        <div>
          <div className="my-15 text-center font-bold text-3xl">
Why Choose ASKYUREXPERT?
        </div>
        <div className="flex justify-center gap-x-20 my-10">
        <div className="w-auto h-30 bg-gray-200 rounded-2xl place-content-center">
         <h1 className="text-lg font-bold">Direct Access to Distributors</h1>
          <p className="text-center">Get expert guidance from</p>
          <p className="text-center">certified professionals.</p>
        </div>
        <div className="w-auto h-30 bg-gray-200 rounded-2xl place-content-center">
          <h1 className="text-lg font-bold">Explore high performing funds</h1>
<p className="text-center">Stay updated with curated</p>
<p className="text-center">list of top rated funds.</p>

        </div>
        <div className="w-auto h-30 bg-gray-200 rounded-2xl place-content-center">
          <h1 className="text-lg font-bold text-center">Track your portfolio</h1>
          <p>Monitor performance,returns,and stay</p>
          <p className="text-center">on top of your goals.</p>
        </div>
        <div className="rounded-2xl bg-gray-200 h-30 w-auto place-content-center">
          <h1 className="text-lg font-bold text-center">Secure & Transparent</h1>
          <p>Your investments are safe with top-</p>
          <p className="text-center">notch security.</p>
        </div>
         </div>
         </div>
       
         <div className="flex gap-x-30 justify-center mb-10 mt-10">
          <div>
            <img src="https://www.assetplus.in/assets/drawables/feature-1.svg" className="ml-12"></img>
            <p>Trusted by over 4,00,000+</p>
            <p className="text-center">users</p>
          </div>
          <div><img src="https://www.assetplus.in/assets/drawables/feature-2.svg" className="ml-12"></img>
            <p>Handling 8500 +Cr of</p>
            <p className="text-center">investments</p></div>
          <div><img src="https://www.assetplus.in/assets/drawables/feature-3.svg" className="ml-12"></img>
            <p>Achieving goals for over</p>
            <p className="text-center">1,00,000+ families</p></div>
          <div><img src="https://www.assetplus.in/assets/drawables/feature-4.svg" className="ml-12"></img>
            <p>Rated 4.7+ on Playstore and</p>
            <p className="text-center">Appstore</p></div>
         </div>
         <div className="flex space-x-25 mt-20 mb-20">
         <div className="w-[50%] h-auto space-y-6">
          <h1 style={{fontFamily:"CrimsonText"}} className="text-3xl font-bold">Build Wealth the Smart Way with Mutual Funds</h1>
          <div>
            <p className="text-lg text-zinc-800">True wealth creation doesn’t happen overnight—it’s the result of careful planning, emotional discipline, and</p>
            <p className="text-lg text-zinc-800">consistent execution. At Askyourexpert, we’re with you every step of the way, helping you turn your financial</p>
            <p className="text-lg text-zinc-800">dreams into reality.</p>
          </div>
          <div className="space-y-3">

<div className="space-y-2">
  <h1 className="text-lg font-bold" style={{fontFamily:"CrimsonText"}}>1. Certified Investment Experts</h1>
  <p className="text-lg text-zinc-800">Work with professionals who are qualified and experienced in mutual fund advisory.</p>
  <h1 className="text-lg font-bold" style={{fontFamily:"CrimsonText"}}>2. Personalized, Goal-Based Planning</h1>
  <p className="text-lg text-zinc-800">We tailor your investment strategy around your unique financial goals and life aspirations.</p>
  <h1 className="text-lg font-bold" style={{fontFamily:"CrimsonText"}}>3. 100% Paperless Process</h1>
  <p className="text-lg text-zinc-800">Enjoy a seamless and eco-friendly experience with fully digital investments.</p>
  <h1 className="text-lg font-bold" style={{fontFamily:"CrimsonText"}}>4. Real-Time Online Tracking</h1>
  <p className="text-lg text-zinc-800">Stay in control with transparent, anytime access to your investment performance.</p>
</div>
         </div>
         
         </div>
         <div className="w-[50%] h-auto">
          <img src="https://www.assetplus.in/assets/drawables/howitworks@2x.png" className="w-150 h-130"></img>
         </div>
         </div>
         <div className="flex space-x-15">
          <div className="w-[50%] h-auto">
            <h1 style={{fontFamily:"CrimsonText"}} className="text-3xl font-bold">What is ASKYUREXPERT?</h1>
            <div className="mt-7">
<p className="text-lg">Askyurexpert is a dynamic online platform designed to connect you with a diverse network of verified experts across various industries and disciplines.Whether you're facing a complex technical issue,</p>
<p className="text-lg">seeking professional advice, or need guidance on a specific project,Askyurexpert provides a</p>
<p className="text-lg">seamless and efficient way to get the answers you need. Simply ask your question and let our community of experienced professionals share their knowledge and insights.</p>
</div>
          </div>
          <div className="w-[50%] justify-end h-auto">
<img src="https://personalfinancelab.com/wp-content/uploads/distracting-students-grab-attention.png" className="w-150 h-90 justify-end"></img>
            </div>
          </div>
          <div className="flex">
          <div className="w-[50%] h-auto">
          
              <h1 style={{fontFamily:"CrimsonText"}} className="text-3xl font-bold">How it works?</h1>
              <div className="mt-7 mb-10 space-y-2">
                <p className="text-lg">Clearly and concisely describe your query. Provide relevant details to</p>
                <p className="text-lg">help experts understand your needs.</p>
                <p className="text-lg">Your question is routed to relevant experts within our network.</p>
                <p className="text-lg">Review the responses and choose the insights that best address your question.</p>
              </div>
            </div>  
           
            <div>
              <h1 style={{fontFamily:"CrimsonText"}} className="text-3xl font-bold">Key Features & Benefits</h1>
              <div className="mt-7 mb-10 space-y-2">
                <p className="text-lg">Connect with professionals from various fields, ensuring you find</p>
                <p className="text-lg">the right expertise for your specific needs.</p>
                <p className="text-lg">Get tailored answers directly relevant to your challenges, eliminating irrelevant information.</p>
                <p className="text-lg">Stop sifting through countless articles and forums.Get direct answers quickly and efficiently.</p>
                <p className="text-lg">Benefit from the practical experience and in-depth knowledge of seasoned professionals.</p>
              </div>
            </div>
            
          </div>
        
          
      </main>

      <footer style={{backgroundColor:"#7ED1ED"}}>
       
        {/* <div className="w-full h-[86px] bg-blue-300"></div> */}
        <div className="gap-x-10 flex ml-20">
          <div className="my-3">
          <div style={{fontFamily:'"Crimson Text"'}}
          className="text-2xl text-zinc-800 font-bold">ASKYUREXPERT</div>
          <div className="text-sm text-wzinc-800 font-extralight my-2">
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
<div className="flex ml-80 gap-x-25 my-3">
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
