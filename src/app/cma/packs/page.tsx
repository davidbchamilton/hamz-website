import { PageIntro } from "@/components/sections/page-intro";

export default function CmaPacksPage() {
  return (
    <PageIntro eyebrow="Private packs" title="Beat pack access is not active yet">
      <p>
        This route must be protected with authenticated server-side
        authorization before real packs, previews, or download links are
        displayed.
      </p>
      <p className="mt-4">
        The next phase will connect invite validation, Supabase private storage,
        short-lived signed URLs, and download logging.
      </p>
    </PageIntro>
  );
}
