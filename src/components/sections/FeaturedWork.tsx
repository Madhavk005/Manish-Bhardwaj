"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Volume2, VolumeX, X } from "lucide-react";
import { ShortsGrid } from "@/components/ui/ShortsGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagPill, spring } from "@/components/ui/TagPill";
import { cn } from "@/lib/utils";

const featuredProject = {
  index: "01",
  title: "THE VIRTUAL PODCAST Intro",
  client: "The Virtual Podcast",
  reach: "High Impact",
  engagement: "Brand Identity",
  videoUrl:
    "https://www.youtube.com/embed/3_oTy3uNRbo?si=5od7P57XeVm926Qr&autoplay=1&mute=1&loop=1&playlist=3_oTy3uNRbo",
  details: {
    goal: "Design a high-energy, visually striking intro sequence to establish the brand identity and tone for The Virtual Podcast.",
    challenges:
      "Condensing the core essence of the podcast into a fast-paced, engaging visual hook that grabs attention within the first 3 seconds.",
    process:
      "Utilized dynamic typography, fluid motion graphics, and a driving audio track to create a seamless and impactful brand introduction.",
    role: "Motion Graphics Artist & Video Editor",
    result:
      "Established a professional and recognizable visual signature that elevates the production value of every episode.",
  },
};

const shorts = ["osFJ78ha2jA", "qQsnVjubnos", "HL-si5SAsi0"];

const workflowSteps = ["HOOK", "EDIT", "COLOR", "SFX", "FINAL VIDEO"];

function CaseSection({
  num,
  label,
  children,
}: {
  num: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs font-bold tracking-[0.2em] text-primary">{num}</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">{label}</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <p className="text-white/85 text-[15px] md:text-base leading-[1.8]">{children}</p>
    </div>
  );
}

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(false);
  const [uiVisible, setUiVisible] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
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

  const caseStudyPills = (
    <motion.div
      animate={{ opacity: uiVisible ? 1 : 0, y: uiVisible ? 0 : 8 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn(
        "flex flex-wrap items-center gap-2 mt-2.5 md:mt-3",
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
  );

  const cornerBrackets = (
    <div className="pointer-events-none absolute inset-4 md:inset-6 z-20" aria-hidden>
      <span className="absolute top-0 left-0 h-5 w-5 md:h-7 md:w-7 border-t-2 border-l-2 border-white/30 group-hover:border-primary/70 transition-colors duration-500" />
      <span className="absolute top-0 right-0 h-5 w-5 md:h-7 md:w-7 border-t-2 border-r-2 border-white/30 group-hover:border-primary/70 transition-colors duration-500" />
      <span className="absolute bottom-0 left-0 h-5 w-5 md:h-7 md:w-7 border-b-2 border-l-2 border-white/30 group-hover:border-primary/70 transition-colors duration-500" />
      <span className="absolute bottom-0 right-0 h-5 w-5 md:h-7 md:w-7 border-b-2 border-r-2 border-white/30 group-hover:border-primary/70 transition-colors duration-500" />
    </div>
  );

  return (
    <section id="works" className="section-spacing bg-background">
      <div className="container-site">
        {/* Header row with editorial index marker */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Portfolio"
            title="Selected Works"
            subtitle="A curated selection of edits that moved the needle."
            className="mb-0"
          />
          <div className="hidden md:flex items-center gap-4 font-mono text-xs tracking-[0.3em] text-muted pb-2">
            <span className="font-bold text-primary">01</span>
            <span className="h-px w-10 bg-border" />
            <span>SELECTED WORK</span>
          </div>
        </div>

        <div className="flex flex-col gap-14 md:gap-20">

          {/* Featured Project Card */}
          <div className="w-full group">
            <div className="relative aspect-video w-full rounded-[24px] md:rounded-[40px] overflow-hidden bg-dark border border-border transition-shadow duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.25)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <iframe
                className="absolute inset-0 w-full h-full scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                src={featuredProject.videoUrl}
                frameBorder="0"
                scrolling="no"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title={featuredProject.title}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              {/* Featured chip */}
              <div className="pointer-events-none absolute top-5 left-5 md:top-7 md:left-7 z-20 flex items-center gap-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                  Featured Work — {featuredProject.index}
                </span>
              </div>

              {cornerBrackets}

              {/* Play affordance — decorative only, never blocks the player */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full border border-primary/30 animate-ping" />
                  <div className="relative w-[74px] h-[74px] sm:w-20 sm:h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                    <Play size={28} className="text-white translate-x-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Mobile hint */}
              <div className="pointer-events-none absolute bottom-5 left-5 md:hidden">
                <span className="px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white/80 text-[11px] font-semibold uppercase tracking-wider">
                  Tap to play
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-5 sm:gap-6 pt-6 md:pt-8">
              <div className="min-w-0">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-2.5">
                  {featuredProject.client} — {featuredProject.index} / 01
                </p>
                <h3 className="text-[26px] sm:text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.05]">
                  {featuredProject.title}
                </h3>
                <motion.div
                  animate={{ opacity: uiVisible ? 1 : 0, y: uiVisible ? 0 : 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={cn(
                    "flex flex-wrap items-center gap-2 mt-4 md:mt-5",
                    !uiVisible && "pointer-events-none"
                  )}
                >
                  <TagPill label={`${featuredProject.reach} Reach`} />
                  <TagPill label={`${featuredProject.engagement} Engagement`} />
                </motion.div>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); setSelectedProject(true); }}
                className="group/btn inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-primary hover:bg-primary"
              >
                Open Case Study
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </button>
            </div>
          </div>

          {/* Shorts */}
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight">More Cuts</h3>
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-muted">
                Shorts
              </span>
            </div>
            <ShortsGrid titlePrefix="Portfolio" videoIds={shorts} />
          </div>

        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={overlayRef}
              role="dialog"
              aria-modal="true"
              aria-label={`Case study: ${featuredProject.title}`}
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedProject(false);
              }}
              className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-sm flex items-start md:items-center justify-center md:p-6 lg:p-10"
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
                initial={{ y: 24, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 12, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:max-w-[1080px] bg-[#111111] rounded-none md:rounded-[36px] overflow-y-auto overscroll-contain border border-white/10 shadow-2xl max-h-[100dvh] md:max-h-[calc(100dvh-3rem)] lg:max-h-[calc(100dvh-5rem)]"
              >
                {/* Hero — scrolls with the rest of the case study */}
                <div className="relative aspect-video md:aspect-[21/9] bg-black rounded-none md:rounded-t-[36px] overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={soundOn ? featuredProject.videoUrl.replace("&mute=1", "&mute=0") : featuredProject.videoUrl}
                    frameBorder="0"
                    scrolling="no"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                    allowFullScreen
                    title={featuredProject.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pointer-events-none" />

                  {/* Sound toggle — video opens muted (WCAG 1.4.2) */}
                  <button
                    onClick={() => setSoundOn((v) => !v)}
                    aria-pressed={soundOn}
                    aria-label={soundOn ? "Mute video" : "Unmute video"}
                    className="absolute top-5 left-5 md:top-6 md:right-6 md:left-auto z-30 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 hover:bg-primary hover:border-primary hover:text-white transition-colors duration-300"
                  >
                    {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
                    {soundOn ? "On" : "Off"}
                  </button>

                  {/* Hero chip — hidden on mobile (title block below covers it) */}
                  <div className="hidden md:flex absolute top-7 left-7 items-center gap-3 rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                      Case Study — Selected Work {featuredProject.index}
                    </span>
                  </div>

                  {/* Desktop title overlay */}
                  <div className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0 md:bottom-8 md:left-12 md:right-0">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">
                      {featuredProject.client}
                    </p>
                    <h2 id="case-study-title" className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-[1.05]">
                      {featuredProject.title}
                    </h2>
                    {caseStudyPills}
                  </div>
                </div>

                {/* Mobile title block */}
                <div className="md:hidden px-5 sm:px-8 pt-6 pb-2">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-2">
                    {featuredProject.client}
                  </p>
                  <h2 id="case-study-title-mobile" className="text-2xl font-bold tracking-tight text-white">
                    {featuredProject.title}
                  </h2>
                  {caseStudyPills}
                </div>

                {/* Body */}
                <div className="px-5 sm:px-8 md:px-12 lg:px-14 pt-8 md:pt-12 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:pb-14">
                  <div className="max-w-[880px] mx-auto">
                    {/* Spec strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 overflow-hidden rounded-[20px] border border-border bg-white/[0.02] divide-y sm:divide-y-0 sm:divide-x divide-border">
                      <div className="p-5 md:p-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2">
                          Client
                        </p>
                        <p className="text-white font-semibold leading-snug">
                          {featuredProject.client}
                        </p>
                      </div>
                      <div className="p-5 md:p-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2">
                          Role
                        </p>
                        <p className="text-white font-semibold leading-snug">
                          {featuredProject.details.role}
                        </p>
                      </div>
                      <div className="p-5 md:p-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2">
                          Outcomes
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <TagPill label={`${featuredProject.reach} Reach`} />
                          <TagPill label={`${featuredProject.engagement}`} />
                        </div>
                      </div>
                    </div>

                    {/* Main grid */}
                    <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 mt-12 md:mt-14">
                      {/* Main copy */}
                      <div className="lg:col-span-7 flex flex-col gap-10 md:gap-12">
                        <CaseSection num="01" label="Overview">
                          {featuredProject.details.goal}
                        </CaseSection>
                        <CaseSection num="02" label="The Challenge">
                          {featuredProject.details.challenges}
                        </CaseSection>
                        <CaseSection num="03" label="Approach">
                          {featuredProject.details.process}
                        </CaseSection>
                      </div>

                      {/* Workflow sidebar */}
                      <aside className="lg:col-span-5 self-start">
                        <div className="rounded-[20px] bg-white/[0.03] border border-border p-6 md:p-7">
                          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">
                            Workflow
                          </p>
                          <ol>
                            {workflowSteps.map((step, i) => {
                              const last = i === workflowSteps.length - 1;
                              return (
                                <li key={step} className="flex gap-4">
                                  <div className="flex flex-col items-center">
                                    <span
                                      className={cn(
                                        "mt-1 h-2.5 w-2.5 rounded-full border",
                                        last
                                          ? "bg-primary border-primary shadow-[0_0_12px_rgba(255,90,31,0.6)]"
                                          : "bg-transparent border-primary/50"
                                      )}
                                    />
                                    {!last && <span className="w-px flex-1 bg-white/10 my-1" />}
                                  </div>
                                  <span
                                    className={cn(
                                      "pb-6 text-[13px] font-bold tracking-[0.15em]",
                                      last ? "text-primary" : "text-white/60"
                                    )}
                                  >
                                    {step}
                                  </span>
                                </li>
                              );
                            })}
                          </ol>
                        </div>
                      </aside>
                    </div>

                    {/* Result — editorial pull-quote */}
                    <div className="relative mt-12 md:mt-16 rounded-[24px] md:rounded-[32px] bg-[#FF5A1F]/[0.08] border border-[#FF5A1F]/20 p-8 md:p-12 overflow-hidden">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -top-10 right-4 font-heading text-[150px] leading-none text-[#FF5A1F]/10 select-none"
                      >
                        &rdquo;
                      </span>
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-5">
                        04 — The Result
                      </p>
                      <p className="relative text-xl md:text-[26px] font-semibold text-white leading-[1.5] tracking-tight max-w-2xl">
                        {featuredProject.details.result}
                      </p>
                    </div>

                    {/* Footer actions */}
                    <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <a
                        href="https://www.youtube.com/watch?v=3_oTy3uNRbo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/yt inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(255,90,31,0.35)] hover:bg-white hover:text-[#111111] transition-colors duration-300"
                      >
                        Watch the Full Project
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover/yt:translate-x-0.5 group-hover/yt:-translate-y-0.5"
                        />
                      </a>
                      <button
                        onClick={() => setSelectedProject(false)}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/15 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors duration-300"
                      >
                        Close Case Study
                        <X size={16} />
                      </button>
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