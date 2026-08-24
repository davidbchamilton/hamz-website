import Link from "next/link";
import { MainNavigation } from "@/components/navigation/main-navigation";
import { siteIdentity } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ivory/10 bg-ink/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-3"
          aria-label={`${siteIdentity.name} home`}
        >
          <span className="flex size-9 items-center justify-center rounded-md border border-brass/60 bg-brass text-sm font-black text-ink">
            CP
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.16em] text-ivory sm:inline">
            {siteIdentity.name}
          </span>
        </Link>
        <MainNavigation />
      </div>
    </header>
  );
}
