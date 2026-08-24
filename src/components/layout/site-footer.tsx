import Link from "next/link";
import { secondaryNavigation, siteIdentity, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ivory/10 bg-[#0c0c0a]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brass">
            {siteIdentity.name}
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-ivory/62">
            {siteIdentity.description}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ivory">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-ivory/62">
            {secondaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-brass" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="transition hover:text-brass" href="/cma">
                CMA Access
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ivory">Contact Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-ivory/62">
            {socialLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a className="transition hover:text-brass" href={link.href}>
                    {link.label}
                  </a>
                ) : (
                  <span>{link.label} pending</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10 px-5 py-5">
        <p className="mx-auto max-w-6xl text-xs text-ivory/45">
          &copy; {new Date().getFullYear()} {siteIdentity.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
