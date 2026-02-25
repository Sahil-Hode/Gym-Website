import React from 'react';
import { Dumbbell, ShieldCheck, Clock } from 'lucide-react';

export default function Experience() {
  const features = [
    { 
      title: "Elite Equipment", 
      icon: <Dumbbell className="text-[#39FF14]" size={28} />, 
      desc: "Use premium biomechanically engineered machines built for maximum muscle engagement." 
    },
    { 
      title: "Expert Coaching", 
      icon: <ShieldCheck className="text-[#39FF14]" size={28} />, 
      desc: "Our trainers are highly experienced professionals focused on your safety, form, and results." 
    },
    { 
      title: "24/7 Access", 
      icon: <Clock className="text-[#39FF14]" size={28} />, 
      desc: "No excuses. Train whenever your schedule allows with full biometric access any time of day." 
    }
  ];

  return (
    <section id='experienced' className="bg-black py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-8xl text-white font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
            THE ZENITH <br className="hidden md:block" /> EXPERIENCE
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-zinc-500 max-w-md text-lg leading-relaxed">
              Bold, focused, and built for your full transformation.
              We provide the system, you put in the hard work.
            </p>
            <div className="hidden md:block h-[1px] bg-zinc-800 flex-grow ml-12 mb-4" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="group p-10 md:p-14 rounded-[3rem] bg-[#0A0A0A] border border-white/5 hover:border-[#39FF14]/20 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
