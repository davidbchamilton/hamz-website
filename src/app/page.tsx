import { ArrowDown, ArrowRight, CalendarDays, Mail, Music2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BeatStarsPanel } from "@/components/media/beatstars-panel";
import { MediaPlaceholder } from "@/components/media/media-placeholder";
import { emptyPlacements, featuredBeats, services, siteIdentity } from "@/data/site";

const metaTags = ["Soca", "Dancehall", "Afrobeats"];

const bioParagraphs = [
  "Hamz XL is a Caribbean music producer driven by one thing above all: creating music that makes people feel something.",
  "Drawn naturally to dark, emotional and nostalgic melodies, Hamz XL brings that atmosphere into the high-energy worlds of Soca and Bouyon, exploring how unexpected moods, textures and ideas can push Caribbean music in new directions.",
  "His approach to production is rooted in creative freedom. He believes artists should have the space to experiment, take risks and create without being boxed in by conventional ideas of what music is supposed to sound like. To him, music is subjective - if it moves you, it works.",
  "That same philosophy shapes his own development as a producer. Hamz XL is constantly refining his craft, experimenting with new sounds and looking for ways to make each production stronger than the last.",
  "Whether he is creating a beat, collaborating with an artist or developing a new sound, the goal remains the same: make something distinctive, memorable and inspiring."
];

function SectionMarker({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-8 flex items-center gap-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted-studio">
      <span className="text-tertiary-gold">{index}</span>
      <span className="h-px w-12 bg-studio-outline" />
      <span>{label}</span>
    </div>
  );
}

function IndustrialLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "border-ivory bg-ivory text-ink hover:border-tertiary-gold hover:bg-tertiary-gold"
      : "border-ivory bg-transparent text-ivory hover:border-tertiary-gold hover:text-tertiary-gold";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center border px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  const [primaryBeat] = featuredBeats;

  return (
    <>
      <section className="relative mx-auto min-h-[calc(100svh-85px)] max-w-[1440px] overflow-hidden px-6 py-20 md:px-16 md:py-28">
        <div className="grid min-h-[760px] grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
          <div className="relative z-10 order-2 md:order-1 md:col-span-8">
            <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.22em] text-muted-studio">
              Hamz XL official website
            </p>
            <h1 className="font-display text-[clamp(4rem,15vw,7.5rem)] uppercase leading-[0.92] tracking-[0.02em] text-ivory">
              Caribbean
              <br />
              Music
              <br />
              <span className="text-tertiary-gold">Producer.</span>
            </h1>
            <p className="mt-7 max-w-xl font-mono text-xs font-bold uppercase tracking-[0.24em] text-muted-studio">
              {metaTags.join("  |  ")}
            </p>
            <p className="mt-7 max-w-2xl font-accent text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
              <span className="relative inline-block -rotate-2">
                {siteIdentity.tagline}
                <span
                  className="absolute -bottom-2 left-0 h-1 w-full bg-tertiary-gold"
                  aria-hidden={true}
                />
              </span>
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <IndustrialLink href="/beats">Browse Beats</IndustrialLink>
              <IndustrialLink href="/contact" variant="secondary">
                Work With Me
              </IndustrialLink>
            </div>
          </div>
          <div className="order-1 h-[420px] opacity-45 md:absolute md:right-16 md:top-[300px] md:order-2 md:h-[614px] md:w-[44%] md:max-w-[625px] md:opacity-100">
            <Image
              src="/images/homepage-main.webp"
              alt="Portrait of the producer leaning against a chain-link fence."
              width={1400}
              height={2098}
              priority
              unoptimized
              sizes="(min-width: 768px) 44vw, calc(100vw - 48px)"
              className="h-full w-full object-cover object-[50%_32%]"
            />
          </div>
        </div>
        <ArrowDown
          className="absolute bottom-10 left-6 hidden size-4 text-muted-studio md:left-16 md:block"
          aria-hidden={true}
        />
      </section>

      <section
        id="beats"
        className="border-y border-studio-outline/60 px-6 py-24 md:px-16 md:py-40"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionMarker index="01" label="BeatStars source" />
              <h2 className="font-display text-[clamp(3rem,8vw,5rem)] uppercase leading-none tracking-[0.02em] text-ivory">
                Current
                <br />
                Rotation
              </h2>
            </div>
            <Link
              href="/beats"
              className="inline-flex w-fit items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-tertiary-gold transition-colors hover:text-ivory"
            >
              All Beats
              <ArrowRight className="size-4" aria-hidden={true} />
            </Link>
          </div>

          <div className="grid gap-8 border border-studio-outline/45 bg-charcoal-depth p-6 md:grid-cols-12 md:p-12">
            <div className="md:col-span-5">
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
            <div className="md:col-span-7 md:pl-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-studio">
                Featured catalogue
              </p>
              <h3 className="mt-3 font-display text-[clamp(2.5rem,6vw,4rem)] uppercase leading-none text-ivory">
                Winter Jab
                <br />
                Riddim
              </h3>
              <div className="my-8 grid grid-cols-3 border border-studio-outline/55">
                {[
                  ["Genre", primaryBeat.genre],
                  ["BPM", String(primaryBeat.bpm)],
                  ["Key", primaryBeat.musicalKey]
                ].map(([label, value]) => (
                  <div key={label} className="border-r border-studio-outline/55 p-4 last:border-r-0">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-studio">
                      {label}
                    </p>
                    <p className="mt-2 text-sm text-ivory">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mb-8 text-sm leading-6 text-muted-studio">
                {primaryBeat.mood}
              </p>
              <BeatStarsPanel compact />
              <Link
                href={primaryBeat.beatStarsUrl}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-between border border-studio-outline px-5 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-tertiary-gold hover:bg-tertiary-gold hover:text-ink md:w-auto md:min-w-80"
                target="_blank"
                rel="noreferrer"
              >
                Purchase on BeatStars
                <ShoppingCart className="size-4" aria-hidden={true} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-studio-outline/60 bg-charcoal-depth px-6 py-24 md:px-16 md:py-40">
        <div className="absolute right-0 top-8 hidden w-1/2 space-y-16 opacity-10 md:block">
          {[80, 62, 72, 44, 88].map((width, index) => (
            <div
              key={index}
              className="h-px bg-tertiary-gold"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-5xl font-display text-[clamp(3rem,8vw,6rem)] uppercase leading-[1.02] tracking-[0.02em] text-ivory">
            Sound built in the{" "}
            <span className="text-tertiary-gold">Caribbean</span>.
            <br />
            Made to travel.
          </h2>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <SectionMarker index="02" label="Services" />
            <h2 className="font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-none text-ivory">
              Production
              <br />
              Services
            </h2>
          </div>
          <div className="md:col-span-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/contact?service=${service.slug}`}
                className="group grid gap-4 border-t border-studio-outline/60 py-7 transition-colors last:border-b hover:bg-surface-container md:grid-cols-[5rem_1fr_auto] md:items-center md:px-4"
              >
                <span className="font-mono text-sm font-bold text-tertiary-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-none text-ivory">
                    {service.name}
                  </span>
                  <span className="mt-3 block max-w-2xl text-sm leading-6 text-muted-studio">
                    {service.description}
                  </span>
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-studio group-hover:text-tertiary-gold">
                  Request Quote
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-studio-outline/60 px-6 py-24 md:px-16 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <MediaPlaceholder label="Approved studio portrait pending." hideLabel />
          </div>
          <div className="md:col-span-7">
            <SectionMarker index="03" label="Bio / Philosophy" />
            <h2 className="font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-none text-ivory">
              Hamz
              <br />
              XL
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted-studio md:text-lg">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-ivory bg-ivory px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-tertiary-gold hover:bg-tertiary-gold"
              >
                Get In Touch
              </Link>
              <Link
                href="/beats"
                className="inline-flex min-h-12 items-center justify-center border border-studio-outline px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-tertiary-gold hover:text-tertiary-gold"
              >
                Explore Beats
              </Link>
            </div>
            {emptyPlacements.length === 0 ? (
              <div className="mt-10 border border-studio-outline p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-tertiary-gold">
                  Selected placements
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-studio">
                  No verified placements are published yet because no approved
                  placement records were supplied.
                </p>
                <Link
                  href="/placements"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory hover:text-tertiary-gold"
                >
                  View placements
                  <ArrowRight className="size-4" aria-hidden={true} />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 md:py-40">
        <div className="mx-auto max-w-[1440px] border border-studio-outline bg-surface-lowest p-6 md:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionMarker index="04" label="Caribbean Music Awards" />
              <h2 className="font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-none text-ivory">
                Exclusive
                <br />
                Beat Packs
              </h2>
              <p className="mt-7 max-w-3xl text-lg leading-7 text-muted-studio">
                Exclusive Beat Packs are available to invited artists. Real
                invite verification, secure sessions, private storage, and
                signed downloads remain reserved for the Supabase portal phase.
              </p>
            </div>
            <div className="md:col-span-4">
              <Link
                href="/cma"
                className="inline-flex min-h-14 w-full items-center justify-between border border-ivory bg-ivory px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-tertiary-gold hover:bg-tertiary-gold"
              >
                CMA Access
                <CalendarDays className="size-4" aria-hidden={true} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-studio-outline/60 px-6 py-24 md:px-16 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-tertiary-gold">
              Work inquiries
            </p>
            <h2 className="mt-6 font-display text-[clamp(3.5rem,10vw,7rem)] uppercase leading-[0.95] tracking-[0.02em] text-ivory">
              Shape the
              <br />
              next record.
            </h2>
          </div>
          <div className="md:col-span-4">
            <Link
              href="/contact"
              className="inline-flex min-h-14 w-full items-center justify-between border border-ivory bg-transparent px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-tertiary-gold hover:bg-tertiary-gold hover:text-ink"
            >
              Request Quote
              <Mail className="size-4" aria-hidden={true} />
            </Link>
            <Link
              href="/beats"
              className="mt-4 inline-flex min-h-14 w-full items-center justify-between border border-studio-outline px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-studio transition-colors hover:border-tertiary-gold hover:text-tertiary-gold"
            >
              Browse Beats
              <Music2 className="size-4" aria-hidden={true} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
