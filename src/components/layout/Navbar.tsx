import React from "react";

// icons
import { FaUserAlt } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 flex items-center justify-between px-4 md:px-[30%] py-4 shadow-md w-full bg-white">
      <h1 className="text-[1.8rem] font-bold text-[#F97316]">FlavorSpot</h1>
      <div className="flex items-center hover:underline cursor-pointer">
        <FaUserAlt size={20} />
        <h1 className="text-sm ml-2">Profile</h1>
      </div>
    </div>
  );
};
