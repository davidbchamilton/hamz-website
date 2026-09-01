type MediaPlaceholderProps = {
  label: string;
  className?: string;
  hideLabel?: boolean;
};

export function MediaPlaceholder({
  label,
  className = "",
  hideLabel = false
}: MediaPlaceholderProps) {
  return (
    <div
      className={`grit-overlay relative flex aspect-video overflow-hidden border border-studio-outline bg-[linear-gradient(135deg,rgba(229,226,225,0.12),rgba(14,14,14,0.12)_40%),repeating-linear-gradient(90deg,rgba(116,79,205,0.18)_0_1px,transparent_1px_28px),#121212] p-6 text-center font-mono text-xs uppercase tracking-[0.14em] text-muted-studio ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-accent-violet/70" />
      {hideLabel ? null : <span className="m-auto max-w-sm">{label}</span>}
    </div>
  );
}
