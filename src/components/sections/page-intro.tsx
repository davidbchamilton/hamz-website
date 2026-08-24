type PageIntroProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <section className="ambient-stage texture-line px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-lg leading-8 text-ivory/68">{children}</div>
      </div>
    </section>
  );
}
