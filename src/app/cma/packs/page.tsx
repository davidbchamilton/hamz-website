import { PageIntro } from "@/components/sections/page-intro";

export default function CmaPacksPage() {
  return (
    <PageIntro eyebrow="Private packs" title="Beat Pack Access">
      <p>Private beat pack access will be implemented in a later development phase.</p>
      <p className="mt-4">
        TODO: Protect this route with authenticated server-side authorization
        before displaying real packs or download links.
      </p>
    </PageIntro>
  );
}
