"use client";

import { motion } from "framer-motion";
import { Camera, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Direction & Shoot",
    icon: Camera,
    description: "Bringing concepts to life behind the lens. From conceptualization to final execution, I direct talent, configure lighting, and capture high-fidelity cinematic footage that aligns perfectly with your brand's creative vision.",
    features: ["Cinematography", "On-Set Direction", "Lighting & Rigging", "Pre-production Planning"],
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fe2b67?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "Social Media Management",
    icon: TrendingUp,
    description: "Turning great content into measurable growth. I develop data-driven content strategies, manage posting schedules, and optimize distribution across platforms to maximize organic reach and audience engagement.",
    features: ["Content Strategy", "Audience Growth", "Analytics & Reporting", "Trend Analysis"],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function CaseStudies() {
  return (
    <section id="beyond-editing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Beyond The Edit
          </h2>
          <p className="text-muted text-lg max-w-xl">
            A holistic approach to content creation—from capturing the raw vision to scaling it across platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-[32px] overflow-hidden bg-[#FAFAFA] border border-border flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
                <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
