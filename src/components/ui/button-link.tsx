import Link from "next/link";
import type { ComponentType } from "react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  className?: string;
};

const variants = {
  primary:
    "bg-brass text-ink shadow-[0_14px_35px_rgba(184,138,68,0.2)] hover:bg-brass/90",
  secondary:
    "border border-ivory/25 bg-ivory/8 text-ivory hover:border-brass/70 hover:bg-ivory/12",
  ghost: "text-ivory/80 hover:text-brass"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon,
  className = ""
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {Icon ? <Icon className="size-4" aria-hidden={true} /> : null}
      {children}
    </Link>
  );
}
