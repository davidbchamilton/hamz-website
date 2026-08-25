import { ExternalLink, Headphones } from "lucide-react";
import { beatStars } from "@/data/site";

type BeatStarsPanelProps = {
  compact?: boolean;
};

export function BeatStarsPanel({ compact = false }: BeatStarsPanelProps) {
  if (!beatStars.isConfigured || !beatStars.embedUrl) {
    return (
      <div className="border border-studio-outline/70 bg-charcoal-depth p-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center border border-tertiary-gold bg-tertiary-gold text-ink">
            <Headphones className="size-5" aria-hidden={true} />
          </span>
          <div>
            <h3 className="font-display text-2xl uppercase tracking-[0.03em] text-ivory">
              BeatStars catalogue pending
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-studio">
              Approved BeatStars embed and profile URL have not been supplied yet.
            </p>
          </div>
        </div>
        {!compact ? (
          <p className="mt-5 text-sm leading-6 text-muted-studio">
            This site is prepared for a responsive BeatStars embed, but it does
            not mirror inventory, pricing, licensing, or purchasing locally.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="overflow-hidden border border-studio-outline bg-black">
      <iframe
        title="BeatStars player"
        src={beatStars.embedUrl}
        loading="lazy"
        className="h-[620px] w-full md:h-[800px]"
        allow="autoplay; encrypted-media"
      />
      {beatStars.profileUrl ? (
        <a
          href={beatStars.profileUrl}
          className="inline-flex w-full items-center justify-center gap-2 border-t border-studio-outline px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition hover:text-tertiary-gold"
        >
          Purchase on BeatStars
          <ExternalLink className="size-4" aria-hidden={true} />
        </a>
      ) : null}
    </div>
  );
}
