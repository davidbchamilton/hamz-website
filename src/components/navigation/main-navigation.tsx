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
        className="inline-flex size-11 items-center justify-center rounded-md border border-ivory/15 text-ivory md:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="sr-only">Toggle navigation</span>
        {isOpen ? <X className="size-5" aria-hidden={true} /> : <Menu className="size-5" aria-hidden={true} />}
      </button>
      <ul className="hidden items-center gap-1 md:flex">
        {primaryNavigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-10 items-center gap-2 rounded-md px-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-ivory/10 text-brass"
                    : "text-ivory/72 hover:bg-ivory/6 hover:text-ivory"
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
          className="absolute right-0 top-14 w-[min(82vw,22rem)] rounded-md border border-ivory/12 bg-[#171512] p-2 shadow-2xl md:hidden"
        >
          {primaryNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-11 items-center rounded-md px-3 text-sm font-semibold ${
                  isActive ? "bg-brass text-ink" : "text-ivory/78 hover:bg-ivory/8"
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
