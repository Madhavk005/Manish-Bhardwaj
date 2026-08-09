"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Play } from "lucide-react";

const featuredProject = {
  id: "virtual-podcast",
  title: "THE VIRTUAL PODCAST Intro",
  reach: "High Impact",
  engagement: "Brand Identity",
  videoUrl: "https://www.youtube.com/embed/3_oTy3uNRbo?si=5od7P57XeVm926Qr&autoplay=1&mute=1&loop=1&playlist=3_oTy3uNRbo",
  details: {
    goal: "Design a high-energy, visually striking intro sequence to establish the brand identity and tone for The Virtual Podcast.",
    challenges: "Condensing the core essence of the podcast into a fast-paced, engaging visual hook that grabs attention within the first 3 seconds.",
    process: "Utilized dynamic typography, fluid motion graphics, and a driving audio track to create a seamless and impactful brand introduction.",
    role: "Motion Graphics Artist & Video Editor",
    result: "Established a professional and recognizable visual signature that elevates the production value of every episode."
  }
};



import { ShortsGrid } from "@/components/ui/ShortsGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";

const shorts = ["osFJ78ha2jA", "qQsnVjubnos", "HL-si5SAsi0"];

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(false);

  return (
    <section id="works" className="section-spacing bg-background">
      <div className="container-site">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected Works"
          subtitle="A curated selection of edits that moved the needle."
        />

        <div className="flex flex-col gap-10 md:gap-16 max-w-6xl mx-auto">

          {/* Main Featured Project */}
          <div className="w-full group cursor-pointer" onClick={() => setSelectedProject(true)}>
            <div className="relative aspect-video w-full rounded-[24px] md:rounded-[36px] overflow-hidden bg-dark transition-shadow duration-500 shadow-[0_10px_40px_rgba(0,0,0,.04)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,.08)]">
              {/* Background Video */}
              <iframe
                className="absolute inset-0 w-full h-full pointer-events-none scale-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.1]"
                src={featuredProject.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              {/* Play affordance */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[74px] h-[74px] sm:w-20 sm:h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                  <Play size={28} className="text-white translate-x-0.5" fill="currentColor" />
                </div>
              </div>

              {/* Mobile hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden">
                <span className="px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white/80 text-[11px] font-semibold uppercase tracking-wider">
                  Tap to watch
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex items-start justify-between gap-4 pt-5 md:pt-7">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
                  <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-dark/5 text-dark/70 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                    {featuredProject.reach} Reach
                  </span>
                  <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                    {featuredProject.engagement} Engagement
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                  {featuredProject.title}
                </h3>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); setSelectedProject(true); }}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark text-white text-sm font-medium hover:bg-primary transition-colors duration-300 shrink-0 mt-1"
              >
                View Case Study
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Shorts — swipeable on mobile, grid from sm */}
          <ShortsGrid videoIds={shorts} />

        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#0A0A0A] flex items-start md:items-center justify-center md:p-8 overflow-y-auto overscroll-contain"
            >
              <button
                onClick={() => setSelectedProject(false)}
                className="fixed top-5 right-5 md:top-8 md:right-8 z-[110] text-white/60 hover:text-white bg-white/10 border border-white/10 p-3.5 rounded-full transition-colors backdrop-blur-md"
                aria-label="Close Case Study"
              >
                <X size={22} />
              </button>

              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 10, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:max-w-[1000px] bg-[#111111] md:rounded-[36px] rounded-none overflow-hidden shadow-2xl border border-white/5 my-0 md:my-auto"
              >
                <div className="relative aspect-video md:aspect-[21/9] bg-black">
                  <iframe
                    className="w-full h-full"
                    src={featuredProject.videoUrl.replace("&mute=1", "")}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                    allowFullScreen
                  />
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                  <div className="md:absolute md:bottom-10 md:left-12 md:max-w-none">
                    <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-3 pt-4 px-4 md:pt-0 md:px-0">
                      <span className="px-3 py-1 md:px-3.5 md:py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-[10px] md:text-[11px] font-bold tracking-wider uppercase">
                        The Virtual Podcast
                      </span>
                      <span className="px-3 py-1 md:px-3.5 md:py-1.5 rounded-full bg-[#FF5A1F]/20 border border-[#FF5A1F]/30 text-[#FF5A1F] text-[10px] md:text-[11px] font-bold tracking-wider uppercase">
                        Episode Intro
                      </span>
                      <a
                        href="https://www.youtube.com/watch?v=3_oTy3uNRbo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 md:px-3.5 md:py-1.5 rounded-full bg-primary text-white text-[10px] md:text-[11px] font-bold tracking-wider uppercase hover:bg-white hover:text-[#111111] transition-colors flex items-center gap-1.5"
                      >
                        Watch on YouTube
                      </a>
                    </div>
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white px-4 md:px-0 pb-4 md:pb-0">{featuredProject.title}</h2>
                  </div>
                </div>

                <div className="p-5 sm:p-8 md:p-12 lg:p-16">
                  <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-16 gap-y-8 md:gap-y-12 mb-10 md:mb-12">
                    <div>
                      <h4 className="text-zinc-400 uppercase text-[10px] font-bold tracking-widest mb-4">Goal</h4>
                      <p className="text-white/90 text-[16px] md:text-[18px] leading-[1.7]">{featuredProject.details.goal}</p>
                    </div>
                    <div>
                      <h4 className="text-zinc-400 uppercase text-[10px] font-bold tracking-widest mb-4">Challenges</h4>
                      <p className="text-white/90 text-[16px] md:text-[18px] leading-[1.7]">{featuredProject.details.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-zinc-400 uppercase text-[10px] font-bold tracking-widest mb-4">Process</h4>
                      <p className="text-white/90 text-[16px] md:text-[18px] leading-[1.7]">{featuredProject.details.process}</p>
                    </div>
                    <div>
                      <h4 className="text-primary uppercase text-[10px] font-bold tracking-widest mb-4">Role</h4>
                      <p className="text-white text-[16px] md:text-[18px] font-medium leading-[1.7]">{featuredProject.details.role}</p>
                    </div>
                  </div>

                  {/* Result Highlight */}
                  <div className="rounded-[20px] md:rounded-[24px] bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 p-5 md:p-7 mb-12 md:mb-16">
                    <h4 className="text-primary uppercase text-[10px] font-bold tracking-widest mb-3">
                      The Result
                    </h4>
                    <p className="text-white text-[17px] md:text-[20px] font-medium leading-[1.7]">
                      {featuredProject.details.result}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h4 className="text-zinc-400 uppercase text-[10px] font-bold tracking-widest mb-8">Workflow</h4>
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