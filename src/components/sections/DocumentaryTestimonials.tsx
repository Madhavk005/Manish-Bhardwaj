"use client";

import { motion } from "framer-motion";

import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ShortsEmbed } from "@/components/ui/ShortsEmbed";

export default function DocumentaryTestimonials() {
  return (
    <section className="py-[80px] md:py-[120px] bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-foreground">
            Documentary & Testimonials
          </h2>
          <p className="text-muted text-[18px]">
            Real people. Real stories. Authentic emotional connections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Main Horizontal Videos */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <VideoEmbed videoId="HDgAkZ4pt2w" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <VideoEmbed videoId="8hfSJxbnP7U" />
            </motion.div>
          </div>

          {/* YouTube Short */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group w-full max-w-[360px] cursor-pointer"
            >
              <ShortsEmbed videoId="sEf376v0ILg" />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-start mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="tXU-9UClogc" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="ne1ylQUID0Q" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="h7cpJ7aaLHI" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="Psao2ptHDBw" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="f3b3q-ZUTMk" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
