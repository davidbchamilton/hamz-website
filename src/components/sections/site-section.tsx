type SiteSectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SiteSection({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  id
}: SiteSectionProps) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {eyebrow || title || intro ? (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-violet-text">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-semibold leading-tight text-ivory sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p className="mt-4 text-base leading-7 text-ivory/68 sm:text-lg">
                {intro}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
