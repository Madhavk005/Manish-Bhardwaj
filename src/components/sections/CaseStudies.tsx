"use client";

import { motion } from "framer-motion";
import { Camera, TrendingUp } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const services = [
  {
    num: "01",
    title: "Direction & Shoot",
    icon: Camera,
    description:
      "Bringing concepts to life behind the lens. From conceptualization to final execution, I direct talent, configure lighting, and capture high-fidelity cinematic footage that aligns perfectly with your brand's creative vision.",
    features: [
      "Cinematography",
      "On-Set Direction",
      "Lighting & Rigging",
      "Pre-production Planning",
    ],
    image: "/Direction.png",
    alt: "Cinematic camera rig on a film set during a direction and shoot session",
  },
  {
    num: "02",
    title: "Social Media Management",
    icon: TrendingUp,
    description:
      "Turning great content into measurable growth. I develop data-driven content strategies, manage posting schedules, and optimize distribution across platforms to maximize organic reach and audience engagement.",
    features: [
      "Content Strategy",
      "Audience Growth",
      "Analytics & Reporting",
      "Trend Analysis",
    ],
    image: "/SMM.jpg",
    alt: "Social media analytics dashboard showing audience growth metrics",
  },
];

function CaseRow({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const flipped = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid md:grid-cols-12 gap-6 md:gap-10 items-center"
    >
      {/* Ghost number — editorial backdrop */}
      <span
        aria-hidden
        className={cn(
          "hidden md:block pointer-events-none absolute top-1/2 -translate-y-1/2 z-0 select-none",
          "font-heading text-[180px] lg:text-[240px] font-extrabold leading-none text-white/[0.035] tracking-tighter",
          flipped
            ? "right-0 lg:right-6 -mr-6"
            : "left-0 lg:left-6 -ml-6"
        )}
      >
        {service.num}
      </span>

      {/* Image */}
      <div
        className={cn(
          "relative md:col-span-7 z-10",
          flipped ? "md:order-2" : "md:order-1"
        )}
      >
        <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-[24px] md:rounded-[36px] border border-border bg-dark shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Overlapping icon badge */}
          <div
            className={cn(
              "absolute bottom-6 hidden lg:flex items-center gap-3 rounded-full bg-black/50 backdrop-blur-md border border-white/15 px-4 py-2.5",
              flipped ? "left-6" : "right-6"
            )}
          >
            <span className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <service.icon size={16} className="text-primary" />
            </span>
            <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
              Case {service.num}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative md:col-span-5 z-10",
          flipped ? "md:order-1 md:pr-2 lg:pr-8" : "md:order-2 md:pl-2 lg:pl-8"
        )}
      >
        <div
          className={cn(
            "mb-5 hidden lg:block h-px w-16 bg-gradient-to-r from-primary to-transparent",
            flipped ? "" : "ml-auto"
          )}
        />
        <p
          className={cn(
            "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3",
            flipped ? "" : "lg:justify-end"
          )}
        >
          <span className="w-6 h-px bg-primary/60" />
          {service.num} — Capability
        </p>

        {/* Mobile icon badge */}
        <div className="flex lg:hidden items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <service.icon size={18} className="text-primary" />
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white/50">
            Case {service.num}
          </span>
        </div>

        <div className={cn(flipped ? "" : "lg:text-right")}>
          <h3 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] text-white leading-[1.05]">
            {service.title}
          </h3>
        </div>

        <p
          className={cn(
            "mt-5 text-foreground/70 text-[15px] md:text-base leading-[1.75] max-w-xl",
            flipped ? "" : "lg:ml-auto"
          )}
        >
          {service.description}
        </p>

        <div
          className={cn(
            "mt-8 grid grid-cols-2 gap-x-3 gap-y-2.5 sm:gap-x-4 sm:gap-y-3",
            flipped ? "" : "lg:justify-items-end"
          )}
        >
          {service.features.map((feature) => (
            <div
              key={feature}
              className={cn(
                "flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 md:px-4 py-2",
                flipped ? "" : "lg:text-right"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 shrink-0 rounded-full bg-primary",
                  flipped ? "" : "lg:order-2"
                )}
              />
              <span className="text-[12px] md:text-[13px] font-medium text-muted">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  return (
    <section id="beyond-editing" className="section-spacing bg-[#171717] overflow-hidden">
      <div className="container-site">
        <SectionHeader
          eyebrow="Capabilities"
          title="Beyond The Edit"
          subtitle="A holistic approach to content creation—from capturing the raw vision to scaling it across platforms."
        />

        <div className="flex flex-col gap-16 md:gap-28 lg:gap-36">
          {services.map((service, index) => (
            <CaseRow key={service.num} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}