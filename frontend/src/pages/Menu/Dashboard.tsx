import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import Categories from "./Categories";
import Cart from "./Cart";
import Dish from "./Dish";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex h-screen bg-[#F2F2F2] overflow-hidden">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-grow p-5 overflow-y-auto h-screen scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 w-[900px]">
        
        {/* Search Bar */}
        <div className="relative mb-4 w-full">
          <input
            type="text"
            placeholder="Search food or category..."
            className="p-3 pl-10 border rounded-lg w-full max-w-[1000px] shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src="/search.png"
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-70"
          />
        </div>

        <Categories />

        <hr className="my-2 border-gray-400 mb-8" />

        {/* Dishes */}
        <Dish searchTerm={searchTerm} />
      </div>

      {/* Right Sidebar */}
      <Cart cartItems={[]} removeFromCart={() => {}} updateQuantity={() => {}} />
    </div>
  );
};

export default Dashboard;