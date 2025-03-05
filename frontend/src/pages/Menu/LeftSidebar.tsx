import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoBlue from '../../components/ui/LogoBlue';

const LeftSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-1/6 h-screen flex flex-col bg-white p-4 shadow-lg">
      <div className="flex flex-col items-start space-y-2">
        <LogoBlue className="w-10 mb-3" />
        
        <Link to="/dashboard" className="w-full">
          <button
            className={`w-full py-2 px-4 border rounded-lg ${
              location.pathname === "/dashboard"
                ? "bg-[#32347C] text-white"
                : "border-[#32347C] text-[#32347C]"
            } transition`}
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
          >
            User Profile
          </button>
        </Link>
      </div>

      {/* Bottom Logout Button */}
      <button className="w-full py-2 px-4 border border-[#32347C] mt-auto rounded-full text-[#32347C] hover:bg-[#32347C] hover:text-white transition">
        Log out
      </button>
    </div>
  );
};

export default LeftSidebar;