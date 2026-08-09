"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Play } from "lucide-react";
import { ShortsGrid } from "@/components/ui/ShortsGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagPill, spring } from "@/components/ui/TagPill";
import { cn } from "@/lib/utils";

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

const shorts = ["osFJ78ha2jA", "qQsnVjubnos", "HL-si5SAsi0"];

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(false);
  const [uiVisible, setUiVisible] = useState(true);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let timer: ReturnType<typeof setTimeout>;
    const reveal = () => {
      setUiVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setUiVisible(false), 3000);
    };
    reveal();
    window.addEventListener("mousemove", reveal);
    window.addEventListener("keydown", reveal);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", reveal);
      window.removeEventListener("keydown", reveal);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lastTriggerRef.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(false);
        return;
      }
      // Basic focus trap: keep Tab cycling inside the dialog
      if (e.key !== "Tab" || !overlayRef.current) return;
      const focusable = Array.from(
        overlayRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], iframe, [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      lastTriggerRef.current?.focus();
    };
  }, [selectedProject]);

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
          <div
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            aria-label={`Open case study: ${featuredProject.title}`}
            onClick={() => setSelectedProject(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedProject(true);
              }
            }}
            className="w-full group cursor-pointer outline-none rounded-[24px] md:rounded-[36px] focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
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
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6 pt-5 md:pt-7">
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                  {featuredProject.title}
                </h3>
                <motion.div
                  animate={{ opacity: uiVisible ? 1 : 0, y: uiVisible ? 0 : 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={cn(
                    "flex flex-wrap items-center gap-2 mt-3 md:mt-4",
                    !uiVisible && "pointer-events-none"
                  )}
                >
                  <TagPill label={`${featuredProject.reach} Reach`} />
                  <TagPill label={`${featuredProject.engagement} Engagement`} />
                </motion.div>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); setSelectedProject(true); }}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-white text-[#171717] text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300 shrink-0"
              >
                View Case Study
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Shorts — swipeable on mobile, grid from sm */}
          <ShortsGrid titlePrefix="Portfolio" videoIds={shorts} />

        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={overlayRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedProject(false);
              }}
              className="fixed inset-0 z-[100] bg-[#0A0A0A] flex items-start md:items-center justify-center md:p-8 overflow-y-auto overscroll-contain"
            >
              <button
                ref={closeBtnRef}
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
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pointer-events-none" />
                  <div className="pointer-events-none md:absolute md:bottom-10 md:left-12 md:max-w-none">
                    <h2 id="case-study-title" className="text-2xl md:text-5xl font-bold tracking-tight text-white px-4 md:px-0">{featuredProject.title}</h2>
                    <motion.div
                      animate={{ opacity: uiVisible ? 1 : 0, y: uiVisible ? 0 : 8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className={cn(
                        "flex flex-wrap items-center gap-2 mt-2.5 md:mt-3 px-4 md:px-0",
                        uiVisible ? "pointer-events-auto" : "pointer-events-none"
                      )}
                    >
                      <TagPill label="The Virtual Podcast" />
                      <TagPill label="Episode Intro" />
                      <motion.a
                        href="https://www.youtube.com/watch?v=3_oTy3uNRbo"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.94 }}
                        transition={spring}
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white shadow-[0_4px_16px_rgba(255,90,31,0.35)] hover:bg-white hover:text-[#111111] transition-colors"
                      >
                        Watch on YouTube
                      </motion.a>
                    </motion.div>
                  </div>
                </div>

                <div className="p-5 sm:p-8 md:p-12 lg:p-16">
                  <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-16 gap-y-8 md:gap-y-12 mb-10 md:mb-14">
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
                  <div className="rounded-[20px] md:rounded-[24px] bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 p-5 md:p-7 mb-10 md:mb-14">
                    <h4 className="text-primary uppercase text-[10px] font-bold tracking-widest mb-3">
                      The Result
                    </h4>
                    <p className="text-white text-[17px] md:text-[20px] font-medium leading-[1.7]">
                      {featuredProject.details.result}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h4 className="text-zinc-400 uppercase text-[10px] font-bold tracking-widest mb-6 md:mb-8">Workflow</h4>
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

                  {/* Close action for easy exit after reading */}
                  <div className="mt-8 md:mt-12">
                    <button
                      onClick={() => setSelectedProject(false)}
                      className="w-full py-4 rounded-full bg-white/5 border border-white/15 text-white font-bold text-[15px] hover:bg-primary hover:border-primary transition-colors duration-300"
                    >
                      Close Case Study
                    </button>
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