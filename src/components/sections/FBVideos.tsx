"use client";

import { motion } from "framer-motion";

import { ShortsEmbed } from "@/components/ui/ShortsEmbed";

export default function FBVideos() {
  return (
    <section className="py-[80px] md:py-[120px] bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-foreground">
            Food & Beverages
          </h2>
          <p className="text-muted text-[18px]">
            Cinematic lighting. Crave-inducing edits. Visually delicious content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-12 md:mt-16 justify-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="cpnYXpi-gOc" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="B0F5bsensHk" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="C6AYmIeINvw" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="AOUNS1YmenA" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="wzHtPSwiPIs" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="p2cTj3JwPz0" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="UiBygTIdubQ" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
