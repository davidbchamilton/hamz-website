import { PageIntro } from "@/components/sections/page-intro";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function BeatsPage() {
  return (
    <>
      <PageIntro eyebrow="Beats" title="Browse Beats">
        <p>
          TODO: Add approved BeatStars embeds, featured beat selections, and
          outbound purchase links. BeatStars remains the source of truth.
        </p>
      </PageIntro>
      <PlaceholderPanel title="BeatStars Integration Placeholder">
        {/* TODO: Add BeatStars embed and discovery/filter interface where technically practical. */}
        <p>No local beat-commerce or duplicate inventory has been implemented.</p>
      </PlaceholderPanel>
    </>
  );
}
