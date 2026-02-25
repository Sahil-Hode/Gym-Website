"use client";

import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Activity, BatteryCharging, Cpu, HardDrive, Layers, Workflow } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      title: "Biometric Tracking",
      desc: "Real-time analysis of your physiological response to every set and rep.",
      icon: <Activity size={28} />,
    },
    {
      title: "Neuro-Recovery",
      desc: "Advanced recovery protocols designed to reset your central nervous system properly.",
      icon: <BatteryCharging size={28} />,
    },
    {
      title: "AI-Driven Programs",
      desc: "Workouts that evolve dynamically based on your performance data.",
      icon: <Cpu size={28} />,
    },
    {
      title: "Elite Hardware",
      desc: "Access to biomechanically engineered machines found nowhere else.",
      icon: <Layers size={28} />,
    },
    {
      title: "Metabolic Mapping",
      desc: "Precision nutritional strategies mapped to your cellular requirements.",
      icon: <Workflow size={28} />,
    },
    {
      title: "Data Vault",
      desc: "Secure storage of your physical progression metrics for long-term mastery.",
      icon: <HardDrive size={28} />,
    },
  ];

  // Animation variants for alternating directions
  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#39FF14] selection:text-black">
      <Navbar />

      <section className="pt-48 pb-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-24 text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#39FF14] font-black uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              System Capabilities
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8"
            >
              Integrated <br /> <span className="text-[#39FF14]">Precision</span>
            </motion.h1>
            <p className="text-zinc-500 max-w-xl text-lg leading-relaxed mx-auto lg:mx-0">
              We use the technical expertise of Innovox Software Solutions to bridge the gap between physical potential and digital analysis.
            </p>
          </div>

          {/* Services Grid with Alternating Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                // Desktop: Alternates Left/Right. Mobile: Always slides from bottom.
                variants={idx % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group relative p-10 md:p-14 rounded-[3rem] bg-zinc-900/10 border border-white/5 hover:border-[#39FF14]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Background Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#39FF14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-10 text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-6 group-hover:text-[#39FF14] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
