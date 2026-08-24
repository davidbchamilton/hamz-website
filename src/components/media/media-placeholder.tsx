type MediaPlaceholderProps = {
  label: string;
  className?: string;
};

export function MediaPlaceholder({ label, className = "" }: MediaPlaceholderProps) {
  return (
    <div
      className={`relative flex aspect-video overflow-hidden rounded-md border border-dashed border-ivory/20 bg-[radial-gradient(circle_at_20%_20%,rgba(184,138,68,0.2),transparent_28%),linear-gradient(135deg,rgba(248,243,232,0.12),rgba(15,118,110,0.12))] p-6 text-center text-sm text-ivory/62 ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-brass/60" />
      <span className="m-auto max-w-sm">{label}</span>
    </div>
  );
}
