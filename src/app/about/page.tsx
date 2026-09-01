import type { Metadata } from "next";
import { ArrowDown, ArrowRight, BadgeCheck, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  approvedCollaborators,
  placements,
  proofPoints,
  selectedPlacement,
  studioTools
} from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Hamz XL, a Caribbean music producer creating emotional, distinctive Soca, Bouyon, Dancehall, and Afrobeats production.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About | Caribbean Music Producer",
    description:
      "A producer profile with verified biography, credits, collaborators, and studio details."
  }
};

const profileFacts = [
  ["Origin", "Caribbean"],
  ["Biography", "Approved"],
  ["Credits", `${placements.length} verified placements`]
];

const bioParagraphs = [
  "Hamz XL is a Caribbean music producer driven by one thing above all: creating music that makes people feel something.",
  "Drawn naturally to dark, emotional and nostalgic melodies, Hamz XL brings that atmosphere into the high-energy worlds of Soca and Bouyon, exploring how unexpected moods, textures and ideas can push Caribbean music in new directions.",
  "His approach to production is rooted in creative freedom. He believes artists should have the space to experiment, take risks and create without being boxed in by conventional ideas of what music is supposed to sound like. To him, music is subjective - if it moves you, it works.",
  "That same philosophy shapes his own development as a producer. Hamz XL is constantly refining his craft, experimenting with new sounds and looking for ways to make each production stronger than the last.",
  "Whether he is creating a beat, collaborating with an artist or developing a new sound, the goal remains the same: make something distinctive, memorable and inspiring."
];

const collaborators = Array.from(
  new Set(
    placements
      .flatMap((placement) =>
        placement.artist.split(",").map((artist) => artist.trim())
      )
      .concat(approvedCollaborators)
  )
);

function SectionMarker({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-8 inline-flex items-center gap-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted-studio">
      <span className="text-accent-violet-text">{index}</span>
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
          <Image
            src="/images/about-main.webp"
            alt="HAMZXL pointing to his Crapaud Smoke Dey Pipe shirt by a chain-link fence."
            width={1400}
            height={2100}
            priority
            unoptimized
            sizes="(min-width: 768px) calc(100vw - 128px), calc(100vw - 48px)"
            className="h-full w-full border border-studio-outline/50 object-cover object-[50%_36%] grayscale"
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
            <span className="text-accent-violet">Of Sound.</span>
          </h1>
          <div className="mt-8 grid gap-4 border-t border-studio-outline/55 pt-5 md:grid-cols-3">
            {profileFacts.map(([label, value]) => (
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
              <span className="size-2 bg-accent-violet" />
              Producer profile
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] uppercase leading-[0.95] tracking-[0.02em] text-ivory">
              Music That
              <br />
              Moves
              <br />
              <span className="text-studio-outline">People.</span>
            </h2>
            <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-muted-studio">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-ivory bg-ivory px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent-violet hover:bg-accent-violet hover:text-white"
              >
                Get in touch
              </Link>
              <Link
                href="/beats"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-studio-outline px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-accent-violet hover:text-accent-violet-text"
              >
                Explore beats
                <ArrowRight className="size-4" aria-hidden={true} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-studio-outline/60 bg-surface-lowest px-6 py-24 md:px-16 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12 md:items-center md:gap-8">
          <div className="md:order-2 md:col-span-6">
            <Image
              src="/images/analog-digital-studio.webp"
              alt="Analog studio hardware, guitar, MIDI keys, and digital waveform light in a Caribbean studio setting."
              width={1200}
              height={1200}
              unoptimized
              sizes="(min-width: 768px) 42vw, calc(100vw - 48px)"
              className="aspect-square w-full border border-studio-outline/50 object-cover grayscale"
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
                    <Icon className="mb-4 size-5 text-accent-violet-text" aria-hidden={true} />
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
            {selectedPlacement ? (
              <Link
                href="/placements"
                className="group grid gap-5 border-b border-studio-outline py-7 transition-colors hover:bg-surface-container md:grid-cols-12 md:items-center md:px-4"
              >
                <span className="font-mono text-sm font-bold text-muted-studio/70 group-hover:text-accent-violet-text md:col-span-1">
                  01
                </span>
                <div className="md:col-span-5">
                  <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-none text-ivory">
                    Selected Placement
                  </h2>
                </div>
                <div className="max-w-2xl text-sm leading-6 text-muted-studio md:col-span-6">
                  <p>
                    {selectedPlacement.song} by {selectedPlacement.artist} /{" "}
                    {selectedPlacement.year} / {selectedPlacement.producerRole}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory group-hover:text-accent-violet-text">
                    View placement
                    <ArrowRight className="size-4" aria-hidden={true} />
                  </span>
                </div>
              </Link>
            ) : null}
            {collaborators.length > 0 ? (
              <article className="grid gap-5 border-b border-studio-outline py-7 transition-colors hover:bg-surface-container md:grid-cols-12 md:items-center md:px-4">
                <span className="font-mono text-sm font-bold text-muted-studio/70 md:col-span-1">
                  02
                </span>
                <div className="md:col-span-5">
                  <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-none text-ivory">
                    Artists / Collaborators
                  </h2>
                </div>
                <div className="md:col-span-6">
                  <p className="max-w-2xl text-sm leading-6 text-muted-studio">
                    Artist names are populated from verified placement records.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {collaborators.map((artist) => (
                      <span
                        key={artist}
                        className="border border-studio-outline/70 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ivory"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ) : null}
            <article className="grid gap-5 border-b border-studio-outline py-7 transition-colors hover:bg-surface-container md:grid-cols-12 md:px-4">
              <span className="font-mono text-sm font-bold text-muted-studio/70 md:col-span-1">
                03
              </span>
              <div className="md:col-span-5">
                <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-none text-ivory">
                  Studio / Tools
                </h2>
              </div>
              <div className="grid gap-5 text-sm leading-6 text-muted-studio md:col-span-6 sm:grid-cols-2">
                {[
                  ["DAW", studioTools.daw],
                  ["Plugins", studioTools.plugins.join(", ")],
                  ["Instruments", studioTools.instruments.join(", ")],
                  ["Interface", studioTools.audioInterface],
                  ["Monitoring", studioTools.monitorsHeadphones],
                  ["Microphone", studioTools.microphones.join(", ")],
                  ["Recording Space", studioTools.recordingSpace],
                  ["Workflow", studioTools.workflow.join(", ")],
                  ["Specialties", studioTools.specialties.join(", ")]
                ].map(([label, value]) => (
                  <div key={label} className="border-l border-studio-outline/70 pl-4">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-accent-violet-text">
                      {label}
                    </p>
                    <p className="mt-2">{value}</p>
                  </div>
                ))}
              </div>
            </article>
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
            <BadgeCheck className="mb-5 size-6 text-accent-violet-text" aria-hidden={true} />
            <p className="text-lg leading-8 text-muted-studio">
              Verified placements are published from approved release details.
              Additional credits, press, collaborations, and career history
              will appear only after they are approved.
            </p>
            <Link
              href="/placements"
              className="mt-8 inline-flex min-h-12 items-center gap-3 border border-studio-outline px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-accent-violet hover:text-accent-violet-text"
            >
              View placement
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
            className="mt-8 inline-flex min-h-12 items-center gap-3 border border-ink bg-ink px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-accent-violet hover:bg-accent-violet hover:text-white"
          >
            Start a project
            <Mail className="size-4" aria-hidden={true} />
          </Link>
        </div>
      </section>
    </>
  );
}
