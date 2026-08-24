import { PageIntro } from "@/components/sections/page-intro";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function CmaPage() {
  return (
    <>
      <PageIntro eyebrow="Private CMA portal" title="Caribbean Music Awards Beat Packs">
        <p>
          Exclusive Beat Packs are available to invited artists. Invite-code
          validation and secure access will be implemented in a later development
          phase.
        </p>
      </PageIntro>
      <PlaceholderPanel title="Access Placeholder">
        {/* TODO: Add email, invite-code handling, optional marketing consent, server validation, and abuse protection. */}
        <p>
          This page does not authenticate users yet and should not be treated as
          secure.
        </p>
      </PlaceholderPanel>
    </>
  );
}
