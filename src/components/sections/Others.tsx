"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShortsGrid } from "@/components/ui/ShortsGrid";
import { VideoEmbed } from "@/components/ui/VideoEmbed";

export default function Others() {
  return (
    <section className="section-spacing bg-background min-h-screen">
      <div className="container-site">
        <SectionHeader
          eyebrow="Custom"
          title="Others"
          subtitle="Unique project scopes. Experimental edits. Custom workflows for specific brand needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start max-w-5xl">
          <div className="group w-full">
            <VideoEmbed videoId="rmhNOayYEao" />
          </div>
        </div>

        <ShortsGrid
          videoIds={["5okcneQOBDc", "dCfTNDM_i0A", "O7nKSSV3A7s"]}
          className="mt-10 md:mt-12 lg:grid-cols-3 xl:grid-cols-3"
        />
      </div>
    </section>
  );
}