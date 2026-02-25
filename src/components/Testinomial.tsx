"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Alex Rivera",
    role: "Professional Athlete",
    content: "The equipment here is next-level. I've never seen biomechanical machines this precise. Zenith changed my prep.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Fitness Enthusiast",
    content: "The 24/7 access is a lifesaver for my schedule. It’s always clean, and the community is incredibly motivating.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Powerlifter",
    content: "Expert coaching that actually understands heavy lifting. I've added 50kg to my total since joining Zenith.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Yoga Instructor",
    content: "The atmosphere is futuristic and clean. It’s more than a gym; it's where I come to push my absolute limits.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id='testimonials' className="bg-black py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-5xl md:text-8xl text-white font-black italic uppercase tracking-tighter leading-none mb-4">
              VOICES OF <br /> <span className="text-[#39FF14]">VICTORY</span>
            </h2>
            <p className="text-zinc-500 max-w-sm">
              Do not just take our word for it. Hear from the high-performers who call Zenith home.
            </p>
          </div>
          <Quote size={80} className="text-white/5 hidden md:block" />
        </motion.div>
      </div>

      {/* Animated Marquee Row */}
      <div className="flex overflow-hidden group">
        <motion.div 
          className="flex gap-6 whitespace-nowrap animate-marquee"
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "linear" 
          }}
        >
          {/* We double the reviews to create a seamless loop */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] flex-shrink-0 p-8 md:p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-[#39FF14]/20 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#39FF14" stroke="#39FF14" />
                ))}
              </div>
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed italic mb-8 whitespace-normal">
                &ldquo;{review.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center font-bold text-[#39FF14]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
