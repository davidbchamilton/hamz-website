import type { Metadata } from "next";
import { Camera, FileDown, Newspaper } from "lucide-react";
import { MediaPlaceholder } from "@/components/media/media-placeholder";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press photos, logos, media materials, and approved biography for the producer, pending assets."
};

const pressNeeds = [
  {
    label: "Press Photos",
    description: "Approved portraits, studio images, event photos, and image credits.",
    icon: Camera
  },
  {
    label: "Electronic Press Kit",
    description: "Approved bio, logo files, contact details, and downloadable material.",
    icon: FileDown
  },
  {
    label: "Media Coverage",
    description: "Only legitimate published coverage, interviews, and press links.",
    icon: Newspaper
  }
];

export default function PressPage() {
  return (
    <>
      <PageIntro eyebrow="Press" title="Press and media materials">
        <p>
          This page is ready for approved press photos, logos, biography, and
          published coverage. No coverage or quotes are fabricated.
        </p>
      </PageIntro>
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <MediaPlaceholder label="Approved press photography pending." />
          <div className="grid gap-4">
            {pressNeeds.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.label} className="rounded-md border border-ivory/10 bg-ivory/[0.04] p-5">
                  <Icon className="size-5 text-brass" aria-hidden={true} />
                  <h2 className="mt-4 text-lg font-semibold text-ivory">{item.label}</h2>
                  <p className="mt-2 text-sm leading-6 text-ivory/58">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
