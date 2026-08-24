type PlaceholderPanelProps = {
  title: string;
  children: React.ReactNode;
};

export function PlaceholderPanel({ title, children }: PlaceholderPanelProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-12">
      <div className="border-l-4 border-brass bg-white/50 px-5 py-5">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="mt-3 text-ink/72">{children}</div>
      </div>
    </section>
  );
}
