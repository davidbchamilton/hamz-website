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
    "bg-ivory text-ink hover:bg-accent-violet hover:text-white",
  secondary:
    "border border-ivory bg-transparent text-ivory hover:border-accent-violet hover:text-accent-violet-text",
  ghost: "text-muted-studio hover:text-accent-violet-text"
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
      className={`inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] transition ${variants[variant]} ${className}`}
    >
      {Icon ? <Icon className="size-4" aria-hidden={true} /> : null}
      {children}
    </Link>
  );
}
