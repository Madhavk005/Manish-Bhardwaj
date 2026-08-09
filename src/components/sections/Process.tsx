"use client";

import { motion } from "framer-motion";
import { Check, Upload, Layout, MessageSquare, Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    num: "01",
    title: "Drop Footage",
    icon: Upload,
    content: (
      <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6">
        {["Google Drive", "Dropbox", "WeTransfer", "Notion"].map((platform) => (
          <span key={platform} className="px-2.5 md:px-3 py-1 md:py-1.5 bg-gray-100 rounded-lg text-[13px] md:text-sm font-medium text-muted">
            {platform}
          </span>
        ))}
      </div>
    )
  },
  {
    num: "02",
    title: "I Edit",
    icon: Layout,
    content: (
      <div className="mt-4 md:mt-6 flex flex-col gap-2.5 md:gap-3">
        {/* Mock Premiere Timeline */}
        <div className="h-5 md:h-6 w-full bg-[#111] rounded-md border border-border/50 overflow-hidden flex shadow-inner">
          <div className="h-full w-1/3 bg-primary/80 border-r border-black/50" />
          <div className="h-full w-1/4 bg-primary/60 border-r border-black/50 ml-1" />
          <div className="h-full w-2/5 bg-primary/90 ml-2" />
        </div>
        {/* Mock Waveform */}
        <div className="h-5 md:h-6 w-full bg-[#111] border border-border/50 rounded-md flex items-center justify-around px-2 shadow-inner">
          {[40, 70, 30, 85, 50, 90, 60, 45, 80, 55, 75, 40, 95, 65, 35, 85, 50, 70, 45, 80].map((height, i) => (
            <div key={i} className="w-1 bg-zinc-500 rounded-full" style={{ height: `${height}%` }} />
          ))}
        </div>
        {/* Mock Color Wheels */}
        <div className="flex gap-3 md:gap-4 mt-1.5 md:mt-2">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-cyan-400/80 bg-gradient-to-tr from-cyan-500/20 to-transparent shadow-sm" />
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-fuchsia-400/80 bg-gradient-to-tr from-fuchsia-500/20 to-transparent shadow-sm" />
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-yellow-400/80 bg-gradient-to-tr from-yellow-500/20 to-transparent shadow-sm" />
        </div>
      </div>
    )
  },
  {
    num: "03",
    title: "Revise",
    icon: MessageSquare,
    content: (
      <div className="mt-4 md:mt-6 flex flex-col gap-2.5 md:gap-3">
        <div className="bg-gray-50 rounded-xl p-2.5 md:p-3 border border-border">
          <p className="text-[13px] md:text-sm text-foreground font-medium mb-1.5 md:mb-2">&quot;Slow this part down.&quot;</p>
          <div className="flex items-center gap-1 text-xs text-green-600 font-bold bg-green-50 w-fit px-2 py-1 rounded">
            <Check size={14} /> Done
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-2.5 md:p-3 border border-border">
          <p className="text-[13px] md:text-sm text-foreground font-medium mb-1.5 md:mb-2">&quot;Make text bigger.&quot;</p>
          <div className="flex items-center gap-1 text-xs text-green-600 font-bold bg-green-50 w-fit px-2 py-1 rounded">
            <Check size={14} /> Done
          </div>
        </div>
      </div>
    )
  },
  {
    num: "04",
    title: "Publish",
    icon: Send,
    content: (
      <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6">
        {["YouTube", "Instagram", "LinkedIn", "Shorts", "Reels"].map((platform) => (
          <span key={platform} className="px-2.5 md:px-3 py-1 md:py-1.5 bg-black text-white rounded-lg text-[13px] md:text-sm font-medium">
            {platform}
          </span>
        ))}
      </div>
    )
  }
];

export default function Process() {
  return (
    <section id="process" className="section-spacing bg-white">
      <div className="container-site">
        <SectionHeader
          eyebrow="Workflow"
          title="Zero Friction Workflow"
          subtitle="You create. I execute. A seamless process built for speed and quality."
          align="center"
          className="mb-12 md:mb-20"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-border -z-10" />

          {steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="bg-white md:bg-transparent border border-border md:border-0 rounded-[20px] md:rounded-none p-5 md:p-0 shadow-[0_10px_40px_rgba(0,0,0,0.04)] md:shadow-none">
                <div className="flex items-center justify-between md:block md:mb-8 gap-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-border rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <step.icon className="text-foreground" size={20} />
                  </div>
                  <span className="text-primary font-mono text-[13px] md:text-sm font-bold md:mt-8 md:mb-2 leading-none">
                    STEP {step.num}
                  </span>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 md:mb-4">{step.title}</h3>
                
                <div className="md:h-48">
                  {step.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
