import { ExternalLink, Headphones } from "lucide-react";
import { beatStars } from "@/data/site";

type BeatStarsPanelProps = {
  compact?: boolean;
};

export function BeatStarsPanel({ compact = false }: BeatStarsPanelProps) {
  if (!beatStars.isConfigured || !beatStars.embedUrl) {
    return (
      <div className="rounded-md border border-brass/25 bg-ivory/[0.04] p-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-md bg-brass text-ink">
            <Headphones className="size-5" aria-hidden={true} />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-ivory">BeatStars catalogue pending</h3>
            <p className="mt-1 text-sm text-ivory/62">
              Approved BeatStars embed and profile URL have not been supplied yet.
            </p>
          </div>
        </div>
        {!compact ? (
          <p className="mt-5 text-sm leading-6 text-ivory/62">
            This site is prepared for a responsive BeatStars embed, but it does
            not mirror inventory, pricing, licensing, or purchasing locally.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-ivory/12 bg-black">
      <iframe
        title="BeatStars player"
        src={beatStars.embedUrl}
        loading="lazy"
        className="h-[520px] w-full"
        allow="autoplay; encrypted-media"
      />
      {beatStars.profileUrl ? (
        <a
          href={beatStars.profileUrl}
          className="inline-flex w-full items-center justify-center gap-2 border-t border-ivory/12 px-4 py-3 text-sm font-semibold text-ivory transition hover:text-brass"
        >
          Purchase on BeatStars
          <ExternalLink className="size-4" aria-hidden={true} />
        </a>
      ) : null}
    </div>
  );
}
