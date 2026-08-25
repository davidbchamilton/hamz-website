import Link from "next/link";
import { MainNavigation } from "@/components/navigation/main-navigation";
import { siteIdentity } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-studio-outline/45 bg-surface/95">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-5 md:px-16">
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center"
          aria-label={`${siteIdentity.name} home`}
        >
          <span className="font-display text-[28px] uppercase leading-none tracking-[0.02em] text-ivory transition-colors group-hover:text-tertiary-gold md:text-[34px]">
            {siteIdentity.name}
          </span>
        </Link>
        <MainNavigation />
      </div>
    </header>
  );
}
