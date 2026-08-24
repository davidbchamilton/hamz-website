import type { Metadata } from "next";
import { MediaPlaceholder } from "@/components/media/media-placeholder";
import { PageIntro } from "@/components/sections/page-intro";
import { SiteSection } from "@/components/sections/site-section";
import { proofPoints } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the Caribbean music producer, with approved biography and career details pending."
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="A producer profile ready for approved story and credits">
        <p>
          The approved biography, location, artist relationships, awards,
          nominations, studio details, and career highlights have not been
          supplied yet.
        </p>
      </PageIntro>
      <SiteSection>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <MediaPlaceholder label="Approved producer portrait pending." />
          <div>
            <h2 className="text-3xl font-semibold text-ivory">Biography pending approval</h2>
            <p className="mt-5 text-lg leading-8 text-ivory/70">
              This page is intentionally restrained until verified biographical
              material is available. It is prepared to support a concise short
              bio, a deeper professional profile, selected collaborators, and
              factual career milestones.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {proofPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <article key={point.label} className="border-t border-ivory/12 pt-5">
                    <Icon className="size-5 text-brass" aria-hidden={true} />
                    <h3 className="mt-3 font-semibold text-ivory">{point.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-ivory/58">{point.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </SiteSection>
    </>
  );
}
