"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const featuredProject = {
  id: "virtual-podcast",
  title: "THE VIRTUAL PODCAST Intro",
  reach: "High Impact",
  engagement: "Brand Identity",
  videoUrl: "https://www.youtube.com/embed/3_oTy3uNRbo?si=5od7P57XeVm926Qr&autoplay=1&mute=1&loop=1&playlist=3_oTy3uNRbo",
  posterUrl: "https://images.unsplash.com/photo-1540039155732-d68f18d76d42?q=80&w=2069&auto=format&fit=crop",
  details: {
    goal: "Design a high-energy, visually striking intro sequence to establish the brand identity and tone for The Virtual Podcast.",
    challenges: "Condensing the core essence of the podcast into a fast-paced, engaging visual hook that grabs attention within the first 3 seconds.",
    process: "Utilized dynamic typography, fluid motion graphics, and a driving audio track to create a seamless and impactful brand introduction.",
    role: "Motion Graphics Artist & Video Editor",
    result: "Established a professional and recognizable visual signature that elevates the production value of every episode."
  }
};



function ShortsEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-[9/16] w-full max-w-[240px] overflow-hidden rounded-[24px] mx-auto shadow-[0_10px_40px_rgba(0,0,0,.04)] border border-neutral-800">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Shorts"
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(false);

  return (
    <section id="works" className="py-16 md:py-24 lg:py-[120px] bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-foreground">
            Selected Works
          </h2>
          <p className="text-muted text-[18px]">
            A curated selection of edits that moved the needle.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Featured Project */}
          <div className="lg:col-span-8 relative group cursor-pointer" onClick={() => setSelectedProject(true)}>
            <div className="relative aspect-video rounded-[36px] overflow-hidden bg-dark transition-all duration-800 shadow-[0_10px_40px_rgba(0,0,0,.04)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,.08)]">
              {/* Background Video */}
              <iframe 
                className="absolute inset-0 w-full h-full pointer-events-none scale-[1.15] transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.2]"
                src={featuredProject.videoUrl}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-500" />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="flex items-end justify-between w-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-4 py-1.5 bg-black/60 border border-white/10 rounded-full text-white/90 text-xs font-bold tracking-wider uppercase">
                        {featuredProject.reach} Reach
                      </span>
                      <span className="px-4 py-1.5 bg-[#FF5A1F]/20 border border-[#FF5A1F]/30 text-[#FF5A1F] rounded-full text-xs font-bold tracking-wider uppercase">
                        {featuredProject.engagement} Engagement
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {featuredProject.title}
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-400 shrink-0">
                    <ArrowRight size={24} className="text-white group-hover:translate-x-1 transition-transform duration-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of smaller projects */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 md:gap-6 items-center">
            <ShortsEmbed videoId="qQsnVjubnos" />
            <ShortsEmbed videoId="HL-si5SAsi0" />
          </div>

        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#0D0D0D]/95 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(false)}
                className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] text-white/50 hover:text-white bg-white/10 border border-white/10 p-4 rounded-full transition-colors"
                aria-label="Close Case Study"
              >
                <X size={24} />
              </button>

              <motion.div 
                initial={{ y: 20, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 10, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[1000px] bg-[#111111] rounded-[36px] overflow-hidden shadow-2xl border border-white/5 my-auto"
              >
                <div className="aspect-[21/9] bg-dark relative">
                  <iframe 
                    className="w-full h-full opacity-90"
                    src={featuredProject.videoUrl.replace('&mute=1', '')}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{featuredProject.title}</h2>
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:p-12 lg:p-16">
                  <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-12 mb-12 md:mb-16">
                    <div>
                      <h4 className="text-muted uppercase text-[10px] font-bold tracking-widest mb-4">Goal</h4>
                      <p className="text-white/90 text-[18px] leading-[1.7]">{featuredProject.details.goal}</p>
                    </div>
                    <div>
                      <h4 className="text-muted uppercase text-[10px] font-bold tracking-widest mb-4">Challenges</h4>
                      <p className="text-white/90 text-[18px] leading-[1.7]">{featuredProject.details.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-muted uppercase text-[10px] font-bold tracking-widest mb-4">Process</h4>
                      <p className="text-white/90 text-[18px] leading-[1.7]">{featuredProject.details.process}</p>
                    </div>
                    <div>
                      <h4 className="text-primary uppercase text-[10px] font-bold tracking-widest mb-4">Result</h4>
                      <p className="text-white text-[18px] font-medium leading-[1.7]">{featuredProject.details.result}</p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h4 className="text-muted uppercase text-[10px] font-bold tracking-widest mb-8">Workflow</h4>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-white/60 text-sm font-bold tracking-wider">
                      <div className="flex items-center gap-4 w-full">
                        <span className="shrink-0 text-white">HOOK</span>
                        <div className="h-px bg-white/10 w-full" />
                      </div>
                      <div className="flex items-center gap-4 w-full">
                        <span className="shrink-0">EDIT</span>
                        <div className="h-px bg-white/10 w-full" />
                      </div>
                      <div className="flex items-center gap-4 w-full">
                        <span className="shrink-0">COLOR</span>
                        <div className="h-px bg-white/10 w-full" />
                      </div>
                      <div className="flex items-center gap-4 w-full">
                        <span className="shrink-0">SFX</span>
                        <div className="h-px bg-white/10 w-full" />
                      </div>
                      <span className="shrink-0 text-primary">FINAL VIDEO</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
