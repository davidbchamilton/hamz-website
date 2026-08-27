import type { Metadata } from "next";
import { ArrowDown, ArrowRight, Mail, Play, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BeatStarsPanel } from "@/components/media/beatstars-panel";
import { MediaPlaceholder } from "@/components/media/media-placeholder";
import { beatStars, featuredBeats } from "@/data/site";

export const metadata: Metadata = {
  title: "Beats",
  description:
    "Browse Caribbean production and connect to BeatStars for listening, licensing, and purchases.",
  alternates: {
    canonical: "/beats"
  },
  openGraph: {
    title: "Beats | Caribbean Music Producer",
    description:
      "A premium beat-discovery page prepared for BeatStars listening, licensing, purchases, and custom production inquiries."
  }
};

const genres = [
  {
    name: "Soca",
    status: "Winter Jab Riddim featured"
  },
  {
    name: "Dancehall",
    status: "Approved catalogue metadata pending"
  },
  {
    name: "Afrobeats",
    status: "Featured entries pending approval"
  }
];

const playerMetadata = [
  ["Source", "BeatStars"],
  ["Inventory", "External"],
  ["Checkout", "BeatStars"]
];

const catalogueNotes = [
  ["01", "BeatStars remains the commercial catalogue and purchase destination."],
  ["02", "Featured beat names, BPMs, keys, and artwork are pending approved content."],
  ["03", "Local filtering will only be added when curated beat metadata exists."]
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

function BeatStarsAction({
  href,
  className = "",
  children
}: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const destination = href ?? beatStars.profileUrl;

  if (destination) {
    return (
      <a
        href={destination}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href="/contact" className={className}>
      {children}
    </Link>
  );
}

export default function BeatsPage() {
  const [primaryBeat] = featuredBeats;
  const featuredRows = [
    primaryBeat,
    {
      title: "Dancehall",
      genre: "Dancehall",
      status: "Approved catalogue metadata pending"
    },
    {
      title: "Afrobeats",
      genre: "Afrobeats",
      status: "Featured entries pending approval"
    }
  ];

  return (
    <>
      <section className="relative mx-auto max-w-[1440px] overflow-hidden px-6 pb-20 pt-16 md:px-16 md:pb-32 md:pt-28">
        <div className="grid min-h-[560px] gap-12 md:grid-cols-12 md:items-end md:gap-8">
          <div className="relative z-10 md:col-span-7">
            <h1 className="font-display text-[clamp(4.75rem,16vw,9rem)] uppercase leading-none tracking-[0.02em] text-ivory">
              Beats
            </h1>
            <p className="mt-6 max-w-xl font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-studio sm:text-sm">
              Soca / Dancehall / Afrobeats
            </p>
            <div className="mt-8 h-px w-full bg-studio-outline/50" />
          </div>
          <div className="h-[360px] opacity-70 md:col-span-5 md:h-[500px] md:-translate-x-16 md:opacity-80">
            <MediaPlaceholder
              className="h-full aspect-auto grayscale"
              label="Approved studio catalogue photography pending."
              hideLabel
            />
          </div>
        </div>
        <ArrowDown
          className="absolute bottom-10 left-6 hidden size-4 text-muted-studio md:left-16 md:block"
          aria-hidden={true}
        />
      </section>

      <section className="px-6 pb-24 md:px-16 md:pb-40">
        <div className="mx-auto max-w-[1440px]">
          <div className="group relative grid gap-8 overflow-hidden border border-studio-outline/45 bg-charcoal-depth/70 p-6 transition-colors hover:bg-charcoal-depth md:grid-cols-12 md:items-center md:p-8">
            <div className="absolute inset-y-0 left-0 w-px bg-tertiary-gold opacity-70" />
            <div className="md:col-span-4">
              <div
                className="grit-overlay relative flex aspect-square items-center justify-center overflow-hidden border border-studio-outline bg-surface-lowest p-8"
                role="img"
                aria-label="HAMZXL logo."
              >
                <Image
                  src="/images/hamzxl-logo.webp"
                  alt=""
                  width={512}
                  height={347}
                  unoptimized
                  className="w-full max-w-[18rem] object-contain opacity-90"
                />
                <div className="absolute inset-x-0 bottom-0 h-px bg-tertiary-gold/70" />
              </div>
            </div>
            <div className="md:col-span-8 md:pl-6">
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-tertiary-gold">
                    Now playing
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(2.75rem,7vw,5rem)] uppercase leading-none tracking-[0.02em] text-ivory">
                    BeatStars
                    <br />
                    Catalogue
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-muted-studio">
                    {playerMetadata.map(([label, value]) => (
                      <span key={label}>
                        <span className="text-muted-studio/60">{label}</span>{" "}
                        <span className="text-ivory">{value}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-16 border-y border-studio-outline/45">
                  <div className="flex h-full items-center">
                    <div className="relative h-0.5 w-1/3 bg-tertiary-gold">
                      <span className="absolute right-0 top-1/2 size-2 -translate-y-1/2 bg-ivory" />
                    </div>
                    <div className="h-px flex-1 bg-studio-outline/55" />
                  </div>
                </div>

                <div>
                  <BeatStarsPanel compact />
                  <div className="mt-6 flex justify-end">
                    <BeatStarsAction className="inline-flex min-h-12 w-full items-center justify-between border border-studio-outline/70 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-tertiary-gold hover:bg-tertiary-gold hover:text-ink sm:w-auto">
                      {beatStars.profileUrl ? "Purchase on BeatStars" : "Request BeatStars Link"}
                      <ShoppingCart className="size-4" aria-hidden={true} />
                    </BeatStarsAction>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 md:py-40">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col gap-8 border-b border-studio-outline/55 pb-7 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-[clamp(3.5rem,8vw,6rem)] uppercase leading-none text-ivory">
              Featured
              <br />
              Beats
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-studio">
              <span className="border-b border-tertiary-gold pb-1 text-ivory">All</span>
              {genres.map((genre) => (
                <span key={genre.name} className="pb-1">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            {featuredRows.map((beat, index) => (
              <article
                key={beat.title}
                className="group grid gap-5 border-b border-studio-outline/45 py-6 transition-colors hover:bg-charcoal-depth md:grid-cols-12 md:items-center md:px-4"
              >
                <div className="flex items-center gap-4 md:col-span-1 md:justify-center">
                  <span className="font-mono text-xs font-bold text-tertiary-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Play
                    className="size-4 text-muted-studio transition-colors group-hover:text-tertiary-gold md:hidden"
                    aria-hidden={true}
                  />
                </div>
                <div className="md:col-span-2">
                  {"artworkUrl" in beat ? (
                    <Image
                      src={beat.artworkUrl}
                      alt={`${beat.title} artwork.`}
                      width={240}
                      height={240}
                      className="aspect-video w-full border border-studio-outline/70 object-cover grayscale transition duration-300 group-hover:grayscale-0"
                    />
                  ) : (
                    <MediaPlaceholder
                      className="aspect-video p-3"
                      label={`Approved ${beat.genre} beat artwork pending.`}
                      hideLabel
                    />
                  )}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] uppercase leading-none text-ivory">
                    {beat.title}
                  </h3>
                  {"mood" in beat ? (
                    <p className="mt-3 text-sm leading-6 text-muted-studio">
                      {beat.mood}
                    </p>
                  ) : null}
                </div>
                <div className="font-mono text-xs font-bold uppercase leading-5 tracking-[0.12em] text-muted-studio md:col-span-3">
                  {"bpm" in beat ? (
                    <>
                      <span className="block">
                        <span className="text-muted-studio/60">Genre</span>{" "}
                        <span className="text-ivory">{beat.genre}</span>
                      </span>
                      <span className="block">
                        <span className="text-muted-studio/60">BPM</span>{" "}
                        <span className="text-ivory">{beat.bpm}</span>
                        <span className="px-2 text-muted-studio/40">/</span>
                        <span className="text-muted-studio/60">Key</span>{" "}
                        <span className="text-ivory">{beat.musicalKey}</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="block">{beat.status}</span>
                      <span className="block text-muted-studio/60">BPM / Key pending</span>
                    </>
                  )}
                </div>
                <div className="md:col-span-2 md:flex md:justify-end">
                  <BeatStarsAction
                    href={"beatStarsUrl" in beat ? beat.beatStarsUrl : undefined}
                    className="inline-flex min-h-11 w-full items-center justify-between border border-studio-outline/55 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ivory transition-colors hover:border-tertiary-gold hover:bg-tertiary-gold hover:text-ink md:w-auto"
                  >
                    {"beatStarsUrl" in beat ? "Purchase" : beatStars.profileUrl ? "Purchase" : "Request"}
                    <ArrowRight className="size-4" aria-hidden={true} />
                  </BeatStarsAction>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {catalogueNotes.map(([index, note]) => (
              <div key={index} className="border-t border-studio-outline/50 pt-4">
                <span className="font-mono text-xs font-bold text-tertiary-gold">
                  {index}
                </span>
                <p className="mt-3 text-sm leading-6 text-muted-studio">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-studio-outline/60 bg-charcoal-depth px-6 py-24 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-center md:gap-8">
          <div className="md:col-span-7">
            <SectionMarker index="03" label="Custom production" />
            <h2 className="font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-none text-ivory">
              Need
              <br />
              Something
              <br />
              Built?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-7 text-muted-studio">
              For a beat built around a specific artist, hook, session, or
              release direction, start a custom production inquiry instead of
              browsing the public catalogue.
            </p>
          </div>
          <div className="md:col-span-5">
            <Link
              href="/contact?service=custom-beats"
              className="inline-flex min-h-14 w-full items-center justify-between border border-ivory bg-ivory px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-tertiary-gold hover:bg-tertiary-gold"
            >
              Request Custom Beats
              <Mail className="size-4" aria-hidden={true} />
            </Link>
            <Link
              href="/contact"
              className="mt-4 inline-flex min-h-14 w-full items-center justify-between border border-studio-outline px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-studio transition-colors hover:border-tertiary-gold hover:text-tertiary-gold"
            >
              Start Inquiry
              <ArrowRight className="size-4" aria-hidden={true} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 md:py-36">
        <div className="mx-auto max-w-[1440px] border border-studio-outline p-6 md:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-tertiary-gold">
                Commercial source of truth
              </p>
              <h2 className="mt-6 font-display text-[clamp(3.25rem,9vw,6.5rem)] uppercase leading-[0.95] tracking-[0.02em] text-ivory">
                Listen.
                <br />
                License.
                <br />
                Move.
              </h2>
            </div>
            <div className="md:col-span-4">
              <BeatStarsAction className="inline-flex min-h-14 w-full items-center justify-between border border-ivory bg-transparent px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-tertiary-gold hover:bg-tertiary-gold hover:text-ink">
                {beatStars.profileUrl ? "Purchase on BeatStars" : "Request BeatStars Link"}
                <ShoppingCart className="size-4" aria-hidden={true} />
              </BeatStarsAction>
              <p className="mt-5 text-sm leading-6 text-muted-studio">
                Approved BeatStars link and embed are still pending in project
                content, so this CTA falls back to contact until configured.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
