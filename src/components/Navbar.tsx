"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6">
      <div className={`flex items-center justify-between w-full max-w-6xl px-4 sm:px-8 py-2.5 sm:py-3.5 transition-all duration-300 rounded-full border border-white/10 ${
        scrolled ? "bg-black/90 backdrop-blur-xl" : "bg-black/40 backdrop-blur-md"
      }`}>
        
        {/* Logo - Scales with screen size */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <div className="bg-[#39FF14] p-1 sm:p-1.5 rounded-full">
            <Zap size={16} className="sm:w-[20px] sm:h-[20px]" fill="black" stroke="black" />
          </div>
          <span className="font-black italic tracking-tighter text-lg sm:text-2xl text-white">ZENITH</span>
        </div>

        {/* Desktop Navigation - Hidden on mobile/tablet */}
        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-[13px] font-bold uppercase tracking-widest text-zinc-300 hover:text-[#39FF14] transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block bg-[#39FF14] text-black px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-black uppercase tracking-tight hover:scale-105 transition-all">
            Join Now
          </button>
          
          <button className="xl:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-20 sm:top-24 left-4 right-4 bg-zinc-900 border border-white/10 p-6 sm:p-10 rounded-3xl flex flex-col gap-6 xl:hidden shadow-2xl animate-in fade-in zoom-in duration-300">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-xl sm:text-2xl font-black italic uppercase text-white border-b border-white/5 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-[#39FF14] text-black w-full py-4 rounded-2xl font-black uppercase text-sm tracking-widest">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}