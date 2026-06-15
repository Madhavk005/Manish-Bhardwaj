"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "300+", label: "Videos Edited" },
  { value: "50+", label: "Creators" },
  { value: "20M+", label: "Views Generated" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden relative group">
              {/* Image with B&W to Color transition */}
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" 
                role="img"
                aria-label="Portrait of Manish Bhardwaj"
              />
              
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Elements (optional subtle accents) */}
            <div className="absolute -z-10 top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-dark/5 rounded-full blur-2xl" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
              Behind every <br className="hidden md:block" />
              great video <br className="hidden md:block" />
              is <span className="text-muted italic font-normal">timing.</span> <br />
              <span className="text-muted italic font-normal">emotion.</span> <br />
              <span className="text-muted italic font-normal">rhythm.</span> <br />
              <span className="text-primary">obsession.</span>
            </h2>
            
            <p className="text-lg text-muted mb-12 max-w-md">
              I partner with ambitious creators and brands to engineer attention. No fluff. Just calculated edits designed to keep eyes on the screen and emotions high.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-primary pl-4">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
