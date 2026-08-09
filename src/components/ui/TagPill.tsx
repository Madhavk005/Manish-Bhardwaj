"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export const spring = { type: "spring", stiffness: 520, damping: 24, mass: 0.8 } as const;

interface TagPillProps {
  label: string;
  className?: string;
}

export function TagPill({ label, className }: TagPillProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
      whileTap={reduceMotion ? undefined : { scale: 0.92 }}
      transition={spring}
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.07] py-1.5 px-4 backdrop-blur-xl",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_16px_rgba(0,0,0,0.2)]",
        className
      )}
    >
      <span className="text-xs font-semibold leading-none text-white/90">{label}</span>
    </motion.span>
  );
}