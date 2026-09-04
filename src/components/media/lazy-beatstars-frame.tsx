"use client";

import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type LazyBeatStarsFrameProps = {
  embedUrl: string;
  profileUrl?: string;
};

export function LazyBeatStarsFrame({
  embedUrl,
  profileUrl
}: LazyBeatStarsFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      return;
    }

    const node = frameRef.current;

    if (!node || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={frameRef} className="overflow-hidden border border-studio-outline bg-black">
      <div className="relative h-[620px] w-full md:h-[800px]">
        {shouldLoad ? (
          <iframe
            title="BeatStars player"
            src={embedUrl}
            loading="lazy"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media"
          />
        ) : (
          <div className="grit-overlay absolute inset-0 flex flex-col items-center justify-center gap-5 bg-charcoal-depth px-6 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted-studio">
              Official BeatStars catalogue
            </p>
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center border border-ivory bg-ivory px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent-violet hover:bg-accent-violet hover:text-white"
              onClick={() => setShouldLoad(true)}
            >
              Load Player
            </button>
          </div>
        )}
      </div>
      {profileUrl ? (
        <a
          href={profileUrl}
          className="inline-flex w-full items-center justify-center gap-2 border-t border-studio-outline px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ivory transition hover:text-accent-violet-text"
          target="_blank"
          rel="noreferrer"
        >
          Purchase on BeatStars
          <ExternalLink className="size-4" aria-hidden={true} />
        </a>
      ) : null}
      <noscript>
        <iframe
          title="BeatStars player"
          src={embedUrl}
          className="h-[620px] w-full md:h-[800px]"
          allow="autoplay; encrypted-media"
        />
      </noscript>
    </div>
  );
}
