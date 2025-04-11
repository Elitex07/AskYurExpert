import { useRef } from "react";
import { SignIn } from "@clerk/nextjs";

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
        className="bg-white rounded-lg animate-popOut"
        style={{ pointerEvents: "auto" }}
      >
        {/* Split into two horizontal parts */}
        <div className="flex flex-col md:flex-row">
          <SignIn
              routing="hash"
              appearance={{
                elements: {
                  footer: {
                    display: "none",
                  },
                  headerTitle: {
                    text: "Welcome to AskYurExpert",
                  },
                },
                layout: {
                  socialButtonsPlacement: "top",
                  socialButtonsVariant: "blockButton",
                },
                variables: {
                  colorPrimary: "#212529",
                  colorText: "#384347",
                },
              }}
            />
        </div>
      </div>
    </div>
  );
}