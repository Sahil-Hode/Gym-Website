"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BatteryCharging, Cpu, HardDrive, Layers, Workflow } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Biometric Tracking",
      desc: "Real-time analysis of your physiological response to every set and rep.",
      icon: <Activity size={24} />,
    },
    {
      title: "Neuro-Recovery",
      desc: "Advanced recovery protocols designed to reset your central nervous system.",
      icon: <BatteryCharging size={24} />,
    },
    {
      title: "AI-Driven Programs",
      desc: "Workouts that evolve dynamically based on your performance data.",
      icon: <Cpu size={24} />,
    },
    {
      title: "Elite Hardware",
      desc: "Access to biomechanically engineered machines found nowhere else.",
      icon: <Layers size={24} />,
    },
    {
      title: "Metabolic Mapping",
      desc: "Precision nutritional strategies mapped to your cellular requirements.",
      icon: <Workflow size={24} />,
    },
    {
      title: "Data Vault",
      desc: "Secure storage of your physical progression metrics for long-term mastery.",
      icon: <HardDrive size={24} />,
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#39FF14] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block"
          >
            Powered by Innovox
          </motion.span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">
              Elite <br /> <span className="text-[#39FF14]">Capabilities</span>
            </h2>
            <p className="text-zinc-500 max-w-sm text-sm md:text-base leading-relaxed">
              We have integrated advanced software logic into physical training to create the most precise development ecosystem on the planet.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 md:p-10 rounded-[2rem] bg-zinc-900/10 border border-white/5 hover:border-[#39FF14]/30 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-[#39FF14] transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}