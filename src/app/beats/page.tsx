import type { Metadata } from "next";
import { BeatStarsPanel } from "@/components/media/beatstars-panel";
import { PageIntro } from "@/components/sections/page-intro";
import { SiteSection } from "@/components/sections/site-section";

export const metadata: Metadata = {
  title: "Beats",
  description:
    "Browse Caribbean production and connect to BeatStars for listening, licensing, and purchases."
};

const genres = ["Soca", "Dancehall", "Afrobeats"];

export default function BeatsPage() {
  return (
    <>
      <PageIntro eyebrow="Beats" title="Browse beats through the official catalogue">
        <p>
          BeatStars remains the source of truth for listening, licensing, and
          purchase activity. The approved embed/profile URL is still pending.
        </p>
      </PageIntro>
      <SiteSection
        eyebrow="Catalogue"
        title="BeatStars player"
        intro="Once configured, the embedded player will load here without creating a duplicate local store."
      >
        <BeatStarsPanel />
      </SiteSection>
      <SiteSection
        className="bg-ivory/[0.03]"
        eyebrow="Direction"
        title="Production lanes"
        intro="These genres come from the approved project scope. Additional genres should be added only when approved."
      >
        <div className="flex flex-wrap gap-3">
          {genres.map((genre) => (
            <span
              key={genre}
              className="rounded-md border border-ivory/12 bg-ivory/[0.04] px-4 py-3 text-sm font-semibold text-ivory/78"
            >
              {genre}
            </span>
          ))}
        </div>
      </SiteSection>
    </>
  );
}
