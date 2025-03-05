import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import LogoRed from '../../components/ui/LogoRed';
import { Link } from "react-router-dom";
import FoodRed from "../../assets/FoodRed.png"

const Footer = () => {
    return (
      <footer className="w-full text-left py-4 text-sm text-gray-600 border-t mt-12">
          <p>&copy; 2025 — 2026</p>
          <p>
          <a href="#" className="text-gray-600 hover:underline">
            Privacy and Terms
          </a>
        </p>
      </footer>
    );
  };

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen justify-start items-center flex space-x-10 p-10 md:p-20 max-w-[1600px] mx-auto">
      <div className=" w-[500px]">
        <Link to="/">
            <LogoRed className="cursor-pointer w-8"/>
        </Link>
        <h2 className="text-4xl font-extrabold text-[#ed3f25] mb-4 mt-4">Log in.</h2>
        <p className="text-lg text-gray-600 mb-6">Welcome back! Please log in to your account.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-base font-medium mb-0.5">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" 
              required 
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-base font-medium mb-0.5">Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 pr-10" 
              required 
            />

            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-12 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Log in
          </button>
        </form>

        <p className="mt-4 text-base">
          New User? <Link to="/signup" className="text-[#ed3f25]">Sign Up</Link>
        </p>
        <Footer />
        </div>
      
      <div className="absolute right-0 top-0 bottom-0 hidden md:block">
        <img src={FoodRed} className="w-full h-full object-cover" />
      </div>
    
      
    </div>
    
  );

  
};

export default Login;