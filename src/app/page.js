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
      </main>
      <footer>
        <div className="w-full h-[200px]"></div>
        <div className="w-full h-[86px] bg-blue-300"></div>
      </footer>

      {/* Signup Modal */}
      <SignupModal
        showSignup={showSignup}
        onClose={() => setShowSignup(false)}
      />
    </section>
  );
}
