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
