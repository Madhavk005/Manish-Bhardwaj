"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShortsGrid } from "@/components/ui/ShortsGrid";

export default function LogoAnimations() {
  return (
    <section className="section-spacing bg-background min-h-screen">
      <div className="container-site">
        <SectionHeader
          eyebrow="Branding"
          title="Logos & Brand Animations"
          subtitle="Custom motion graphics. Fluid transitions. Breathing life into static brand assets."
        />

        <ShortsGrid titlePrefix="Logo animation" videoIds={["dXRiv7I1-fw", "FHx9xjaTFr8", "3i0uEt5RMB4", "-irL28vmWuQ"]} />
      </div>
    </section>
  );
}