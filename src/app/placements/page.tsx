import type { Metadata } from "next";
import { Disc3 } from "lucide-react";
import { PageIntro } from "@/components/sections/page-intro";
import { emptyPlacements } from "@/data/site";

export const metadata: Metadata = {
  title: "Placements",
  description:
    "Verified released records and production credits, pending approved placement content."
};

export default function PlacementsPage() {
  return (
    <>
      <PageIntro eyebrow="Placements" title="Released records and verified credits">
        <p>
          Credits will be displayed only after approved song, artist, year,
          production role, artwork, and media links are provided.
        </p>
      </PageIntro>
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          {emptyPlacements.length === 0 ? (
            <div className="rounded-md border border-ivory/12 bg-ivory/[0.04] p-8">
              <Disc3 className="size-7 text-brass" aria-hidden={true} />
              <h2 className="mt-5 text-2xl font-semibold text-ivory">
                No verified placements are published yet
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/64">
                This keeps the public site clean until the approved placement
                list is supplied. No artificial artists, songs, streaming
                figures, chart claims, or credits have been added.
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
