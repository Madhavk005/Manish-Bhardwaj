"use client";

import { useState, useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";

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

  return (
    <section className="py-16 md:py-24 lg:py-[120px] bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-foreground">
            The Impact
          </h2>
          <p className="text-muted text-[18px] max-w-xl mx-auto">
            Raw footage is just potential. The edit is the realization.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Comparison Slider */}
          <div className="lg:col-span-8 relative">
            <div 
              ref={containerRef}
              className="relative aspect-video rounded-[36px] overflow-hidden cursor-ew-resize select-none bg-dark shadow-[0_10px_40px_rgba(0,0,0,.04)]"
              onMouseMove={handleMouseMove}
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
            <div className="bg-white rounded-[28px] p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,.04)] border border-border">
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Retention</div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl font-bold text-foreground opacity-30">17%</span>
                <span className="text-muted text-lg md:text-xl">→</span>
                <span className="text-3xl md:text-[40px] font-bold text-primary tracking-tight">{retention}%</span>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,.04)] border border-border">
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Watch Time</div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl font-bold text-foreground opacity-30">32s</span>
                <span className="text-muted text-lg md:text-xl">→</span>
                <span className="text-3xl md:text-[40px] font-bold text-primary tracking-tight">2m 48s</span>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,.04)] border border-border">
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
