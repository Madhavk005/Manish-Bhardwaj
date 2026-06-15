"use client";

import { ArrowRight } from "lucide-react";

const caseStudy = {
  client: "Fitness App Launch",
  challenge: "The client had a great app but their previous ads were too generic and had a 70% drop-off rate in the first 3 seconds.",
  strategy: "Re-cut the footage using a fast-paced, high-energy montage with sound design that hits on every beat. We moved the strongest visual hook to frame 1.",
  execution: "Used dynamic speed ramping, aggressive color grading for a gritty gym look, and heavy bass drops on impact moments.",
  result: "Drop-off rate reduced to 20%. Cost per acquisition dropped by 45%. Client doubled their ad spend.",
};

export default function CaseStudies() {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Behind The Edit
            </h2>
            <p className="text-muted text-lg max-w-xl">
              Understanding the strategy that drives the timeline.
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            View All Case Studies <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#FAFAFA] rounded-3xl p-8 md:p-12 border border-border">
          
          {/* Left - The Breakdown */}
          <div>
            <h3 className="text-2xl font-bold mb-8">{caseStudy.client}</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-2">Challenge</h4>
                <p className="text-foreground">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-2">Strategy</h4>
                <p className="text-foreground">{caseStudy.strategy}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-2">Execution</h4>
                <p className="text-foreground">{caseStudy.execution}</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Result</h4>
                <p className="text-foreground font-medium">{caseStudy.result}</p>
              </div>
            </div>
          </div>

          {/* Right - Visuals */}
          <div className="flex flex-col gap-4 h-full">
            <div className="aspect-video bg-dark rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent translate-x-1" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="bg-dark rounded-2xl overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-luminosity" />
                 <div className="absolute bottom-4 left-4 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">BTS</div>
              </div>
              <div className="bg-dark rounded-2xl overflow-hidden relative flex items-center justify-center border border-border">
                {/* Timeline abstract */}
                <div className="w-full px-4 flex flex-col gap-1">
                  <div className="h-2 w-full bg-blue-500 rounded-sm" />
                  <div className="h-2 w-3/4 bg-red-500 rounded-sm" />
                  <div className="h-2 w-1/2 bg-green-500 rounded-sm" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
