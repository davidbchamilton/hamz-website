"use client";

import { Play } from "lucide-react";
import { useState } from "react";

type SocialEmbedProps = {
  title: string;
  embedUrl: string;
  platform: "Instagram" | "TikTok";
};

export function SocialEmbed({ title, embedUrl, platform }: SocialEmbedProps) {
  const [activated, setActivated] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-[640px] min-w-0 overflow-hidden border border-studio-outline/60 bg-surface-lowest">
      {!activated ? (
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-studio">{platform} / Selected post</span>
          <Play className="mb-8 size-10 text-accent-violet-text" aria-hidden={true} />
          <p className="mb-6 max-w-xs font-display text-3xl uppercase leading-tight text-ivory">{title}</p>
          <button
            type="button"
            onClick={() => setActivated(true)}
            aria-label={`Load ${title} on ${platform}`}
            className="min-h-12 border border-ivory bg-ivory px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent-violet hover:bg-accent-violet hover:text-white"
          >Load {platform === "TikTok" ? "video" : "post"}</button>
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted-studio">Loads content from {platform}. You can also open it directly using the link below.</p>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title={`${title} on ${platform}`}
          className="h-full w-full border-0 bg-surface-lowest"
          allow="encrypted-media; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          onError={() => setFailed(true)}
        />
      )}
      {failed ? (
        <p role="status" className="absolute inset-x-0 bottom-0 bg-surface p-4 text-sm text-ivory">The preview could not load. Use the link below to watch on the platform.</p>
      ) : null}
    </div>
  );
}
