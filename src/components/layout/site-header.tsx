import Link from "next/link";
import { MainNavigation } from "@/components/navigation/main-navigation";

export function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-ivory/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide"
          aria-label="[PRODUCER NAME] home"
        >
          [PRODUCER NAME]
        </Link>
        <MainNavigation />
      </div>
    </header>
  );
}
