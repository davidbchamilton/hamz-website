import { ArrowDown, ArrowRight, CalendarDays, Mail, Music2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { BeatStarsPanel } from "@/components/media/beatstars-panel";
import { MediaPlaceholder } from "@/components/media/media-placeholder";
import { emptyPlacements, services, siteIdentity } from "@/data/site";

const metaTags = ["Soca", "Dancehall", "Afrobeats"];

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
  return (
    <>
      <section className="relative mx-auto min-h-[calc(100svh-85px)] max-w-[1440px] overflow-hidden px-6 py-20 md:px-16 md:py-28">
        <div className="grid min-h-[760px] grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
          <div className="relative z-10 order-2 md:order-1 md:col-span-8">
            <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.22em] text-muted-studio">
              Official producer website
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
            <p className="mt-6 max-w-2xl text-lg leading-7 text-muted-studio">
              {siteIdentity.tagline}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <IndustrialLink href="/beats">Browse Beats</IndustrialLink>
              <IndustrialLink href="/contact" variant="secondary">
                Work With Me
              </IndustrialLink>
            </div>
          </div>
          <div className="order-1 h-[420px] opacity-45 md:absolute md:right-16 md:top-[300px] md:order-2 md:h-[614px] md:w-[44%] md:max-w-[625px] md:opacity-100">
            <MediaPlaceholder
              className="h-full aspect-auto grayscale"
              label="Approved producer hero photography pending."
              hideLabel
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
              <MediaPlaceholder
                className="aspect-square"
                label="Approved beat artwork pending."
                hideLabel
              />
            </div>
            <div className="md:col-span-7 md:pl-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-studio">
                Featured catalogue
              </p>
              <h3 className="mt-3 font-display text-[clamp(2.5rem,6vw,4rem)] uppercase leading-none text-ivory">
                BeatStars
                <br />
                Player
              </h3>
              <div className="my-8 grid grid-cols-3 border border-studio-outline/55">
                {["Genre", "BPM", "Key"].map((label) => (
                  <div key={label} className="border-r border-studio-outline/55 p-4 last:border-r-0">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-studio">
                      {label}
                    </p>
                    <p className="mt-2 text-sm text-ivory">Pending</p>
                  </div>
                ))}
              </div>
              <BeatStarsPanel compact />
              <Link
                href="/beats"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-between border border-studio-outline px-5 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-tertiary-gold hover:bg-tertiary-gold hover:text-ink md:w-auto md:min-w-80"
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
            <SectionMarker index="03" label="About / Credits" />
            <h2 className="font-display text-[clamp(3rem,7vw,5rem)] uppercase leading-none text-ivory">
              Producer
              <br />
              Profile
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-7 text-muted-studio">
              Approved biography, artist relationships, awards, and career
              highlights are pending. The homepage is structured to receive
              those facts without inventing credits or claims.
            </p>
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
