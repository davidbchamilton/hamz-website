import { PageIntro } from "@/components/sections/page-intro";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Contact [PRODUCER NAME]">
        <p>
          TODO: Add a production inquiry form, approved direct contact channels,
          and anti-spam controls in a later phase.
        </p>
      </PageIntro>
      <PlaceholderPanel title="Contact Form Placeholder">
        {/* TODO: Add name, artist name, email, service selection, and message fields. */}
        <p>
          The contact endpoint exists as a safe placeholder and does not accept
          or store real user data yet.
        </p>
      </PlaceholderPanel>
    </>
  );
}
