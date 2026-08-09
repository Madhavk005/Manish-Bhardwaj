"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SOFTWARE_SKILLS = [
  { name: "Premiere Pro", percentage: 90, icon: "/softwares/adobe-premiere-pro.png" },
  { name: "After Effects", percentage: 70, icon: "/softwares/adobe-after-effects.png" },
  { name: "Photoshop", percentage: 80, icon: "/softwares/adobe-photoshop.png" },
  { name: "Illustrator", percentage: 50, icon: "/softwares/adobe-illustrator.png" },
  { name: "Notion", percentage: 75, icon: "/softwares/Notion.png" },
];

function SkillBar({ skill, index }: { skill: (typeof SOFTWARE_SKILLS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const count = useMotionValue(0);
  const progress = useTransform(count, (v) => `${v}%`);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, skill.percentage, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      delay: index * 0.12,
    });
    return () => controls.stop();
  }, [inView, count, skill.percentage, index]);

  const rounded = useTransform(count, (v) => Math.round(v));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="flex justify-between items-end mb-3 md:mb-4">
        <div className="flex items-center gap-4 md:gap-6">
          <Image
            src={skill.icon}
            alt={`${skill.name} logo`}
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.01em]">
            {skill.name}
          </h3>
        </div>
        <span className="text-xl md:text-2xl font-light text-[#A1A1AA]">
          <motion.span>{rounded}</motion.span>%
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full h-[3px] md:h-1 bg-white/10 relative overflow-hidden rounded-full">
        {/* Progress Bar Fill */}
        <motion.div
          style={{ width: progress }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-white via-white to-primary shadow-[0_0_20px_rgba(255,90,31,0.35)]"
        >
          {/* Shimmer Sweep */}
          <motion.span
            initial={{ x: "-150%" }}
            animate={{ x: "350%" }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeInOut",
              delay: 1 + index * 0.12,
            }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SoftwareProficiency() {
  return (
    <section className="relative section-spacing bg-[#050505] text-white overflow-hidden">
      <div className="container-site !max-w-[1000px]">
        <SectionHeader
          eyebrow="Software"
          title="Software Proficiency"
          subtitle="The technical foundation behind the storytelling."
          tone="dark"
          className="mb-12 md:mb-20"
        />

        <div className="flex flex-col space-y-8 md:space-y-12">
          {SOFTWARE_SKILLS.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}