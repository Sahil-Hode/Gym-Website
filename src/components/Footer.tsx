"use client";

import React from 'react';
import Link from 'next/link';
import { Zap, Instagram, Twitter, Youtube, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#39FF14] p-1.5 rounded-full">
                <Zap size={20} fill="black" stroke="black" />
              </div>
              <span className="font-black italic tracking-tighter text-2xl text-white">ZENITH</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              The premier destination for high-performance athletes and individuals dedicated to physical excellence.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#39FF14] hover:border-[#39FF14]/50 transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              {['Home', 'About-Us', 'Services', 'Experienced', 'Membership', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              {['Contact Us', 'Privacy Policy', 'Terms of Service', 'FAQ', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Stay Synced</h4>
            <p className="text-zinc-500 text-sm mb-4">Receive performance tips and club updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#39FF14]/50 transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-[#39FF14] text-black p-1.5 rounded-lg hover:scale-105 transition-transform">
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Zenith Performance Labs. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}