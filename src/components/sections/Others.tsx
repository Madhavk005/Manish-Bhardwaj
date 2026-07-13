"use client";

import { motion } from "framer-motion";

import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ShortsEmbed } from "@/components/ui/ShortsEmbed";

export default function Others() {
  return (
    <section className="py-[80px] md:py-[120px] bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-foreground">
            Others
          </h2>
          <p className="text-muted text-[18px]">
            Unique project scopes. Experimental edits. Custom workflows for specific brand needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group w-full cursor-pointer"
          >
            <VideoEmbed videoId="rmhNOayYEao" />
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-start mt-12 md:mt-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="5okcneQOBDc" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="dCfTNDM_i0A" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="O7nKSSV3A7s" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
