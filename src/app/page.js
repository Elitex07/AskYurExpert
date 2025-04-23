'use client';
import { useState, useEffect, useRef } from "react";
import Nav from "./components/nav";
import SignupModal from "./components/SignupModal";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  const toggleSignupModal = () => {
    setShowSignup(!showSignup);
  };

  useEffect(() => {
    const navEl = document.getElementById("main-nav");
    if (navEl) {
      setNavHeight(navEl.offsetHeight);
    }
  }, []);

  return (
    <section className="w-full">
      <Nav ref={navRef} />

      <main style={{ paddingTop: `${navHeight}px` }} className="w-full h-full">
        {/* Header Title */}
        <div>
          <style>
            @import url(https://fonts.googleapis.com/css2?family=Itim&display=swap);
          </style>
          <div
            style={{ fontFamily: '"Itim"' }}
            className="text-4xl text-black text-center font-medium mt-6"
          >
            INVESTING AT YOUR FINGERTIPS
          </div>
        </div>

        {/* Description */}
        <div className="text-zinc-900 text-center my-7 text-2xl font-normal space-y-1">
          <div>Seamlessly connect with mutual fund</div>
          <div>Distributors, exploring top-performing</div>
          <div>funds, and track your investments—all</div>
          <div>in one place.</div>
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-8 justify-center mb-10">
          <button
            className="px-5 py-1.5 rounded-lg text-white bg-[#4558BD]"
            onClick={toggleSignupModal}
          >
            Get Started
          </button>
          <button className="px-5 py-1.5 rounded-lg text-white bg-[#7E37B3]">
            Explore Funds
          </button>
        </div>

        {/* Why Choose Section */}
        <section className="text-center mt-20 mb-20 px-4">
          <h2 className="text-3xl font-bold mb-12">Why Choose ASKYUREXPERT?</h2>
          <div className="md:flex justify-center gap-8 flex-wrap space-y-6 md:space-y-0">
            {[
              {
                title: "Direct Access to Distributors",
                desc: ["Get expert guidance from", "certified professionals."],
              },
              {
                title: "Explore high performing funds",
                desc: ["Stay updated with curated", "list of top rated funds."],
              },
              {
                title: "Track your portfolio",
                desc: ["Monitor performance, returns,", "and stay on top of your goals."],
              },
              {
                title: "Secure & Transparent",
                desc: ["Your investments are safe with", "top-notch security."],
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-200 rounded-2xl p-4 w-72 mx-auto">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                {item.desc.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="flex flex-wrap justify-center gap-8 bg-gray-200 py-6 px-4">
          {[
            {
              img: "https://www.assetplus.in/assets/drawables/feature-1.svg",
              text: ["Trusted by over 4,00,000+", "users"],
            },
            {
              img: "https://www.assetplus.in/assets/drawables/feature-2.svg",
              text: ["Handling 8500+ Cr of", "investments"],
            },
            {
              img: "https://www.assetplus.in/assets/drawables/feature-3.svg",
              text: ["Achieving goals for over", "1,00,000+ families"],
            },
            {
              img: "https://www.assetplus.in/assets/drawables/feature-4.svg",
              text: ["Rated 4.7+ on Playstore and", "Appstore"],
            },
          ].map((item, i) => (
            <div key={i} className="text-center w-48">
              <img src={item.img} alt={`stat-${i}`} className="mx-auto mb-2" />
              {item.text.map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </div>
          ))}
        </section>

        {/* Wealth Building Section */}
        <section className="flex flex-wrap justify-between items-center mt-20 mb-20 px-6">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold font-serif text-center md:text-left">Build Wealth the Smart Way with Mutual Funds</h2>
            <p className="text-lg text-zinc-800 text-justify">
              True wealth creation doesn’t happen overnight—it’s the result of careful planning, emotional discipline, and consistent execution. At Askyourexpert, we guide you every step of the way, helping you turn your financial dreams into reality.
            </p>
            <div className="space-y-4">
              {[
                "Certified Investment Experts",
                "Personalized, Goal-Based Planning",
                "100% Paperless Process",
                "Real-Time Online Tracking",
              ].map((feature, i) => (
                <div key={i}>
                  <div className="flex items-start">
                    <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#2614EF">
                      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                    <span className="font-bold text-blue-800">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block w-full md:w-1/2">
            <img
              src="https://www.assetplus.in/assets/drawables/howitworks@2x.png"
              alt="how-it-works"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="flex flex-wrap mt-10 mb-10 px-6">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold font-serif text-center md:text-left">What is ASKYUREXPERT?</h2>
            <p className="text-lg text-zinc-800 text-justify">
              Askyurexpert is a dynamic online platform designed to connect you with a diverse network of verified experts across various industries. Whether you are facing a technical issue, seeking advice, or need project guidance, Askyurexpert helps you get answers quickly and efficiently.
            </p>
          </div>
          <div className="hidden md:block w-full md:w-1/2">
            <img
              src="https://personalfinancelab.com/wp-content/uploads/distracting-students-grab-attention.png"
              alt="platform"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </section>

        {/* How it Works + Features */}
        <section className="flex flex-wrap gap-8 mt-6 mb-20 px-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold font-serif text-center md:text-left">How it works?</h2>
            <p className="text-lg text-zinc-800 mt-6 text-justify">
              Describe your query clearly and provide relevant details. Your question is routed to the right experts, and you'll receive responses tailored to your needs.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold font-serif text-center md:text-left">Key Features & Benefits</h2>
            <p className="text-lg text-zinc-800 mt-6 text-justify">
              Connect with professionals from various fields. Get tailored answers relevant to your situation. Avoid information overload and benefit from expert insights—fast.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#7ED1ED] w-full px-6 py-10">
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-800 font-serif">ASKYUREXPERT</h3>
            <p className="text-sm text-zinc-800">
              © 2025 ValuePlus Technologies Pvt. Ltd. All Rights Reserved. AssetPlus is an AMFI registered distributor of Mutual Funds (ARN-114376).
            </p>
            <p className="text-sm text-zinc-800">
              Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-zinc-800 font-semibold">Legal</h4>
              <ul className="text-blue-700 space-y-1">
                <li className="cursor-pointer">Privacy Policy</li>
                <li className="cursor-pointer">Terms & Conditions</li>
                <li className="cursor-pointer">Disclaimer</li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-800 font-semibold">Quick Links</h4>
              <ul className="text-blue-700 space-y-1">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Features</li>
                <li className="cursor-pointer">Contact Us</li>
                <li className="cursor-pointer">About Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-800 font-semibold">Follow Us</h4>
              <ul className="text-blue-700 space-y-1">
                <li className="cursor-pointer">Facebook</li>
                <li className="cursor-pointer">Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <SignupModal showSignup={showSignup} onClose={() => setShowSignup(false)} />
    </section>
  );
}
