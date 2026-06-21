"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const retentionData = [
  { name: "Reels", value: 83, points: "0,90 20,80 40,95 60,85 80,95 100,83" },
  { name: "Podcast", value: 76, points: "0,80 20,75 40,85 60,82 80,90 100,76" },
  { name: "Ads", value: 72, points: "0,70 20,60 40,80 60,70 80,85 100,72" },
];

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const currentData = activeCategory !== null ? retentionData[activeCategory] : { name: "Average", value: 72, points: "0,75 20,65 40,85 60,75 80,90 100,72" };

  return (
    <section className="relative min-h-[100svh] pt-32 md:pt-40 pb-16 md:pb-24 flex items-center overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-[1280px]">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="lg:col-span-7 max-w-2xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-border/50 text-xs font-semibold text-muted uppercase tracking-wider mb-6"
          >
            ✦ Trusted by 50+ Creators
          </motion.div>
          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] font-bold text-foreground mb-8">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
              }}
              className="inline-block"
            >
              Creating Visual Experiences That
            </motion.span>
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
              }}
              className="text-primary relative inline-block"
            >
              Demand
            </motion.span>
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
              }}
              className="inline-block"
            >
              Attention.
            </motion.span>
          </h1>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="text-[15px] md:text-[17px] text-muted leading-[1.7] mb-10 max-w-xl"
          >
            For brands, creators, startups and businesses that refuse to blend in.
            <br/><br/>
            I create edits, motion graphics and visual systems that make people stop scrolling and start watching. Now you&apos;re communicating value.
          </motion.p>
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#works"
              className="group flex justify-center items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto bg-dark text-white rounded-full font-medium hover:bg-primary transition-colors duration-300 shadow-[0_10px_40px_rgba(0,0,0,.04)] hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] hover:scale-[1.02]"
            >
              See My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex justify-center items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto bg-white border border-border text-foreground rounded-full font-medium hover:bg-dark hover:text-white transition-colors duration-300 shadow-[0_10px_40px_rgba(0,0,0,.04)] hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] hover:scale-[1.02]"
            >
              <Calendar size={20} className="text-primary group-hover:text-white transition-colors" />
              Book a Call
            </a>
          </motion.div>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
            }}
            className="text-xs text-muted font-medium mt-6 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Average Reply Time {'<'} 2 Hours
          </motion.p>
        </motion.div>

        {/* Right Column - Retention Graph & Social Proof */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] flex items-center justify-center mt-8 lg:mt-0">
          
          {/* Social Proof Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 md:-right-10 bg-white p-5 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,.04)] hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] border border-border w-64 z-10 cursor-default"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-border overflow-hidden">
                <Image src="/avalyn-logo.png" alt="Avalyn Media" width={40} height={40} className="w-full h-full object-cover bg-white" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">Avalyn Media</div>
                <div className="text-xs text-muted">Creative Agency</div>
              </div>
            </div>
            <p className="text-sm font-medium text-foreground">&quot;The visual storytelling perfectly captured our brand&apos;s voice and boosted engagement.&quot;</p>
          </motion.div>

          {/* Social Proof Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 md:-left-10 bg-white p-5 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,.04)] hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] border border-border w-64 z-10 cursor-default"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-border overflow-hidden">
                <Image src="/ikaki-logo.png" alt="Ikaki Niwas" width={40} height={40} className="w-full h-full object-cover bg-white" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">Ikaki Niwas</div>
                <div className="text-xs text-muted">Heritage Boutique Hotel</div>
              </div>
            </div>
            <p className="text-sm font-medium text-foreground">&quot;Stunning cinematography and edits that truly elevated our digital presence.&quot;</p>
          </motion.div>

          {/* Retention Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm bg-white rounded-[28px] border border-border p-8 shadow-[0_10px_40px_rgba(0,0,0,.04)] hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] transition-shadow duration-400 z-0"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-muted text-xs font-medium uppercase tracking-wider mb-1">Average Retention</p>
                <div className="flex items-baseline gap-2">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={currentData.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-4xl font-bold tracking-tight"
                    >
                      {currentData.value}%
                    </motion.span>
                  </AnimatePresence>
                </div>
                <p className="text-muted text-xs mt-1">Across 400+ Videos</p>
              </div>
              
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              </div>
            </div>

            {/* Line Graph Visualization */}
            <div className="relative h-32 w-full mb-6">
              <div className="absolute inset-0 flex flex-col justify-between">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-border/50" />
                ))}
              </div>
              
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                <AnimatePresence mode="wait">
                  <motion.g key={currentData.name}>
                    <motion.path
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 1, pathLength: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      d={`M0,100 L${currentData.points.split(' ').map(p => `${p.split(',')[0]},${100 - parseInt(p.split(',')[1])}`).join(' L')} L100,100 Z`}
                      fill="url(#lineGradient)"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      d={`M${currentData.points.split(' ').map(p => `${p.split(',')[0]},${100 - parseInt(p.split(',')[1])}`).join(' L')}`}
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.g>
                </AnimatePresence>
              </svg>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-3 gap-2">
              {retentionData.map((item, idx) => (
                <button
                  key={item.name}
                  onMouseEnter={() => setActiveCategory(idx)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={cn(
                    "py-1.5 rounded-xl text-[10px] uppercase font-bold tracking-wider transition-all duration-300",
                    activeCategory === idx 
                      ? "bg-dark text-white" 
                      : "bg-[#FAFAFA] text-muted hover:bg-border"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
