"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "showreel", label: "Showreel" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "results", label: "Results" },
  { id: "works", label: "Works" },
  { id: "beyond-editing", label: "Beyond The Edit" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

function DockItem({
  section,
  index,
  active,
  mouseY,
}: {
  section: (typeof sections)[number];
  index: number;
  active: boolean;
  mouseY: MotionValue<number>;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return 9999;
    return Math.max(0, Math.abs(val - (bounds.top + bounds.height / 2)));
  });

  const baseScale = useTransform(distance, [0, 120], [1.45, 1]);
  const scale = useSpring(baseScale, { stiffness: 170, damping: 15, mass: 0.1 });

  return (
    <motion.button
      ref={ref}
      style={{ scale }}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onClick={() =>
        document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
      }
      aria-current={active ? "true" : undefined}
      className="group flex items-center gap-2.5 py-1.5 origin-right cursor-pointer"
    >
      <span
        className={cn(
          "text-[11px] font-medium tracking-[0.08em] leading-none transition-colors duration-500",
          active ? "text-white" : "text-white/25 group-hover:text-white/60"
        )}
      >
        {section.label}
      </span>
      {active && (
        <span
          aria-hidden
          className="h-[3px] w-5 rounded-full bg-primary"
        />
      )}
    </motion.button>
  );
}

export default function SectionRail() {
  const [active, setActive] = useState("home");
  const mouseY = useMotionValue(99999);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile & Tablet — labeled section menu (text-only, active orange bar) */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        aria-label="Section navigation"
        className="fixed right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-40 lg:hidden flex flex-col items-end gap-2.5"
      >
        {sections.map((section, index) => {
          const isActive = active === section.id;
          return (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() =>
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
              }
              aria-current={isActive ? "true" : undefined}
              className="group flex items-center gap-2.5 py-1.5 cursor-pointer"
            >
              <span
                className={cn(
                  "text-[11px] font-medium tracking-[0.08em] leading-none transition-colors duration-500",
                  isActive ? "text-white" : "text-white/25 group-hover:text-white/60"
                )}
              >
                {section.label}
              </span>
              {isActive && (
                <span
                  aria-hidden
                  className="h-[3px] w-5 rounded-full bg-primary transition-all duration-500 ease-out"
                />
              )}
            </motion.button>
          );
        })}
      </motion.nav>

      {/* Desktop — Apple-style magnification rail */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onMouseMove={(e) => mouseY.set(e.clientY)}
        onMouseLeave={() => mouseY.set(99999)}
        aria-label="Section navigation"
        className="fixed right-10 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col"
      >
        {sections.map((section, index) => (
          <DockItem
            key={section.id}
            section={section}
            index={index}
            active={active === section.id}
            mouseY={mouseY}
          />
        ))}
      </motion.nav>
    </>
  );
}