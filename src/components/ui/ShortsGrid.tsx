"use client";

import { motion } from "framer-motion";
import { ShortsEmbed } from "@/components/ui/ShortsEmbed";
import { cn } from "@/lib/utils";

interface ShortsGridProps {
  videoIds: string[];
  titlePrefix?: string;
  className?: string;
}

export function ShortsGrid({ videoIds, titlePrefix = "YouTube", className }: ShortsGridProps) {
  return (
    <div
      className={cn(
        "grid grid-flow-col auto-cols-[72%] gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:gap-5 sm:overflow-visible lg:grid-cols-3 xl:grid-cols-4 lg:gap-6",
        className
      )}
    >
      {videoIds.map((videoId, index) => (
        <motion.div
          key={`${videoId}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
          className="w-full snap-center"
        >
          <ShortsEmbed videoId={videoId} title={`${titlePrefix} short ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
}