"use client";

import { motion } from "framer-motion";

import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ShortsEmbed } from "@/components/ui/ShortsEmbed";

export default function GenericStyle() {
  return (
    <section className="py-[80px] md:py-[120px] bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-foreground">
            Generic Style
          </h2>
          <p className="text-muted text-[18px]">
            Versatile edits. Clean cuts. Perfect for corporate communication and standard brand messaging.
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
            <VideoEmbed videoId="hMKtjynudlc" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-12 md:mt-16 justify-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="MQbunb2LfTU" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="QYXzK7ZbEaM" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="upLeQclMz3M" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="KtcqGWaim80" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="ueEPDeWDwzs" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="6itxkWQWpWE" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="AK1knAUdcKg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="zWoOpeQ1pRg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="wwFQFTdFCi8" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="N4gbmCShSL0" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="hKjlHAf2uZY" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="D2jEc5HB2vI" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="x7L-yrdPUak" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="SfD9Q5rDODg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="3qoCpirKPkw" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="20KYxgseFrA" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="_NcPuvnHNeY" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="group w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] flex-none mx-auto cursor-pointer"
          >
            <ShortsEmbed videoId="qonnQ3OaDwU" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
