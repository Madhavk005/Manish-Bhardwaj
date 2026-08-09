"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "framer-motion";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
}
