import { Headphones } from "lucide-react";
import { beatStars } from "@/data/site";
import { LazyBeatStarsFrame } from "@/components/media/lazy-beatstars-frame";

type BeatStarsPanelProps = {
  compact?: boolean;
};

export function BeatStarsPanel({ compact = false }: BeatStarsPanelProps) {
  if (!beatStars.isConfigured || !beatStars.embedUrl) {
    return (
      <div className="border border-studio-outline/70 bg-charcoal-depth p-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center border border-accent-violet bg-accent-violet text-white">
            <Headphones className="size-5" aria-hidden={true} />
          </span>
          <div>
            <h3 className="font-display text-2xl uppercase tracking-[0.03em] text-ivory">
              BeatStars catalogue unavailable
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-studio">
              Use the contact page for beat, licensing, and production inquiries.
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
    <LazyBeatStarsFrame
      embedUrl={beatStars.embedUrl}
      profileUrl={beatStars.profileUrl}
    />
  );
}
