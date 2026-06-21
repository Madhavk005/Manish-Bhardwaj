"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SOFTWARE_SKILLS = [
  { name: "Premiere Pro", percentage: 90, icon: "/softwares/Adobe%20Premiere%20Pro.png" },
  { name: "After Effects", percentage: 70, icon: "/softwares/Adobe%20After%20Effects.png" },
  { name: "Photoshop", percentage: 80, icon: "/softwares/Adobe%20Photoshop.png" },
  { name: "Illustrator", percentage: 50, icon: "/softwares/Adobe%20Illustrator.png" },
  { name: "Notion", percentage: 75, icon: "/softwares/Notion.png" },
];

export default function SoftwareProficiency() {
  return (
    <section className="relative py-16 md:py-32 bg-[#050505] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px]">
        
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-0.02em] leading-tight mb-4">
            Software Proficiency
          </h2>
          <p className="text-[#A1A1AA] text-lg md:text-xl max-w-2xl">
            The technical foundation behind the storytelling.
          </p>
        </motion.div>

        <div className="flex flex-col space-y-8 md:space-y-12">
          {SOFTWARE_SKILLS.map((skill, index) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-end mb-4">
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
                  {skill.percentage}%
                </span>
              </div>
              
              {/* Progress Bar Track */}
              <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                {/* Progress Bar Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.16, 1, 0.3, 1], // Custom cinematic circOut/power3 equivalent
                    delay: index * 0.1 
                  }}
                  className="absolute top-0 left-0 h-full bg-white"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
