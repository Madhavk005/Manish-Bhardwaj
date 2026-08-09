"use client";

import { motion } from "framer-motion";

import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ShortsEmbed } from "@/components/ui/ShortsEmbed";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShortsGrid } from "@/components/ui/ShortsGrid";

export default function DocumentaryTestimonials() {
  return (
    <section className="section-spacing bg-background">
      <div className="container-site">
        <SectionHeader
          eyebrow="Documentary"
          title="Documentary & Testimonials"
          subtitle="Real people. Real stories. Authentic emotional connections."
        />

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

          {/* Single Short */}
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

        <ShortsGrid
          videoIds={["tXU-9UClogc", "ne1ylQUID0Q", "h7cpJ7aaLHI", "Psao2ptHDBw", "f3b3q-ZUTMk"]}
          className="mt-12 md:mt-16"
        />
      </div>
    </section>
  );
}