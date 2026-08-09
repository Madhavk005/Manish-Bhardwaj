"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export default function Showreel() {
  return (
    <section id="showreel" className="section-spacing bg-background relative">
      <div className="container-site">
        <SectionHeader
          eyebrow="Showreel"
          title="The Showreel"
          subtitle="A culmination of pacing, sound design, and visual storytelling."
          align="center"
        />

        {/* Video Player */}
        <Reveal y={32}>
          <div className="relative aspect-video max-w-5xl mx-auto rounded-[24px] md:rounded-[32px] overflow-hidden bg-black shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-border transition-shadow duration-500 hover:shadow-[0_20px_80px_rgba(255,90,31,0.12)]">
          <iframe
            src="https://www.youtube.com/embed/WkvZldMTKIE?si=yR-K6OlIJyIzdU-n&autoplay=1&mute=1&loop=1&playlist=WkvZldMTKIE"
            title="Manish Bhardwaj showreel video"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            allowFullScreen
          />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
