import { useRef } from "react";
import Image from "next/image";

export default function SignupModal({ showSignup, onClose }) {
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!showSignup) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.2)", // Static brightness reduction
      }}
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg w-[600px] shadow-lg animate-popOut flex flex-col"
        style={{ pointerEvents: "auto" }}
      >
        {/* Split into two horizontal parts */}
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <h2 className="text-2xl font-bold text-center">
              Welcome to AskYurExpert
            </h2>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 p-6">
            {/* Continue with Google */}
            <button
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center justify-center mb-8 shadow-sm hover:shadow-md"
              style={{ cursor: "pointer" }}
            >
              <Image
                src="/google-Symbol.png"
                alt="Google Icon"
                width={20}
                height={20}
              />
              <span className="text-gray-700 font-medium ml-2">
                Continue with Google
              </span>
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-gray-500 text-sm"> OR </span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Email Form */}
            <div className="mb-6">
              <input
                type="email"
                className="w-full px-3 py-2 border-b border-neutral-700 rounded-none focus:outline-none placeholder-gray-400 text-gray-800"
                placeholder="Your Email Address"
                style={{
                  fontSize: "0.875rem", // Smaller placeholder font
                }}
              />
            </div>

            {/* Continue Button */}
            <button
              className="w-full px-4 py-2 text-white rounded-lg mt-4 mb-1"
              style={{ backgroundColor: "#384347", cursor: "pointer" }}
            >
              Continue
            </button>

            {/* Terms and Conditions */}
            <p className="text-xs text-gray-500 text-center">
              By continuing, you agree to our{" "}
              <a href="#" className="text-blue-500 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}