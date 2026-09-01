"use client";

import { Menu, Music2, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNavigation } from "@/data/site";

export function MainNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Primary navigation" className="relative">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center border border-studio-outline text-ivory transition-colors hover:border-accent-violet hover:text-accent-violet-text md:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="sr-only">Toggle navigation</span>
        {isOpen ? <X className="size-5" aria-hidden={true} /> : <Menu className="size-5" aria-hidden={true} />}
      </button>
      <ul className="hidden items-center gap-7 md:flex">
        {primaryNavigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-10 items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition ${
                  isActive
                    ? "text-accent-violet-text"
                    : "text-muted-studio hover:text-accent-violet-text"
                }`}
              >
                {item.label === "Beats" ? (
                  <Music2 className="size-4" aria-hidden={true} />
                ) : null}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute right-0 top-14 w-[min(82vw,22rem)] border border-studio-outline bg-surface-lowest p-2 md:hidden"
        >
          {primaryNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-11 items-center px-3 font-mono text-xs font-bold uppercase tracking-[0.16em] ${
                  isActive ? "bg-ivory text-ink" : "text-muted-studio hover:bg-surface-container hover:text-accent-violet-text"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </nav>
  );
}
