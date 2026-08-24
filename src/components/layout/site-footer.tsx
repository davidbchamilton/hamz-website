export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} [PRODUCER NAME]. All rights reserved.</p>
        <p>TODO: Add approved social and contact links.</p>
      </div>
    </footer>
  );
}
