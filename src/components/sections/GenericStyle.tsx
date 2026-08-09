"use client";

import { motion } from "framer-motion";

import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShortsGrid } from "@/components/ui/ShortsGrid";

export default function GenericStyle() {
  return (
    <section className="section-spacing bg-background min-h-screen">
      <div className="container-site">
        <SectionHeader
          eyebrow="Generic Style"
          title="Generic Style"
          subtitle="Versatile edits. Clean cuts. Perfect for corporate communication and standard brand messaging."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group w-full cursor-pointer"
          >
            <VideoEmbed videoId="HtnQ23p3i08" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group w-full cursor-pointer"
          >
            <VideoEmbed videoId="z4LttfymT0I" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group w-full cursor-pointer lg:col-span-2 lg:w-1/2 lg:mx-auto"
          >
            <VideoEmbed videoId="hMKtjynudlc" title="Generic style corporate edit" />
          </motion.div>
        </div>

        <ShortsGrid
          titlePrefix="Generic style"
          className="mt-10 md:mt-12"
          videoIds={[
            "MQbunb2LfTU",
            "QYXzK7ZbEaM",
            "upLeQclMz3M",
            "KtcqGWaim80",
            "ueEPDeWDwzs",
            "6itxkWQWpWE",
            "AK1knAUdcKg",
            "zWoOpeQ1pRg",
            "wwFQFTdFCi8",
            "N4gbmCShSL0",
            "hKjlHAf2uZY",
            "D2jEc5HB2vI",
            "x7L-yrdPUak",
            "SfD9Q5rDODg",
            "3qoCpirKPkw",
            "20KYxgseFrA",
            "_NcPuvnHNeY",
            "qonnQ3OaDwU",
          ]}
        />
      </div>
    </section>
  );
}