"use client";

import { motion } from "framer-motion";

import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShortsGrid } from "@/components/ui/ShortsGrid";

export default function MotionUI() {
  return (
    <section className="section-spacing bg-background min-h-screen">
      <div className="container-site">
        <SectionHeader
          eyebrow="Motion UI"
          title="Motion UI"
          subtitle="UI/UX animation. Product walkthroughs. Screen replacements and digital interaction design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group w-full cursor-pointer"
          >
            <VideoEmbed videoId="E7w0AN2EuZ4" title="Motion UI demo — screen animation" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group w-full cursor-pointer"
          >
            <VideoEmbed videoId="YWwKVkqu8cE" title="Motion UI demo — product walkthrough" />
          </motion.div>
        </div>

        <ShortsGrid
          titlePrefix="Motion UI"
          videoIds={["osFJ78ha2jA", "jhm7P7Nc_nc", "IE-dQ-JsIHQ", "vdfAce-gBJU", "ojNfEi6DS7I", "teBNuqAN3qY"]}
          className="mt-10 md:mt-12"
        />
      </div>
    </section>
  );
}