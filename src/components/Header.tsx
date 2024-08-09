import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-6">
      <div className="flex items-center mx-auto space-x-2">
        <Image src="/Vector.png" alt="Logo" width={40} height={40} />
        <div className="text-2xl font-bold">Gizem Candemir</div>
      </div>
      <div className="space-x-4 text-2xl">
        <a href="#" className="text-gray-800 relative group">
          <span className="relative z-10">Download CV</span>
          <span className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-2 bg-pink-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0"></span>
        </a>
      </div>
    </header>
  );
};

export default Header;
