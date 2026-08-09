"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShortsGrid } from "@/components/ui/ShortsGrid";

export default function FBVideos() {
  return (
    <section className="section-spacing bg-background min-h-screen">
      <div className="container-site">
        <SectionHeader
          eyebrow="F&B"
          title="Food & Beverages"
          subtitle="Cinematic lighting. Crave-inducing edits. Visually delicious content."
        />

        <ShortsGrid
          titlePrefix="Food & Beverage"
          videoIds={[
            "cpnYXpi-gOc",
            "B0F5bsensHk",
            "C6AYmIeINvw",
            "AOUNS1YmenA",
            "wzHtPSwiPIs",
            "p2cTj3JwPz0",
            "UiBygTIdubQ",
          ]}
        />
      </div>
    </section>
  );
}