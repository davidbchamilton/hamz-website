import { ArrowRight, CalendarDays, Mail, Music2 } from "lucide-react";
import Link from "next/link";
import { BeatStarsPanel } from "@/components/media/beatstars-panel";
import { MediaPlaceholder } from "@/components/media/media-placeholder";
import { SiteSection } from "@/components/sections/site-section";
import { ButtonLink } from "@/components/ui/button-link";
import { emptyPlacements, proofPoints, services, siteIdentity } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="ambient-stage texture-line px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass">
              Official producer website
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
              {siteIdentity.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/72 sm:text-xl">
              {siteIdentity.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-ivory/55">
              Final producer name, biography, photography, credits, and public
              links are pending approval. The site is built to receive those
              assets without changing the architecture.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/beats" icon={Music2}>
                Browse Beats
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" icon={Mail}>
                Work With Me
              </ButtonLink>
              <ButtonLink href="/cma" variant="ghost" icon={CalendarDays}>
                CMA Access
              </ButtonLink>
            </div>
          </div>
          <MediaPlaceholder
            className="h-[24rem] aspect-auto lg:h-[34rem]"
            label="Approved hero photography or video pending."
          />
        </div>
      </section>

      <SiteSection
        eyebrow="Listen"
        title="Beat discovery led by BeatStars"
        intro="The public catalogue and purchases stay on BeatStars, keeping licensing and inventory in the right source of truth."
      >
        <BeatStarsPanel />
      </SiteSection>

      <SiteSection
        className="bg-ivory/[0.03]"
        eyebrow="Credits"
        title="Selected placements"
        intro="Verified releases will appear here once approved song, artist, role, artwork, and streaming links are supplied."
      >
        {emptyPlacements.length === 0 ? (
          <div className="border-l border-brass/60 py-2 pl-6">
            <p className="max-w-2xl text-base leading-7 text-ivory/68">
              No public placements are displayed yet because no verified
              placement records were present in the approved content.
            </p>
            <Link
              href="/placements"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brass transition hover:text-ivory"
            >
              View placements
              <ArrowRight className="size-4" aria-hidden={true} />
            </Link>
          </div>
        ) : null}
      </SiteSection>

      <SiteSection
        eyebrow="Services"
        title="Production services for professional records"
        intro="A concise service path for artists, teams, and licensing contacts."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.slug}
                className="rounded-md border border-ivory/10 bg-ivory/[0.04] p-5"
              >
                {Icon ? <Icon className="mb-5 size-6 text-brass" aria-hidden={true} /> : null}
                <h3 className="text-base font-semibold text-ivory">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/62">{service.description}</p>
              </article>
            );
          })}
        </div>
        <ButtonLink href="/services" className="mt-8" variant="secondary">
          Explore Services
        </ButtonLink>
      </SiteSection>

      <SiteSection className="bg-ivory/[0.03]" eyebrow="About" title="Built for Caribbean-rooted records">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MediaPlaceholder label="Approved studio or portrait photography pending." />
          <div>
            <p className="text-lg leading-8 text-ivory/72">
              The approved biography is pending. This page is structured to
              present the producer&apos;s story, creative approach, collaborators,
              and career highlights once verified content is supplied.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {proofPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div key={point.label} className="border-t border-ivory/12 pt-4">
                    <Icon className="size-5 text-brass" aria-hidden={true} />
                    <h3 className="mt-3 text-sm font-semibold text-ivory">{point.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-ivory/58">{point.description}</p>
                  </div>
                );
              })}
            </div>
            <ButtonLink href="/about" className="mt-8" variant="secondary">
              Read About
            </ButtonLink>
          </div>
        </div>
      </SiteSection>

      <SiteSection
        eyebrow="Caribbean Music Awards"
        title="Exclusive beat-pack access prepared for invited artists"
        intro="The CMA entry page is visually ready for QR and invite traffic. Real invite verification, secure sessions, private storage, and signed downloads are intentionally reserved for the next phase."
      >
        <div className="rounded-md border border-brass/30 bg-brass/[0.08] p-6 sm:p-8">
          <p className="max-w-3xl text-lg leading-8 text-ivory/76">
            Exclusive Beat Packs are available to invited artists. Access will
            require secure server-side validation before any real packs or
            downloads are exposed.
          </p>
          <ButtonLink href="/cma" className="mt-6" icon={CalendarDays}>
            View CMA Access
          </ButtonLink>
        </div>
      </SiteSection>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl border-t border-ivory/12 pt-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                Work inquiries
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ivory sm:text-4xl">
                Ready to shape the next record?
              </h2>
            </div>
            <ButtonLink href="/contact" icon={Mail}>
              Request Quote
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
