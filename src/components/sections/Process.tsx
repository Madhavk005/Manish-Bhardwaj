"use client";

import { motion } from "framer-motion";
import { Check, Upload, Layout, MessageSquare, Send } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Drop Footage",
    icon: Upload,
    content: (
      <div className="flex flex-wrap gap-3 mt-6">
        {["Google Drive", "Dropbox", "WeTransfer", "Notion"].map((platform) => (
          <span key={platform} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-muted">
            {platform}
          </span>
        ))}
      </div>
    )
  },
  {
    num: "02",
    title: "We Edit",
    icon: Layout,
    content: (
      <div className="mt-6 flex flex-col gap-3">
        {/* Mock Premiere Timeline */}
        <div className="h-6 w-full bg-blue-500/20 rounded-md border border-blue-500/30 overflow-hidden flex">
          <div className="h-full w-1/3 bg-blue-500/50 border-r border-blue-600/50" />
          <div className="h-full w-1/4 bg-blue-500/30 border-r border-blue-600/50 ml-1" />
          <div className="h-full w-2/5 bg-blue-500/60 ml-2" />
        </div>
        {/* Mock Waveform */}
        <div className="h-6 w-full bg-green-500/10 rounded-md flex items-center justify-around px-2 opacity-70">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1 bg-green-500 rounded-full" style={{ height: `${Math.max(20, Math.random() * 100)}%` }} />
          ))}
        </div>
        {/* Mock Color Wheels */}
        <div className="flex gap-4 mt-2">
          <div className="w-8 h-8 rounded-full border-2 border-orange-400 bg-gradient-to-tr from-orange-500/20 to-transparent" />
          <div className="w-8 h-8 rounded-full border-2 border-blue-400 bg-gradient-to-tr from-blue-500/20 to-transparent" />
          <div className="w-8 h-8 rounded-full border-2 border-purple-400 bg-gradient-to-tr from-purple-500/20 to-transparent" />
        </div>
      </div>
    )
  },
  {
    num: "03",
    title: "Revise",
    icon: MessageSquare,
    content: (
      <div className="mt-6 flex flex-col gap-3">
        <div className="bg-gray-50 rounded-xl p-3 border border-border">
          <p className="text-sm text-foreground font-medium mb-2">&quot;Slow this part down.&quot;</p>
          <div className="flex items-center gap-1 text-xs text-green-600 font-bold bg-green-50 w-fit px-2 py-1 rounded">
            <Check size={14} /> Done
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 border border-border">
          <p className="text-sm text-foreground font-medium mb-2">&quot;Make text bigger.&quot;</p>
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
      <div className="flex flex-wrap gap-3 mt-6">
        {["YouTube", "Instagram", "LinkedIn", "Shorts", "Reels"].map((platform) => (
          <span key={platform} className="px-3 py-1.5 bg-black text-white rounded-lg text-sm font-medium">
            {platform}
          </span>
        ))}
      </div>
    )
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Zero Friction Workflow
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            You create. I execute. A seamless process built for speed and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
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
              <div className="w-16 h-16 bg-white border-2 border-border rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <step.icon className="text-foreground" size={24} />
              </div>
              
              <div className="text-primary font-mono text-sm font-bold mb-2">STEP {step.num}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
              
              <div className="h-48">
                {step.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
