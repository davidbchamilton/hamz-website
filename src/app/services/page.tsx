import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/sections/page-intro";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Production services including custom beats, exclusive production, mixing and mastering, vocal production, and sync licensing."
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Production services built around the record">
        <p>
          Choose the service lane that fits the session, release, or licensing
          brief. Pricing and booking details should be confirmed directly.
        </p>
      </PageIntro>
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.slug}
                className="grid gap-6 border-t border-ivory/12 py-8 md:grid-cols-[6rem_1fr_auto] md:items-center"
              >
                <div className="text-sm font-semibold text-brass">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    {Icon ? <Icon className="size-5 text-brass" aria-hidden={true} /> : null}
                    <h2 className="text-2xl font-semibold text-ivory">{service.name}</h2>
                  </div>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-ivory/64">
                    {service.description}
                  </p>
                </div>
                <Link
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-ivory/15 px-5 py-3 text-sm font-semibold text-ivory transition hover:border-brass hover:text-brass"
                  href={`/contact?service=${service.slug}`}
                >
                  Request Quote
                  <ArrowRight className="size-4" aria-hidden={true} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
