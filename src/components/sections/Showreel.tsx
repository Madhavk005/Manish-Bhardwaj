"use client";

export default function Showreel() {
  return (
    <section id="showreel" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight mb-4">
            The Showreel
          </h2>
          <p className="text-muted text-lg max-w-xl">
            A culmination of pacing, sound design, and visual storytelling.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video max-w-5xl mx-auto rounded-[24px] md:rounded-[32px] overflow-hidden bg-black shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-border">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/WkvZldMTKIE?si=yR-K6OlIJyIzdU-n&autoplay=1&mute=1&loop=1&playlist=WkvZldMTKIE" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            loading="lazy"
        allowFullScreen
            className="absolute top-0 left-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
