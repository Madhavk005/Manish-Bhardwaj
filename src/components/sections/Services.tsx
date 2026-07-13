"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "F&B Videos",
    tag: "Sensory",
    description: "Food & Beverages. Cinematic lighting. Crave-inducing edits.",
    href: "/fb-videos",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Documentary & Testimonials",
    tag: "Storytelling",
    description: "Real people. Real stories. Pacing that builds trust and authentic emotional connection.",
    href: "/documentary-testimonials",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Generic Style",
    tag: "Adaptable",
    description: "Versatile edits. Clean cuts. Perfect for corporate communication and standard brand messaging.",
    href: "/generic-style",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Logos & Brand Animations",
    tag: "Identity",
    description: "Custom motion graphics. Fluid transitions. Breathing life into static brand assets.",
    href: "/logo-animations",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Motion UI",
    tag: "Experience",
    description: "UI/UX animation. Product walkthroughs. Screen replacements and digital interaction design.",
    href: "/motion-ui",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },

  {
    title: "Others",
    tag: "Custom",
    description: "Unique project scopes. Experimental edits. Custom workflows for specific brand needs.",
    href: "/others",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-[120px] bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4 text-foreground">
              What I Do Best
            </h2>
            <p className="text-muted text-[18px] max-w-md">
              I craft scroll-stopping edits that keep your audience hooked and your content looking top-tier.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white border border-border rounded-[28px] p-6 md:p-8 transition-all duration-400 overflow-hidden flex flex-col h-full min-h-[420px] shadow-[0_10px_40px_rgba(0,0,0,.04)] hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] hover:-translate-y-2 cursor-pointer"
              >
                {/* Subtle hover glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span className="px-4 py-1.5 rounded-full border border-border text-xs font-medium uppercase tracking-wider text-muted bg-[#FAFAFA]">
                    {service.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                    <ArrowUpRight className="text-muted group-hover:text-primary transition-colors" size={20} />
                  </div>
                </div>

                <div className="w-full h-48 rounded-[16px] overflow-hidden relative z-10 mb-8 border border-border/50">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index <= 1}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="mt-auto relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted text-[15px] max-w-sm leading-[1.6]">
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
