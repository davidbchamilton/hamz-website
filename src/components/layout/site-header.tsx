import Image from "next/image";
import Link from "next/link";
import { MainNavigation } from "@/components/navigation/main-navigation";
import { siteIdentity } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-studio-outline/45 bg-surface/95">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-5 md:px-16">
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-3"
          aria-label={`${siteIdentity.name} home`}
        >
          <Image
            src="/images/hamzxl-logo.webp"
            alt=""
            width={512}
            height={347}
            quality={80}
            sizes="(min-width: 768px) 3.5rem, 3rem"
            className="h-12 w-auto object-contain md:h-14"
          />
          <span className="sr-only">
            {siteIdentity.name}
          </span>
        </Link>
        <MainNavigation />
      </div>
    </header>
  );
}
