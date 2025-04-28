'use client';
import { useState, useEffect } from "react";
import SignupModal from "./SignupModal";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ toggleSidebar, setNavHeight }) {
  const [showSignup, setShowSignup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  const toggleSignupModal = () => setShowSignup(!showSignup);
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

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
          <div className="hidden lg:flex space-x-8 px-2">
            <span className="cursor-pointer text-lg">Partners</span>
            <span className="cursor-pointer text-lg"><Link href="/blogs">Blogs</Link></span>
            <span className="cursor-pointer text-lg">FAQs</span>
          </div>
        </div>

        {/* Right: Search, Auth, Mobile Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#212529"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          </div>

          {/* Auth */}
          <SignedOut>
            <button
              className="hidden md:block text-white rounded-lg px-5 py-1 text-lg hover:cursor-pointer"
              style={{ backgroundImage: 'linear-gradient(to bottom, hsl(210, 13.60%, 25.90%), hsl(210, 14%, 10%))' }}
              onClick={toggleSignupModal}
            >
              Login / Register
            </button>
          </SignedOut>

          <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonPopoverFooter: { display: "none" },
                    userButtonPopoverCard: { width: "220px" }
                  },
                }}
              />
          </SignedIn>

          {/* Mobile: Sidebar + Menu */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={pathname === "/dashboard" ? toggleSidebar : toggleMobileMenu}>
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
          <span className="block cursor-pointer text-lg"><Link href="/blogs">Blogs</Link></span>
          <span className="block cursor-pointer text-lg">FAQs</span>
          {!isSignedIn && (
            <span className="block cursor-pointer text-lg" onClick={toggleSignupModal}>
              Login / Signup
            </span>
          )}

        </div>
      )}

      {/* Signup Modal */}
      <SignupModal showSignup={showSignup} onClose={() => setShowSignup(false)} />
    </header>
  );
}
