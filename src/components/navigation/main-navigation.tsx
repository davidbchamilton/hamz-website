import Link from "next/link";
import { Music2 } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/beats", label: "Beats" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function MainNavigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex min-h-10 items-center rounded px-3 text-sm font-medium text-ink/75 transition hover:text-ink"
            >
              {item.label === "Beats" ? (
                <Music2 className="mr-2 size-4" aria-hidden="true" />
              ) : null}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
