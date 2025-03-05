import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoBlue from "../../components/ui/LogoBlue";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for open/close

const LeftSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu size={24} className="text-[#32347C]" />
      </button>

      {/* Sidebar (Desktop & Mobile) */}
      <div
        className={`fixed md:relative top-0 left-0 h-full bg-white shadow-lg p-4 flex flex-col w-64 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}
      >
        {/* Close Button (Mobile) */}
        <button
          className="md:hidden absolute top-4 right-4 text-[#32347C]"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={24} />
        </button>

        <div className="flex flex-col items-start space-y-2">
          <LogoBlue className="w-10 mb-3" />

          <Link to="/dashboard" className="w-full">
            <button
              className={`w-full py-2 px-4 border rounded-lg ${
                location.pathname === "/dashboard"
                  ? "bg-[#32347C] text-white"
                  : "border-[#32347C] text-[#32347C]"
              } transition`}
              onClick={() => setIsOpen(false)}
            >
              Menu
            </button>
          </Link>

          <Link to="/profile" className="w-full">
            <button
              className={`w-full py-2 px-4 border rounded-lg ${
                location.pathname === "/profile"
                  ? "bg-[#32347C] text-white"
                  : "border-[#32347C] text-[#32347C]"
              } transition`}
              onClick={() => setIsOpen(false)}
            >
              User Profile
            </button>
          </Link>
        </div>

        {/* Bottom Logout Button */}
        <Link to="/" className="mt-auto w-full">
          <button className="w-full py-2 px-4 border border-[#32347C] rounded-full text-[#32347C] hover:bg-[#32347C] hover:text-white transition">
            Log out
          </button>
        </Link>
      </div>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
        className="fixed inset-0 md:hidden z-30"
        style={{ backgroundColor: "rgba(156, 163, 175, 0.5)" }} // Tailwind's gray-200 in RGBA
        onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default LeftSidebar;
