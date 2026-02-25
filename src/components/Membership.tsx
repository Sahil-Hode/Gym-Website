"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: "3,999",
    features: ["Access to gym floor", "Basic locker room", "1 Fitness assessment", "Mobile app access"],
    isPopular: false,
  },
  {
    name: "Pro Performance",
    price: "7,499",
    features: ["Full 24/7 Access", "All Group Classes", "Personal Training Session", "Sauna & Steam Room", "Progress Tracking"],
    isPopular: true,
  },
  {
    name: "Elite Zenith",
    price: "11,999",
    features: ["VIP Private Lounge", "Unlimited Coaching", "Nutritional Planning", "Recovery Suite Access", "Guest Passes"],
    isPopular: false,
  },
];

export default function Membership() {
  return (
    <section id='membership' className="bg-black py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-8xl text-white font-black italic uppercase tracking-tighter leading-none mb-6">
            CHOOSE YOUR <span className="text-[#39FF14]">LEVEL</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            Flexible plans designed for high-performers. No hidden fees, just results.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -12, scale: 1.015 }}
              className={`relative p-8 md:p-12 rounded-[2.5rem] border ${
                plan.isPopular ? "bg-zinc-900 border-[#39FF14]/50" : "bg-[#0A0A0A] border-white/5"
              } transition-all duration-300 group hover:shadow-[0_22px_40px_rgba(0,0,0,0.55)] ${
                plan.isPopular ? "hover:border-[#39FF14]/80" : "hover:border-[#39FF14]/35"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#39FF14] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-white">₹{plan.price}</span>
                  <span className="text-zinc-500 font-medium">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-zinc-400 text-sm">
                    <Check size={18} className="text-[#39FF14] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl font-black uppercase text-sm tracking-widest transition-all duration-300 bg-white/5 text-white hover:bg-[#39FF14] hover:text-black hover:border hover:border-[#39FF14] hover:shadow-[0_0_24px_rgba(57,255,20,0.4)]"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
