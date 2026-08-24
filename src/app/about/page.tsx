import { MediaPlaceholder } from "@/components/media/media-placeholder";
import { PageIntro } from "@/components/sections/page-intro";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="About [PRODUCER NAME]">
        <p>
          TODO: Add approved short biography, long biography, location, genres,
          artists worked with, awards/nominations, and studio details.
        </p>
      </PageIntro>
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <MediaPlaceholder label="TODO: Replace with authentic producer photography." />
      </section>
      <PlaceholderPanel title="Content Integrity">
        <p>Do not invent artist collaborations, placements, awards, nominations, or quotes.</p>
      </PlaceholderPanel>
    </>
  );
}
