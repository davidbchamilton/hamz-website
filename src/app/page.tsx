import Link from "next/link";
import { PageIntro } from "@/components/sections/page-intro";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function HomePage() {
  return (
    <>
      <PageIntro
        eyebrow="Official website"
        title="[PRODUCER NAME]"
      >
        <p>
          TODO placeholder: Caribbean Producer | Dancehall - Soca - Afrobeats.
          Approved biography, photography, music links, and campaign copy will be
          added in a later phase.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded bg-ink px-5 py-3 text-sm font-semibold text-ivory" href="/beats">
            Browse Beats
          </Link>
          <Link className="rounded border border-ink/30 px-5 py-3 text-sm font-semibold" href="/contact">
            Contact
          </Link>
        </div>
      </PageIntro>
      <PlaceholderPanel title="Future Home Sections">
        {/* TODO: Add hero media, featured beat/player, placements, services preview, about summary, CMA promotion, and social footer. */}
        <p>
          This page is a launch skeleton only. Final visuals, factual credits,
          BeatStars playback, and CMA promotion will be implemented later.
        </p>
      </PlaceholderPanel>
    </>
  );
}
