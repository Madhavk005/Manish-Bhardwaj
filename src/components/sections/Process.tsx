"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Upload, Layout, MessageSquare, Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const steps = [
  {
    num: "01",
    title: "Drop Footage",
    icon: Upload,
    content: (
      <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6">
        {["Google Drive", "Dropbox", "WeTransfer", "Notion"].map((platform) => (
          <span key={platform} className="px-2.5 md:px-3 py-1 md:py-1.5 bg-white/5 rounded-lg text-[13px] md:text-sm font-medium text-muted">
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
        <div className="h-5 md:h-6 w-full bg-[#0D0D0D] rounded-md border border-border/50 overflow-hidden flex shadow-inner">
          <div className="h-full w-1/3 bg-primary/80 border-r border-black/50" />
          <div className="h-full w-1/4 bg-primary/60 border-r border-black/50 ml-1" />
          <div className="h-full w-2/5 bg-primary/90 ml-2" />
        </div>
        {/* Mock Waveform */}
        <div className="h-5 md:h-6 w-full bg-[#0D0D0D] border border-border/50 rounded-md flex items-center justify-around px-2 shadow-inner">
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
        <div className="bg-white/5 rounded-xl p-2.5 md:p-3 border border-border">
          <p className="text-[13px] md:text-sm text-foreground font-medium mb-1.5 md:mb-2">&quot;Slow this part down.&quot;</p>
          <div className="flex items-center gap-1 text-xs text-green-400 font-bold bg-green-500/10 w-fit px-2 py-1 rounded">
            <Check size={14} /> Done
          </div>
        </div>
        <div className="bg-white/5 rounded-xl p-2.5 md:p-3 border border-border">
          <p className="text-[13px] md:text-sm text-foreground font-medium mb-1.5 md:mb-2">&quot;Make text bigger.&quot;</p>
          <div className="flex items-center gap-1 text-xs text-green-400 font-bold bg-green-500/10 w-fit px-2 py-1 rounded">
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
          <span key={platform} className="px-2.5 md:px-3 py-1 md:py-1.5 bg-white text-[#171717] rounded-lg text-[13px] md:text-sm font-medium">
            {platform}
          </span>
        ))}
      </div>
    )
  }
];

function StepCard({
  step,
  mobile,
}: {
  step: (typeof steps)[number];
  mobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-[#1E1E1E] border border-border shadow-[0_10px_40px_rgba(0,0,0,0.3)]",
        mobile
          ? "rounded-[24px] p-5"
          : "lg:bg-transparent lg:border-0 lg:shadow-none lg:rounded-none lg:p-0"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-4",
          mobile ? "mb-4" : "lg:block lg:mb-8"
        )}
      >
        <div
          className={cn(
            "bg-[#1E1E1E] border-2 border-white/10 rounded-2xl flex items-center justify-center shadow-sm shrink-0",
            mobile ? "w-12 h-12" : "lg:w-16 lg:h-16"
          )}
        >
          <step.icon className="text-foreground" size={mobile ? 20 : 24} />
        </div>
        <span
          className={cn(
            "text-primary font-mono text-[13px] lg:text-sm font-bold leading-none",
            mobile ? "" : "lg:mt-8 lg:mb-2"
          )}
        >
          STEP {step.num}
        </span>
      </div>
      <h3 className={cn("text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4")}>
        {step.title}
      </h3>

      <div className={mobile ? "h-40" : "lg:h-48"}>{step.content}</div>
    </div>
  );
}

export default function Process() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const index = max > 0 ? Math.round((el.scrollLeft / max) * (steps.length - 1)) : 0;
    setActiveStep(index);
  };

  const scrollToStep = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement;
    el.scrollTo({
      left: child.offsetLeft + child.offsetWidth / 2 - el.clientWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <section id="process" className="section-spacing bg-[#171717] overflow-hidden">
      <div className="container-site">
        <SectionHeader
          eyebrow="Workflow"
          title="Zero Friction Workflow"
          subtitle="You create. I execute. A seamless process built for speed and quality."
          align="center"
          className="mb-10 md:mb-20"
        />

        {/* Mobile & Tablet — Swipeable Carousel */}
        <div className="lg:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-[14px] px-[14px] pb-2 gap-4"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="snap-start shrink-0 w-[88%] sm:w-[64%] md:w-[48%]"
              >
                <StepCard step={step} mobile />
              </motion.div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToStep(idx)}
                aria-label={`Go to step ${idx + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeStep === idx ? "w-7 bg-primary" : "w-2 bg-border"
                )}
              />
            ))}
          </div>
        </div>

        {/* Desktop — Grid with Connector */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
          <div className="absolute top-12 left-0 w-full h-px bg-border -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
