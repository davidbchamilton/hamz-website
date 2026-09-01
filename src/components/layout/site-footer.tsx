import Image from "next/image";
import Link from "next/link";
import { secondaryNavigation, siteIdentity, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-studio-outline/60 bg-charcoal-depth">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-12 md:px-16 md:py-28">
        <div className="md:col-span-4">
          <Image
            src="/images/hamzxl-logo.webp"
            alt="HAMZXL logo"
            width={512}
            height={347}
            unoptimized
            className="h-28 w-auto object-contain md:h-36"
          />
          <p className="mt-10 max-w-sm font-mono text-[11px] uppercase leading-5 tracking-[0.12em] text-muted-studio">
            {siteIdentity.description}
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 md:col-span-8">
          <div>
            <h2 className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory">
              Navigation
            </h2>
            <ul className="space-y-3 text-sm uppercase tracking-[0.06em] text-muted-studio">
              <li>
                <Link className="transition hover:text-accent-violet-text" href="/beats">
                  Beats
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-accent-violet-text" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-accent-violet-text" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory">
              More
            </h2>
            <ul className="space-y-3 text-sm uppercase tracking-[0.06em] text-muted-studio">
            {secondaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-accent-violet-text" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="transition hover:text-accent-violet-text" href="/cma">
                CMA Access
              </Link>
            </li>
          </ul>
          </div>
          <div>
            <h2 className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory">
              Socials
            </h2>
            <ul className="space-y-3 text-sm uppercase tracking-[0.06em] text-muted-studio">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a className="transition hover:text-accent-violet-text" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-studio-outline/60 px-6 py-5 md:px-16">
        <p className="mx-auto max-w-[1440px] font-mono text-[11px] uppercase tracking-[0.12em] text-muted-studio/70">
          &copy; {new Date().getFullYear()} {siteIdentity.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
