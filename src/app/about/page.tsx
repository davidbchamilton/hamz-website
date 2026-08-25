import type { Metadata } from "next";
import { ArrowDown, ArrowRight, BadgeCheck, Mail } from "lucide-react";
import Link from "next/link";
import { MediaPlaceholder } from "@/components/media/media-placeholder";
import { proofPoints } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the Caribbean music producer, with approved biography and career details pending.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About | Caribbean Music Producer",
    description:
      "A producer profile prepared for verified biography, credits, collaborations, recognition, and studio photography."
  }
};

const pendingDossier = [
  ["Origin", "Pending approved location"],
  ["Biography", "Pending approved profile"],
  ["Credits", "Pending verified placements"]
];

const contentSlots = [
  {
    label: "Artists / Collaborators",
    detail:
      "Approved collaborator names have not been supplied, so no artist relationships are published here."
  },
  {
    label: "Awards / Nominations",
    detail:
      "Recognition records are reserved until award names, categories, dates, and nomination status are verified."
  },
  {
    label: "Studio / Tools",
    detail:
      "Studio setup and equipment details will be added only after approved technical information is available."
  }
];

function SectionMarker({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-8 inline-flex items-center gap-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted-studio">
      <span className="text-tertiary-gold">{index}</span>
      <span className="h-px w-12 bg-studio-outline" />
      <span>{label}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="relative mx-auto min-h-[calc(100svh-85px)] max-w-[1440px] overflow-hidden px-6 py-20 md:px-16 md:py-28">
        <div className="absolute inset-x-6 top-10 h-[58%] opacity-60 md:inset-x-16 md:top-16 md:h-[72%]">
          <MediaPlaceholder
            className="h-full aspect-auto grayscale"
            label="Approved producer portrait or studio photography pending."
            hideLabel
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/55 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-[700px] flex-col justify-end">
          <SectionMarker index="01" label="Producer profile" />
          <h1 className="max-w-6xl font-display text-[clamp(4rem,15vw,9rem)] uppercase leading-[0.9] tracking-[0.02em] text-ivory">
            The
            <br />
            Architect
            <br />
            <span className="text-tertiary-gold">Of Sound.</span>
          </h1>
          <div className="mt-8 grid gap-4 border-t border-studio-outline/55 pt-5 md:grid-cols-3">
            {pendingDossier.map(([label, value]) => (
              <div key={label} className="font-mono text-xs font-bold uppercase tracking-[0.14em]">
                <p className="text-muted-studio/70">{label}</p>
                <p className="mt-2 text-muted-studio">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <ArrowDown
          className="absolute bottom-10 left-6 hidden size-4 text-muted-studio md:left-16 md:block"
          aria-hidden={true}
        />
      </section>

      <section className="px-6 py-24 md:px-16 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-3 border border-studio-outline bg-surface-high px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-studio">
              <span className="size-2 bg-tertiary-gold" />
              Profile pending
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] uppercase leading-[0.95] tracking-[0.02em] text-ivory">
              Built For
              <br />
              Caribbean
              <br />
              <span className="text-studio-outline">Records.</span>
            </h2>
            <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-muted-studio">
              <p>
                The site is structured for a concise biography, a deeper
                professional profile, selected collaborators, and verified
                career milestones once approved content is supplied.
              </p>
              <p>
                Until then, this page keeps the editorial profile intact
                without publishing unverified origin details, quotes, artist
                relationships, awards, or studio claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-studio-outline/60 bg-surface-lowest px-6 py-24 md:px-16 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12 md:items-center md:gap-8">
          <div className="md:order-2 md:col-span-6">
            <MediaPlaceholder
              className="aspect-square grayscale"
              label="Approved studio or equipment photography pending."
              hideLabel
            />
          </div>
          <div className="md:order-1 md:col-span-6 md:pr-12">
            <SectionMarker index="02" label="Methodology" />
            <h2 className="font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-none text-ivory">
              Analog
              <br />
              Soul.
              <br />
              Digital
              <br />
              Precision.
            </h2>
            <div className="mt-10 space-y-8">
              {proofPoints.slice(0, 2).map((point) => {
                const Icon = point.icon;

                return (
                  <article key={point.label} className="border-l-2 border-studio-outline pl-6">
                    <Icon className="mb-4 size-5 text-tertiary-gold" aria-hidden={true} />
                    <h3 className="font-mono text-sm font-bold uppercase tracking-[0.14em] text-ivory">
                      {point.label}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-studio">
                      {point.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 md:py-40">
        <div className="mx-auto max-w-[1440px]">
          <SectionMarker index="03" label="Verified dossier" />
          <div className="border-t border-studio-outline">
            {contentSlots.map((slot, index) => (
              <article
                key={slot.label}
                className="group grid gap-5 border-b border-studio-outline py-7 transition-colors hover:bg-surface-container md:grid-cols-12 md:items-center md:px-4"
              >
                <span className="font-mono text-sm font-bold text-muted-studio/70 group-hover:text-tertiary-gold md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-5">
                  <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-none text-ivory">
                    {slot.label}
                  </h2>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-muted-studio md:col-span-6">
                  {slot.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-studio-outline/60 px-6 py-24 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-7">
            <SectionMarker index="04" label="Content integrity" />
            <h2 className="font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-none text-ivory">
              Verified
              <br />
              Only.
            </h2>
          </div>
          <div className="md:col-span-5">
            <BadgeCheck className="mb-5 size-6 text-tertiary-gold" aria-hidden={true} />
            <p className="text-lg leading-8 text-muted-studio">
              Credits, awards, press, collaborations, and career history will
              appear only after they are approved. The visual system is ready;
              the factual record stays protected.
            </p>
            <Link
              href="/placements"
              className="mt-8 inline-flex min-h-12 items-center gap-3 border border-studio-outline px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-tertiary-gold hover:text-tertiary-gold"
            >
              View placements
              <ArrowRight className="size-4" aria-hidden={true} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 text-center text-ink md:px-16 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[clamp(4rem,12vw,8rem)] uppercase leading-none tracking-[0.02em]">
            Let&apos;s
            <br />
            Create.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center gap-3 border border-ink bg-ink px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-tertiary-gold hover:bg-tertiary-gold hover:text-ink"
          >
            Start a project
            <Mail className="size-4" aria-hidden={true} />
          </Link>
        </div>
      </section>
    </>
  );
}
