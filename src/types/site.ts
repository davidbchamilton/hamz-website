import type { ComponentType } from "react";

export type Service = {
  name: string;
  slug: string;
  description: string;
  icon?: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

export type Placement = {
  song: string;
  artist: string;
  year?: number;
  producerRole: string;
  artworkUrl?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeUrl?: string;
};

export type BeatPackTrack = {
  title: string;
  bpm?: number;
  musicalKey?: string;
  previewUrl?: string;
  position: number;
};

export type BeatPack = {
  slug: string;
  title: string;
  description: string;
  beatCount?: number;
  bpmMin?: number;
  bpmMax?: number;
  tracks?: BeatPackTrack[];
};

export type SocialLink = {
  label: string;
  href: string;
  isPending?: boolean;
};

export type NavigationItem = {
  href: string;
  label: string;
};

export type SiteIdentity = {
  name: string;
  legalNamePending: boolean;
  tagline: string;
  description: string;
};
