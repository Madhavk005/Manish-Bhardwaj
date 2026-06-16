"use client";

import { motion } from "framer-motion";

function ShortsEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-[28px] border border-border shadow-[0_10px_40px_rgba(0,0,0,.04)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] transition-shadow duration-400">
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

function VideoEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[28px] border border-border shadow-[0_10px_40px_rgba(0,0,0,.04)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] transition-shadow duration-400">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

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

        <div className="grid lg:grid-cols-12 gap-8 items-start">
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
      </div>
    </section>
  );
}
