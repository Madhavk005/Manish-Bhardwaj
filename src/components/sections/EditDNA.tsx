"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const DNA_TYPES = [
  {
    id: "excitement",
    label: "Excitement",
    color: "#FF5A1F",
    bgClass: "bg-[#FF5A1F]",
    textClass: "text-white",
    description: "Fast cuts. Dynamic zoom. Heavy bass.",
    animationSpeed: 0.2,
    elements: ["waveform", "speed-lines", "flash"]
  },
  {
    id: "curiosity",
    label: "Curiosity",
    color: "#6D28D9",
    bgClass: "bg-[#6D28D9]",
    textClass: "text-white",
    description: "Slow zooms. Subtle sound design. Questioning.",
    animationSpeed: 1.5,
    elements: ["floating-particles", "blur"]
  },
  {
    id: "suspense",
    label: "Suspense",
    color: "#000000",
    bgClass: "bg-[#0D0D0D]",
    textClass: "text-white",
    description: "Silence. Lingering frames. Sudden impact.",
    animationSpeed: 2,
    elements: ["vignette", "heartbeat"]
  },
  {
    id: "nostalgia",
    label: "Nostalgia",
    color: "#D97706",
    bgClass: "bg-[#FDE68A]",
    textClass: "text-[#92400E]",
    description: "Film grain. Warm tones. Light leaks.",
    animationSpeed: 3,
    elements: ["grain", "light-leak"]
  },
  {
    id: "trust",
    label: "Trust",
    color: "#0F172A",
    bgClass: "bg-[#F1F5F9]",
    textClass: "text-[#0F172A]",
    description: "Eye contact. Steady shots. Clear audio.",
    animationSpeed: 1,
    elements: ["clean-grid"]
  }
];

export default function EditDNA() {
  const [activeDna, setActiveDna] = useState(DNA_TYPES[0]);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden transition-colors duration-1000">
      {/* Dynamic Background */}
      <motion.div
        className={cn("absolute inset-0 -z-10", activeDna.bgClass)}
        initial={false}
        animate={{ backgroundColor: activeDna.color }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Decorative Visuals based on active DNA */}
      <AnimatePresence>
        {activeDna.id === "nostalgia" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
          />
        )}
        {activeDna.id === "suspense" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.8)_100%)]"
          />
        )}
        {activeDna.id === "excitement" && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Selection */}
          <div>
            <h2 className={cn("text-4xl md:text-5xl font-bold mb-8 transition-colors duration-500", activeDna.textClass)}>
              I don&apos;t edit videos.<br />
              <span className="opacity-70">I edit:</span>
            </h2>
            
            <div className="flex flex-col gap-4 items-start">
              {DNA_TYPES.map((dna) => (
                <button
                  key={dna.id}
                  onMouseEnter={() => setActiveDna(dna)}
                  onClick={() => setActiveDna(dna)}
                  className={cn(
                    "text-4xl md:text-6xl font-black uppercase tracking-tighter transition-all duration-300",
                    activeDna.id === dna.id 
                      ? activeDna.textClass
                      : "text-transparent stroke-current opacity-30 hover:opacity-70",
                  )}
                  style={{
                    WebkitTextStroke: activeDna.id === dna.id ? "0px" : `1px ${activeDna.color === '#000000' || activeDna.color === '#0F172A' ? '#fff' : '#000'}`,
                  }}
                >
                  <motion.div
                    animate={activeDna.id === dna.id ? { x: 20 } : { x: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    {dna.label}
                  </motion.div>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Description & Visualizer */}
          <div className="lg:pl-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDna.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={cn("p-8 rounded-3xl backdrop-blur-md border", 
                  activeDna.id === "nostalgia" ? "bg-white/20 border-white/30" : "bg-black/10 border-white/10"
                )}
              >
                <div className={cn("text-2xl font-medium mb-6", activeDna.textClass)}>
                  {activeDna.description}
                </div>
                
                {/* Abstract Visualizer */}
                <div className="h-32 flex items-end gap-2 overflow-hidden">
                  {[
                    [15, 75, 20], [30, 90, 40], [10, 60, 15], [45, 80, 25],
                    [20, 50, 10], [40, 95, 30], [25, 70, 20], [35, 85, 30],
                    [15, 65, 25], [50, 100, 40], [10, 55, 15], [30, 75, 20],
                    [45, 90, 35], [20, 60, 10], [35, 80, 25], [15, 70, 20],
                    [40, 85, 30], [25, 65, 15], [50, 95, 40], [10, 50, 10]
                  ].map((heights, i) => (
                    <motion.div
                      key={i}
                      className={cn("w-full rounded-t-sm", activeDna.textClass === "text-white" ? "bg-white" : "bg-black")}
                      animate={{
                        height: [
                          `${heights[0]}%`,
                          `${heights[1]}%`,
                          `${heights[2]}%`
                        ]
                      }}
                      transition={{
                        duration: activeDna.animationSpeed,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
