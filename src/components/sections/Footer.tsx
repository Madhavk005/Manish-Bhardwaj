"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Monitor, Coffee, Music } from "lucide-react";

export default function Footer() {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <footer className="bg-background py-12 border-t border-border relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link href="/" className="text-3xl font-bold tracking-tight text-foreground block mb-6">
                MB.
              </Link>
              <p className="text-muted max-w-sm text-lg">
                Helping creators and brands create videos people remember.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-6">Navigation</h4>
              <ul className="flex flex-col gap-4">
                {["Services", "Works", "Reviews", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-muted hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6">Socials</h4>
              <ul className="flex flex-col gap-4">
                {["Instagram", "LinkedIn", "Behance", "YouTube"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
            <p className="text-muted text-sm mb-4 md:mb-0">
              © 2026 Manish Bhardwaj. All Rights Reserved.
            </p>
            
            {/* Hidden Experience Trigger */}
            <button 
              onClick={() => setIsEditMode(true)}
              className="text-[10px] text-muted/30 hover:text-primary transition-colors uppercase tracking-widest"
              aria-label="Enter Edit Mode"
            >
              Enter Edit Mode
            </button>
          </div>
        </div>
      </footer>

      {/* The Hidden Experience: Edit Mode */}
      <AnimatePresence>
        {isEditMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(30,30,40,0.4)_0%,transparent_60%)]" />
            <div className="absolute top-10 left-10 w-96 h-64 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop')] bg-cover opacity-10 rounded-lg transform -rotate-6 blur-sm" />
            
            <button 
              onClick={() => setIsEditMode(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white z-10 transition-colors"
              aria-label="Close Edit Mode"
            >
              <X size={32} />
            </button>

            <div className="relative w-full max-w-6xl aspect-[16/9] flex flex-col items-center justify-center">
              
              {/* Monitor */}
              <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[80%] h-[70%] bg-[#111] border-[8px] border-[#222] rounded-xl shadow-[0_0_100px_rgba(50,50,70,0.5)] relative overflow-hidden flex flex-col"
              >
                {/* Screen Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
                
                {/* Mock Premiere Pro Interface */}
                <div className="flex-1 p-2 flex gap-2">
                  <div className="w-1/4 bg-[#1e1e1e] rounded border border-[#333] p-2 flex flex-col gap-2">
                    <div className="w-full h-8 bg-[#2a2a2a] rounded" />
                    <div className="w-full flex-1 bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded opacity-50" />
                  </div>
                  <div className="flex-1 bg-[#000] rounded border border-[#333] flex items-center justify-center relative overflow-hidden">
                    <Monitor className="text-white/20 w-16 h-16" />
                    <div className="absolute inset-0 bg-[url('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4')] bg-cover opacity-30 mix-blend-screen" />
                  </div>
                </div>
                <div className="h-1/3 bg-[#1e1e1e] border-t border-[#333] p-2 flex flex-col gap-1">
                  <div className="w-full h-4 bg-[#2a2a2a] rounded-sm mb-1" />
                  <div className="w-full flex-1 bg-blue-500/20 rounded-sm border border-blue-500/30 relative overflow-hidden">
                    <div className="absolute top-0 bottom-0 left-[20%] w-px bg-red-500 shadow-[0_0_10px_red]" />
                  </div>
                  <div className="w-full flex-1 bg-green-500/20 rounded-sm border border-green-500/30" />
                  <div className="w-full flex-1 bg-green-500/10 rounded-sm border border-green-500/20" />
                </div>
              </motion.div>

              {/* Desk Elements */}
              <div className="absolute bottom-0 w-full flex justify-between items-end px-20">
                {/* Coffee */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="relative text-white/40 mb-10"
                >
                  <Coffee size={48} />
                  {/* Steam */}
                  <motion.div
                    animate={{ y: [-10, -30], opacity: [0, 0.5, 0], scale: [1, 1.5] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
                    className="absolute -top-4 left-4 w-2 h-8 bg-white blur-md rounded-full"
                  />
                  <motion.div
                    animate={{ y: [-10, -40], opacity: [0, 0.3, 0], scale: [1, 2], x: [0, 10] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeOut", delay: 1 }}
                    className="absolute -top-2 left-6 w-3 h-10 bg-white blur-md rounded-full"
                  />
                </motion.div>

                {/* Keyboard Glow */}
                <div className="w-[400px] h-[20px] bg-[#222] rounded-t-xl relative -mb-2 shadow-[0_-10px_30px_rgba(255,0,255,0.2)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 rounded-t-xl animate-pulse" />
                </div>

                {/* Notes */}
                <motion.div 
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="bg-yellow-100/90 p-4 rounded shadow-lg transform rotate-6 mb-16 text-black font-mono text-sm max-w-[150px]"
                >
                  <div className="font-bold mb-2 border-b border-black/20 pb-1">STATUS</div>
                  <div className="mb-1">Deadline: 2 AM</div>
                  <div className="mb-1">Coffee: 5 Cups</div>
                  <div className="text-red-600 font-bold">Mood: Locked In</div>
                </motion.div>
              </div>

              {/* Ambient Audio Cue */}
              <div className="absolute top-10 flex items-center gap-2 text-white/30 animate-pulse">
                <Music size={16} />
                <span className="text-xs tracking-widest uppercase">Ambient Focus Mix Playing</span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
