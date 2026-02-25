"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="relative flex flex-col items-center justify-center min-h-screen w-full pt-28 pb-12 px-6 overflow-hidden bg-black">
      
      {/* Background Image Container - Proper Sizing */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Layered Overlays for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" /> 
        
        <Image
          src="/hero.png"
          alt="Zenith Professional Gym"
          fill
          priority
          quality={100}
          className="object-cover object-top md:object-center" // Ensures the neon ceiling is visible on mobile
        />
      </div>

      {/* Main Content - Centered properly */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-6xl text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-10"
        >
          <span className="inline-flex items-center gap-2 border border-[#39FF14]/30 bg-[#39FF14]/10 text-[#39FF14] text-[10px] md:text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full font-bold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
            New Season Open
          </span>
        </motion.div>
        
        {/* Headline with Optimized Sizing */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl lg:text-[120px] text-white font-black italic uppercase leading-[0.8] md:leading-[0.85] tracking-tighter mb-8 md:mb-12"
        >
          Build Your <br />
          <span className="text-[#39FF14] drop-shadow-[0_0_25px_rgba(57,255,20,0.4)]">Strongest</span> <br />
          Self
        </motion.h1>

        {/* Subtext */}
        <p className="text-zinc-200 text-sm md:text-xl max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-16 font-medium leading-relaxed drop-shadow-lg">
          Train smarter. Transform faster. Join the strongest community of high-performers in the city.
        </p>

        {/* Buttons - Sized for Mobile & Desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-md mx-auto">
          <button className="w-full sm:w-auto bg-[#39FF14] text-black px-12 py-5 rounded-full font-black text-sm uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(57,255,20,0.3)]">
            Start Free Trial 
          </button>
          <button className="w-full sm:w-auto border-2 border-white/20 text-white backdrop-blur-md hover:bg-white/10 px-12 py-5 rounded-full font-black text-sm uppercase transition-all">
            View Plans
          </button>
        </div>

        {/* Stats Row - Properly Aligned at Bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 mt-20 md:mt-32 pt-12 border-t border-white/10 w-full">
          {[
            { val: "500+", label: "Active Members" },
            { val: "20+", label: "Certified Trainers" },
            { val: "5+", label: "Years Excellence" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <h3 className="text-4xl md:text-6xl text-white font-black mb-1 tracking-tighter">{stat.val}</h3>
              <p className="text-[#39FF14] text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}