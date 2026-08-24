import { PageIntro } from "@/components/sections/page-intro";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function PlacementsPage() {
  return (
    <>
      <PageIntro eyebrow="Placements" title="Released Records">
        <p>
          TODO: Add approved placements only after factual song, artist, year,
          role, artwork, and media links are provided.
        </p>
      </PageIntro>
      <PlaceholderPanel title="No Verified Placements Added">
        <p>Placeholder state only. Codex must not fabricate credits or collaborations.</p>
      </PlaceholderPanel>
    </>
  );
}
