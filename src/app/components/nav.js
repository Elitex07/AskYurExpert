'use client';
import { useState, useEffect } from "react";
import SignupModal from "./SignupModal";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

export default function Nav({ toggleSidebar, setNavHeight }) {
  const [showSignup, setShowSignup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleSignupModal = () => setShowSignup(!showSignup);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof setNavHeight === 'function') {
      const navEl = document.getElementById('main-nav');
      if (navEl) {
        setNavHeight(navEl.offsetHeight);
      }
    }
  }, [setNavHeight]);

  return (
    <header>
      <nav id="main-nav" className="w-full h-20 flex justify-between items-center px-6 shadow-md bg-white fixed top-0 z-50">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center space-x-6">
          <span
            style={{ fontFamily: '"CrimsonText"' }}
            className="text-2xl font-bold"
          >
            ASKYUREXPERT
          </span>
          <div className="hidden lg:flex space-x-6">
            <span className="cursor-pointer text-lg">Partners</span>
            <span className="cursor-pointer text-lg">Blogs</span>
            <span className="cursor-pointer text-lg">FAQs</span>
          </div>
        </div>

        {/* Right: Search, Auth, Mobile Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" fill="#212529" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l5 5L20.49 19l-5-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
            </svg>
          </div>

          {/* Auth */}
          <SignedOut>
            <button
              className="hidden md:block text-white bg-[#2614EF] rounded-lg px-5 py-1 text-lg"
              onClick={toggleSignupModal}
            >
              Login / Register
            </button>
          </SignedOut>

          <SignedIn>
            <div className="hidden lg:block">
              <UserButton
                appearance={{
                  elements: {
                    userButtonPopoverFooter: { display: "none" },
                    userButtonPopoverCard: { width: "220px" }
                  },
                }}
              />
            </div>
          </SignedIn>

          {/* Mobile: Sidebar + Menu */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" fill="#212529" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" fill="#212529" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {showMobileMenu && (
        <div className="absolute top-20 right-4 bg-white shadow-lg rounded-lg z-50 p-4 space-y-4 w-52">
          <span className="block cursor-pointer text-lg">Partners</span>
          <span className="block cursor-pointer text-lg">Blog</span>
          <span className="block cursor-pointer text-lg">FAQs</span>
          <span className="block cursor-pointer text-lg" onClick={toggleSignupModal}>
            Login / Signup
          </span>
        </div>
      )}

      {/* Signup Modal */}
      <SignupModal showSignup={showSignup} onClose={() => setShowSignup(false)} />
    </header>
  );
}
