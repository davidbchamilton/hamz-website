type MediaPlaceholderProps = {
  label: string;
};

export function MediaPlaceholder({ label }: MediaPlaceholderProps) {
  return (
    <div
      className="flex aspect-video items-center justify-center border border-dashed border-ink/25 bg-white/35 p-6 text-center text-sm text-ink/60"
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  );
}
