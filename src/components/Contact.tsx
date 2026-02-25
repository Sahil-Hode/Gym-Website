"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id='contact' className="bg-black py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-8xl text-white font-black italic uppercase tracking-tighter leading-none mb-8">
              READY TO <br /> <span className="text-[#39FF14]">LEVEL UP?</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-12 max-w-md">
              Have questions about our programs or want to visit the facility?
              Send us a message and our performance team will get back to you shortly.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-[#39FF14]" />, label: "Email Us", val: "join@zenithlabs.com" },
                { icon: <Phone className="text-[#39FF14]" />, label: "Call Us", val: "+91 98765 43210" },
                { icon: <MapPin className="text-[#39FF14]" />, label: "Location", val: "MG Road, Bengaluru" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">{item.label}</p>
                    <p className="text-white font-bold text-lg">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Rahul Sharma" 
                    className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#39FF14]/50 transition-colors placeholder:text-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="rahul@example.com" 
                    className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#39FF14]/50 transition-colors placeholder:text-zinc-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Program Interest</label>
                <select className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#39FF14]/50 transition-colors appearance-none">
                  <option className="bg-zinc-900">Personal Training</option>
                  <option className="bg-zinc-900">Membership Enquiry</option>
                  <option className="bg-zinc-900">Elite Coaching</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-4">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your fitness goals..." 
                  className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#39FF14]/50 transition-colors placeholder:text-zinc-700 resize-none"
                />
              </div>

              <button className="w-full bg-[#39FF14] text-black font-black uppercase text-sm tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all">
                Send Enquiry <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
