import Link from "next/link";
import { PageIntro } from "@/components/sections/page-intro";
import { services } from "@/data/placeholders";

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Production Services">
        <p>
          TODO: Replace placeholder descriptions with approved service copy and
          pricing/booking guidance.
        </p>
      </PageIntro>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-16 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="border border-ink/12 bg-white/45 p-5">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="mt-3 text-ink/72">{service.description}</p>
            <Link
              className="mt-5 inline-flex rounded bg-ink px-4 py-2 text-sm font-semibold text-ivory"
              href={`/contact?service=${service.slug}`}
            >
              Request Quote
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
