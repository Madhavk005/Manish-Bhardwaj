"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-[120px] bg-[#0D0D0D] overflow-hidden">
      {/* Background Particles / Stars */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-50" />
        <div className="absolute top-[40%] right-[20%] w-1 h-1 bg-white/50 rounded-full animate-pulse delay-75" />
        <div className="absolute bottom-[30%] left-[30%] w-1.5 h-1.5 bg-primary/40 rounded-full blur-[1px] animate-pulse delay-150" />
        <div className="absolute top-[60%] right-[40%] w-0.5 h-0.5 bg-white/80 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-[20%] right-[10%] w-1 h-1 bg-white/30 rounded-full animate-pulse delay-500" />
        
        {/* Soft Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px] mx-auto"
        >
          <h2 className="text-[40px] md:text-[56px] lg:text-[80px] font-bold text-white tracking-[-0.03em] leading-[1] mb-8">
            Ready To Create <br />
            Something <br />
            People <span className="text-primary italic font-normal">Remember?</span>
          </h2>
          
          <p className="text-[18px] text-white/70 mb-12 max-w-xl mx-auto leading-[1.7]">
            Whether you need reels, commercials, motion graphics, brand videos or content systems, let&apos;s create visuals that leave a lasting impression.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
            <a href="mailto:zhyambomanish62@gmail.com" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-12 sm:py-5 bg-white text-[#111111] rounded-full text-[16px] sm:text-[18px] font-bold transition-all duration-300 hover:bg-primary hover:text-white hover:scale-[1.02] shadow-[0_10px_40px_rgba(255,255,255,0.05)] hover:shadow-[0_25px_70px_rgba(255,90,31,0.2)]">
              Book A Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#showreel" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-12 sm:py-5 bg-transparent border border-white/20 text-white rounded-full text-[16px] sm:text-[18px] font-bold transition-all duration-300 hover:bg-white/5 hover:border-white/40 hover:scale-[1.02]">
              See My Work
            </a>
          </div>
          
          <div className="mt-12 md:mt-16 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-white/60 text-[16px]">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              Average Reply Time &lt; 2 Hours
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
