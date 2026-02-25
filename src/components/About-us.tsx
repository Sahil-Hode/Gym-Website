"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about-us" className="bg-black text-white py-20 md:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP GRID: IMAGE + TEXT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-40">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-square md:aspect-video lg:aspect-square border border-white/10"
          >
            <img 
              src="/about.png" 
              alt="Zenith Performance" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <span className="text-[#39FF14] text-4xl md:text-6xl font-black italic">EST. 2024</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#39FF14] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">
              The Innovox Philosophy
            </span>
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
              Engineered <br /> For <span className="text-[#39FF14]">Superiority</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-sm md:text-lg leading-relaxed">
              <p>
                Zenith Performance Labs, powered by Innovox Software Solutions, is not just a gym. It is a high-octane ecosystem where human potential is recalibrated through biomechanical precision.
              </p>
              <p>
                We have moved beyond the traditional workout. Our environment is a blend of elite hardware and data-driven training, designed specifically for those who demand excellence in every fiber of their being.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM GRID: CORE VALUES --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: <Zap />, title: "Precision", desc: "Every rep is tracked; every machine is calibrated." },
            { icon: <Target />, title: "Focus", desc: "A high-intensity atmosphere that demands your best." },
            { icon: <Users />, title: "Elite Community", desc: "A network of high-performers and achievers." },
            { icon: <Shield />, title: "Mastery", desc: "Constant progression is our only standard." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-zinc-900/20 border border-white/5 hover:border-[#39FF14]/30 transition-all group"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-black rounded-xl md:rounded-2xl flex items-center justify-center mb-6 text-[#39FF14] group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-white font-black uppercase italic tracking-tighter text-lg md:text-xl mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
