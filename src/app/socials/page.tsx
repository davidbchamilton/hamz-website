import type { Metadata } from "next";
import { ArrowUpRight, Instagram, Music2 } from "lucide-react";
import { SocialEmbed } from "@/components/media/social-embed";
import { socialPosts, socialProfiles } from "@/data/socials";

const description = "Selected Instagram posts and TikTok videos from HAMZXL. Music, releases, and moments beyond the studio.";

export const metadata: Metadata = {
  title: "Socials",
  description,
  alternates: { canonical: "/socials" },
  openGraph: { title: "Socials | HAMZXL", description, url: "/socials", type: "website" },
  twitter: { card: "summary", title: "Socials | HAMZXL", description }
};

const externalLink = "inline-flex min-h-11 items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-accent-violet-text transition-colors hover:text-ivory";

function PostGrid({ platform }: { platform: "Instagram" | "TikTok" }) {
  return (
    <div className="mt-10 grid min-w-0 gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
      {socialPosts.filter((post) => post.platform === platform).map((post) => (
        <article key={post.id} className="min-w-0">
          <SocialEmbed title={post.title} platform={post.platform} embedUrl={post.embedUrl} />
          <div className="mt-5 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-studio">
            <span>{post.platform}</span>
            {post.publishedAt ? <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("en", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(post.publishedAt))}</time> : null}
          </div>
          <h3 className="mt-4 font-display text-3xl uppercase text-ivory">{post.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-studio">{post.description}</p>
          <a href={post.url} target="_blank" rel="noopener noreferrer" className={`${externalLink} mt-3`} aria-label={`Open ${post.title} on ${post.platform}`}>Open {platform === "TikTok" ? "video" : "post"} <ArrowUpRight className="size-4" aria-hidden={true} /></a>
        </article>
      ))}
    </div>
  );
}

export default function SocialsPage() {
  return (
    <>
      <section className="border-b border-studio-outline/60 px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-violet-text">HAMZXL / Socials</p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,7rem)] uppercase leading-[0.95] text-ivory">Beyond<br />the studio.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-studio">Music, releases, and everything in between. A selection from Instagram and TikTok.</p>
          </div>
          <div className="flex flex-col items-start gap-2 md:col-span-4">
            <a href={socialProfiles.instagram} target="_blank" rel="noopener noreferrer" className={externalLink}><Instagram className="size-4" aria-hidden={true} /> Follow on Instagram <ArrowUpRight className="size-4" aria-hidden={true} /></a>
            <a href={socialProfiles.tiktok} target="_blank" rel="noopener noreferrer" className={externalLink}><Music2 className="size-4" aria-hidden={true} /> Follow on TikTok <ArrowUpRight className="size-4" aria-hidden={true} /></a>
          </div>
        </div>
      </section>
      <section aria-labelledby="instagram-heading" className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-violet-text">01 / Selected posts</p>
          <h2 id="instagram-heading" className="font-display text-4xl uppercase text-ivory md:text-5xl">On Instagram</h2>
          <PostGrid platform="Instagram" />
        </div>
      </section>
      <section aria-labelledby="tiktok-heading" className="border-t border-studio-outline/60 bg-charcoal-depth px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-violet-text">02 / Selected videos</p>
          <h2 id="tiktok-heading" className="font-display text-4xl uppercase text-ivory md:text-5xl">On TikTok</h2>
          <PostGrid platform="TikTok" />
        </div>
      </section>
    </>
  );
}
