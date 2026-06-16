"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

const services = [
  {
    title: "F&B Videos",
    tag: "Sensory",
    description: "Food & Beverages. Cinematic lighting. Crave-inducing edits.",
    href: "/fb-videos"
  },
  {
    title: "Documentary & Testimonials",
    tag: "Storytelling",
    description: "Real people. Real stories. Pacing that builds trust and authentic emotional connection.",
    href: "/documentary-testimonials"
  },
  {
    title: "Generic Style",
    tag: "Adaptable",
    description: "Versatile edits. Clean cuts. Perfect for corporate communication and standard brand messaging.",
  },
  {
    title: "Logos & Brand Animations",
    tag: "Identity",
    description: "Custom motion graphics. Fluid transitions. Breathing life into static brand assets.",
    href: "/logo-animations"
  },
  {
    title: "Motion UI",
    tag: "Experience",
    description: "UI/UX animation. Product walkthroughs. Screen replacements and digital interaction design.",
  },
  {
    title: "Others",
    tag: "Custom",
    description: "Unique project scopes. Experimental edits. Custom workflows for specific brand needs.",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-[80px] md:py-[120px] bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-foreground">
              The Arsenal.
            </h2>
            <p className="text-muted text-[18px] max-w-md">
              Specialized editing workflows designed to solve specific problems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white border border-border rounded-[28px] p-8 transition-all duration-400 overflow-hidden flex flex-col h-full min-h-[300px] shadow-[0_10px_40px_rgba(0,0,0,.04)] hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] hover:-translate-y-2 cursor-pointer"
              >
                {/* Subtle hover glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <span className="px-4 py-1.5 rounded-full border border-border text-xs font-medium uppercase tracking-wider text-muted bg-[#FAFAFA]">
                    {service.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                    <ArrowUpRight className="text-muted group-hover:text-primary transition-colors" size={20} />
                  </div>
                </div>

                <div className="mt-auto relative z-10">
                  <h3 className="text-[28px] font-bold mb-3 text-foreground tracking-tight">{service.title}</h3>
                  <p className="text-muted text-[16px] max-w-sm leading-[1.7]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );

            return service.href ? (
              <Link href={service.href} key={index} className="block">
                {CardContent}
              </Link>
            ) : (
              <div key={index} className="block">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
