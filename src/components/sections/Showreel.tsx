"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const TIMESTAMPS = [
  { time: 8, label: "Hook introduced", sub: "Retention spikes here" },
  { time: 21, label: "Beat Drop", sub: "Emotion shift" },
];

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    // document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsPlaying(false);
    // document.body.style.overflow = "auto";
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Mock a timeline running for demo purposes
  // In a real app, bind this to videoRef.current.currentTime
  const activeTimestamp = TIMESTAMPS.find(
    (t) => currentTime >= t.time && currentTime < t.time + 4
  );

  return (
    <section id="showreel" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The Showreel
          </h2>
          <p className="text-muted text-lg max-w-xl">
            A culmination of pacing, sound design, and visual storytelling.
          </p>
        </div>

        {/* Thumbnail View */}
        <div 
          className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden cursor-pointer group bg-dark"
          onClick={handlePlay}
        >
          {/* Placeholder Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-50 transition-opacity duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-500"
              aria-label="Play Showreel"
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white translate-x-1" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Cinema View */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-8"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] text-white/70 hover:text-white bg-black/50 p-3 rounded-full backdrop-blur-md transition-colors"
              aria-label="Close Showreel"
            >
              <X size={24} />
            </button>

            <div className="w-full max-w-7xl aspect-video relative rounded-2xl overflow-hidden bg-dark shadow-2xl">
              {/* Replace with actual video player */}
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay 
                controls 
                onTimeUpdate={handleTimeUpdate}
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
              />

              {/* Dynamic Notes Overlay */}
              <AnimatePresence>
                {activeTimestamp && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20, x: -20 }}
                    className="absolute bottom-24 left-8 md:bottom-32 md:left-16 bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-sm"
                  >
                    <div className="text-primary font-mono text-sm mb-2">
                      00:{activeTimestamp.time.toString().padStart(2, '0')}
                    </div>
                    <div className="text-white font-bold text-xl mb-1">
                      {activeTimestamp.label}
                    </div>
                    <div className="text-white/70 text-sm">
                      {activeTimestamp.sub}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
