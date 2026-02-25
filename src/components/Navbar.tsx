import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-6xl px-8 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-[#39FF14] p-1 rounded-full">
            {/* Simple representation of the Z lightning logo */}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="black" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span className="text-white font-black italic tracking-tighter text-xl">
            ZENITH
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Programs', 'Trainers', 'Membership'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <button className="bg-[#39FF14] hover:bg-[#32e612] text-black px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;