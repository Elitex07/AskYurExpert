import { useState } from "react";
import SignupModal from "./SignupModal";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

export default function Nav() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignupModal = () => {
    setShowSignup(!showSignup);
  };

  return (
    <header>
      <nav className="w-full h-40 flex justify-around my-10">
        <div className="space-x-10 flex ml-4">
          <span
            style={{ fontFamily: '"CrimsonText"' }}
            className="text-2xl font-bold"
          >
            ASKYUREXPERT
          </span>

          <span className="cursor-pointer text-lg">Partners</span>
          <span className="cursor-pointer text-lg">Blogs</span>
          <span className="cursor-pointer text-lg">FAQs</span>
        </div>
        <div className="w-[280px] h-5"></div>
        <div className="space-x-6 flex my-[-4px]">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#212529"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          </div>

          <SignedOut>
            <div className="space-x-4 flex">
              <div>
                <button
                  className="text-white border-0 rounded-lg px-5 py-1 text-center text-lg"
                  style={{ backgroundColor: "#2614EF" }}
                  onClick={toggleSignupModal}
                >
                  Login / Register
                </button>
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="space-x-4 flex">
              <div>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonPopoverFooter: {
                        display: "none",
                      },
                      userButtonPopoverCard: {
                        width: "220px",
                      }
                    },
                  }}
                />
              </div>
            </div>
          </SignedIn>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#212529"><path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"/></svg>
          </div>
        </div>
      </nav>

      {/* Signup Modal */}
      <SignupModal
        showSignup={showSignup}
        onClose={() => setShowSignup(false)}
      />
    </header>
  );
}