type PlaceholderPanelProps = {
  title: string;
  children: React.ReactNode;
};

export function PlaceholderPanel({ title, children }: PlaceholderPanelProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-12">
      <div className="rounded-md border border-accent-violet/25 bg-ivory/[0.04] px-5 py-5">
        <h2 className="text-xl font-semibold text-ivory">{title}</h2>
        <div className="mt-3 text-ivory/68">{children}</div>
      </div>
    </section>
  );
}
