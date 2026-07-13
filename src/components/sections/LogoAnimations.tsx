"use client";

import { motion } from "framer-motion";

import { ShortsEmbed } from "@/components/ui/ShortsEmbed";

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

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-start mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="dXRiv7I1-fw" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="FHx9xjaTFr8" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="3i0uEt5RMB4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="-irL28vmWuQ" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
