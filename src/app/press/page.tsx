import { PageIntro } from "@/components/sections/page-intro";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function PressPage() {
  return (
    <>
      <PageIntro eyebrow="Press" title="Press and Media">
        <p>
          TODO: Add approved press photos, logos, EPK material, and legitimate
          media coverage when supplied.
        </p>
      </PageIntro>
      <PlaceholderPanel title="Press Kit Placeholder">
        <p>No press coverage, quotes, or downloadable assets have been added yet.</p>
      </PlaceholderPanel>
    </>
  );
}
