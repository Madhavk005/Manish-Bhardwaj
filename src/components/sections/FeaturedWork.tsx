"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const featuredProject = {
  id: "rhythm2025",
  title: "JECRC Rhythm 2025",
  reach: "2.1M",
  engagement: "+183%",
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  posterUrl: "https://images.unsplash.com/photo-1540039155732-d68f18d76d42?q=80&w=2069&auto=format&fit=crop",
  details: {
    goal: "Create a highly energetic aftermovie that captures the essence of the festival and drives ticket sales for next year.",
    challenges: "Over 50 hours of raw footage from 12 different cameras with varying color profiles.",
    process: "Synchronized footage to a custom beat-matched track. Color graded to match the festival's neon theme.",
    role: "Lead Editor & Colorist",
    result: "Most viewed video in the university's history. 2.1M organic reach within 48 hours."
  }
};

const otherProjects = [
  { id: "p1", title: "Tech Brand Campaign", type: "Commercial", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" },
  { id: "p2", title: "Creator Masterclass", type: "Youtube", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
  { id: "p3", title: "Fitness Apparel Launch", type: "Reel", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" },
  { id: "p4", title: "Podcast Highlights", type: "Shorts", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1974&auto=format&fit=crop" },
];

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(false);

  return (
    <section id="works" className="py-[80px] md:py-[120px] bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="mb-16">
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
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                poster={featuredProject.posterUrl}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                src={featuredProject.videoUrl}
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
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-8">
            {otherProjects.slice(0, 2).map((project) => (
              <div key={project.id} className="relative group cursor-pointer aspect-square lg:aspect-auto rounded-[28px] overflow-hidden bg-dark shadow-[0_10px_40px_rgba(0,0,0,.04)] hover:shadow-[0_25px_70px_rgba(0,0,0,.08)]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between w-full">
                    <div>
                      <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">
                        {project.type}
                      </span>
                      <h4 className="text-white font-bold text-xl leading-tight">
                        {project.title}
                      </h4>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-white translate-x-2 group-hover:translate-x-0 transform">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                    src={featuredProject.videoUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                  <div className="absolute bottom-10 left-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{featuredProject.title}</h2>
                  </div>
                </div>

                <div className="p-12 md:p-16">
                  <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
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
