"use client";

import { useState, useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(metricsRef, { once: true, margin: "-100px" });

  const [retention, setRetention] = useState(17);
  const [ctr, setCtr] = useState(1.2);

  useEffect(() => {
    if (isInView) {
      const controls1 = animate(17, 73, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => setRetention(Math.round(val))
      });
      const controls2 = animate(1.2, 6.8, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => setCtr(Number(val.toFixed(1)))
      });
      return () => {
        controls1.stop();
        controls2.stop();
      };
    }
  }, [isInView]);
const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - left, width));
    const percentage = (x / width) * 100;

    setSliderPosition(percentage);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleMouseMove(e);
  };

  const handleSliderKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section id="results" className="section-spacing bg-[#171717] overflow-hidden">
      <div className="container-site">
        <SectionHeader
          eyebrow="Results"
          title="The Impact"
          subtitle="Raw footage is just potential. The edit is the realization."
          align="center"
        />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Comparison Slider */}
          <div className="lg:col-span-8 relative">
            <div
              ref={containerRef}
              role="slider"
              tabIndex={0}
              aria-label="Before and after comparison slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPosition)}
              onKeyDown={handleSliderKeyDown}
              className="relative aspect-video rounded-[36px] overflow-hidden cursor-ew-resize select-none bg-dark shadow-[0_10px_40px_rgba(0,0,0,.04)] touch-none focus-visible:ring-2 focus-visible:ring-primary/60"
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleMouseMove}
            >
              {/* RAW Image (Background) */}
              <div 
                className="absolute inset-0 grayscale opacity-80"
                role="img"
                aria-label="Raw video footage"
              >
                <Image
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
                  alt="Raw video footage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white/70 text-sm font-medium z-10">
                  RAW
                </div>
              </div>

              {/* EDITED Image (Foreground, clipped) */}
              <div 
                className="absolute inset-0"
                style={{ 
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
                role="img"
                aria-label="Edited video footage"
              >
                <Image
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
                  alt="Edited video footage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium z-10">
                  EDITED
                </div>
                {/* Simulated color grading / LUT overlay */}
                <div className="absolute inset-0 bg-[#FF5A1F] mix-blend-overlay opacity-10 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center text-dark hover:scale-110 transition-transform border border-white/20">
                  <MoveHorizontal size={24} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div ref={metricsRef} className="lg:col-span-4 flex flex-col justify-center gap-6">
            <div className="card-shell p-6 md:p-8">
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Retention</div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl font-bold text-foreground opacity-30">17%</span>
                <span className="text-muted text-lg md:text-xl">→</span>
                <span className="text-3xl md:text-[40px] font-bold text-primary tracking-tight">{retention}%</span>
              </div>
            </div>

            <div className="card-shell p-6 md:p-8">
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Watch Time</div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl font-bold text-foreground opacity-30">32s</span>
                <span className="text-muted text-lg md:text-xl">→</span>
                <span className="text-3xl md:text-[40px] font-bold text-primary tracking-tight">2m 48s</span>
              </div>
            </div>

            <div className="card-shell p-6 md:p-8">
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Click Through Rate</div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl font-bold text-foreground opacity-30">1.2%</span>
                <span className="text-muted text-lg md:text-xl">→</span>
                <span className="text-3xl md:text-[40px] font-bold text-primary tracking-tight">{ctr}%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
