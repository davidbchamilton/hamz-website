import type { Metadata } from "next";
import { ArrowUpRight, Disc3 } from "lucide-react";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { placements } from "@/data/site";

export const metadata: Metadata = {
  title: "Placements",
  description:
    "Verified released records and production credits for Hamz XL."
};

function PlacementLink({ href, label }: { href?: string; label: string }) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center justify-between gap-3 border border-studio-outline px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ivory transition-colors hover:border-accent-violet hover:bg-accent-violet hover:text-white"
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <ArrowUpRight className="size-4" aria-hidden={true} />
    </a>
  );
}

export default function PlacementsPage() {
  return (
    <>
      <PageIntro eyebrow="Placements" title="Released records and verified credits">
        <p>
          Verified releases with approved song, artist, year, production role,
          artwork, and listening links.
        </p>
      </PageIntro>
      <section className="px-5 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          {placements.length === 0 ? (
            <div className="border border-studio-outline bg-charcoal-depth p-8">
              <Disc3 className="size-7 text-accent-violet-text" aria-hidden={true} />
              <h2 className="mt-5 font-display text-4xl uppercase leading-none text-ivory">
                No verified placements are published yet
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/64">
                This keeps the public site clean until the approved placement
                list is supplied. No artificial artists, songs, streaming
                figures, chart claims, or credits have been added.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {placements.map((placement, index) => (
                <article
                  key={`${placement.artist}-${placement.song}`}
                  className="grid gap-6 border border-studio-outline bg-charcoal-depth p-5 md:grid-cols-12 md:items-center md:p-8"
                >
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs font-bold text-accent-violet-text">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    {placement.artworkUrl ? (
                      <Image
                        src={placement.artworkUrl}
                        alt={`${placement.song} artwork.`}
                        width={900}
                        height={880}
                        className="aspect-square w-full border border-studio-outline/70 object-cover"
                      />
                    ) : (
                      <div className="aspect-square border border-studio-outline bg-surface-lowest" />
                    )}
                  </div>
                  <div className="md:col-span-5">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent-violet-text">
                      {placement.producerRole} / {placement.year}
                    </p>
                    <h2 className="mt-4 font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-none text-ivory">
                      {placement.song}
                    </h2>
                    <p className="mt-4 text-lg leading-7 text-muted-studio">
                      {placement.artist}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 md:col-span-3">
                    <PlacementLink href={placement.spotifyUrl} label="Spotify" />
                    <PlacementLink href={placement.appleMusicUrl} label="Apple Music" />
                    <PlacementLink href={placement.youtubeUrl} label="YouTube" />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
