"use client";

import { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { MotionConfig } from "framer-motion";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
}