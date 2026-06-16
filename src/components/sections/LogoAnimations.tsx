"use client";

import { motion } from "framer-motion";

function ShortsEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-[28px] border border-border shadow-[0_10px_40px_rgba(0,0,0,.04)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] transition-shadow duration-400 mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Short"
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function LogoAnimations() {
  return (
    <section className="py-[80px] md:py-[120px] bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-foreground">
            Logos & Brand Animations
          </h2>
          <p className="text-muted text-[18px]">
            Custom motion graphics. Fluid transitions. Breathing life into static brand assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group w-full cursor-pointer"
          >
            <ShortsEmbed videoId="dXRiv7I1-fw" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group w-full cursor-pointer"
          >
            <ShortsEmbed videoId="FHx9xjaTFr8" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group w-full cursor-pointer"
          >
            <ShortsEmbed videoId="3i0uEt5RMB4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group w-full cursor-pointer"
          >
            <ShortsEmbed videoId="-irL28vmWuQ" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
