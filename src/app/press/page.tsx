import type { Metadata } from "next";
import Image from "next/image";
import { Camera, FileDown, Newspaper } from "lucide-react";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press photos, logo materials, biography, and verified media information for HAMZXL."
};

const pressNeeds = [
  {
    label: "Press Photos",
    description: "Approved portraits, studio images, event photos, and image credits.",
    icon: Camera
  },
  {
    label: "Electronic Press Kit",
    description: "Biography, logo files, contact details, and downloadable material.",
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
          Approved photography, biography, logo assets, and contact details for
          media use. Published coverage and quotes will only appear after they
          are verified.
        </p>
      </PageIntro>
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Image
            src="/images/about-main.webp"
            alt="HAMZXL pointing to his Crapaud Smoke Dey Pipe shirt by a chain-link fence."
            width={1400}
            height={2100}
            unoptimized
            sizes="(min-width: 1024px) 48vw, calc(100vw - 40px)"
            className="aspect-[4/5] w-full rounded-md border border-ivory/10 object-cover object-[50%_34%] grayscale"
          />
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
