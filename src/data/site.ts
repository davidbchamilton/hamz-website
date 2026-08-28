import {
  BadgeCheck,
  Disc3,
  Headphones,
  Mail,
  Mic2,
  Music2,
  Radio,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  FeaturedBeat,
  NavigationItem,
  Placement,
  Service,
  SiteIdentity,
  SocialLink,
  StudioTools
} from "@/types/site";

export const siteIdentity: SiteIdentity = {
  name: "HAMZXL",
  legalNamePending: false,
  tagline: "Hamz on the beat, my G",
  description:
    "Official public website for Hamz XL, a Caribbean music producer."
};

export const primaryNavigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/beats", label: "Beats" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const secondaryNavigation: NavigationItem[] = [
  { href: "/placements", label: "Placements" },
  { href: "/press", label: "Press" }
];

export const services: Service[] = [
  {
    name: "Custom Beats",
    slug: "custom-beats",
    icon: Music2,
    description:
      "Original production shaped around an artist's voice, record direction, tempo, and release goals."
  },
  {
    name: "Exclusive Production",
    slug: "exclusive-production",
    icon: Sparkles,
    description:
      "One-of-one production for artists who need a distinctive record rather than a shared beat license."
  },
  {
    name: "Mixing & Mastering",
    slug: "mixing-mastering",
    icon: SlidersHorizontal,
    description:
      "Mix and master support for records that need polish, weight, clarity, and release-ready translation."
  },
  {
    name: "Vocal Production",
    slug: "vocal-production",
    icon: Mic2,
    description:
      "Session direction, arrangement feedback, vocal comping guidance, and performance-focused record finishing."
  },
  {
    name: "Sync Licensing",
    slug: "sync-licensing",
    icon: Radio,
    description:
      "Production availability for supervisors, creative teams, and brands seeking Caribbean-rooted music."
  }
];

export const placements: Placement[] = [
  {
    song: "Rum Cause It",
    artist: "Linky First",
    year: 2025,
    producerRole: "Producer",
    artworkUrl: "/images/rum-cause-it.webp",
    spotifyUrl: "https://open.spotify.com/track/2AE0LCQSByCQQU7elfhzlM?si=72f5c06bd0394c34",
    appleMusicUrl: "https://music.apple.com/tt/album/rum-cause-it/1848717721?i=1848717722",
    youtubeUrl: "https://www.youtube.com/watch?v=9a0CeiloosA"
  },
  {
    song: "Ghost Mansion Riddim",
    artist: "Da Face, Xinbad, DNA 868 Muzik, Chenko, Ken",
    year: 2025,
    producerRole: "Producer, Composer",
    artworkUrl: "/images/ghost-mansion.webp",
    spotifyUrl: "https://open.spotify.com/album/6F4P2zutPcvf7WxHBpGHbA?si=qpc153XOS6iZfNUpWpNEFg",
    appleMusicUrl: "https://music.apple.com/us/album/ghost-mansion-riddim-ep-ep/1788497562",
    youtubeUrl: "https://www.youtube.com/watch?v=9a0CeiloosA"
  },
  {
    song: "Parang Z Riddim",
    artist: "Da Face, Starflo, DNA 868 Muzik, Chenko, Shaq",
    year: 2025,
    producerRole: "Producer, Composer",
    artworkUrl: "/images/parangz.webp",
    spotifyUrl: "https://open.spotify.com/album/6KGRDasyG8FCMQMr1b5jnU?si=f069dd92140f4b83",
    appleMusicUrl: "https://music.apple.com/tt/album/parang-z-riddim-ep/1857484429",
    youtubeUrl: "https://www.youtube.com/watch?v=q5wV9ONUpdI&list=PLOjmy-UpL7ztFSMNH5RN4yYniIfiNMOqH"
  },
  {
    song: "Crapaud Smoke Dey Pipe",
    artist: "Da Face",
    year: 2025,
    producerRole: "Producer, Composer",
    artworkUrl: "/images/crapaud-smoke-dey-pipe.webp",
    spotifyUrl: "https://open.spotify.com/album/6uEdPs5k77kkCNRqZkJUAb?si=mjI0bs-vR_STawFrtBm2FQ",
    appleMusicUrl: "https://music.apple.com/tt/album/crapaud-smoke-dey-pipe-double-album/1823157120",
    youtubeUrl: "https://youtu.be/IX-iZgeY-dE?si=rZw1aAmetOIqjD63"
  }
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "", isPending: true },
  {
    label: "BeatStars",
    href: "https://player.beatstars.com/?storeId=152867",
    isPending: false
  },
  { label: "WhatsApp", href: "", isPending: true },
  { label: "Email", href: "", isPending: true }
];

export const beatStars = {
  profileUrl: "https://player.beatstars.com/?storeId=152867",
  embedUrl: "https://player.beatstars.com/?storeId=152867",
  isConfigured: true
};

export const featuredBeats: FeaturedBeat[] = [
  {
    title: "Winter Jab Riddim",
    genre: "Soca",
    beatStarsUrl: "https://www.beatstars.com/beat/winter-jab-riddim-23115251",
    artworkUrl: "/images/winter-jab.webp",
    bpm: 158,
    musicalKey: "Bm",
    mood: "High powered, Caribbean, Jab energy"
  },
  {
    title: "School Days Riddim",
    genre: "Dancehall",
    beatStarsUrl: "https://www.beatstars.com/beat/school-days-riddim-22396596",
    artworkUrl: "/images/school-days.webp",
    bpm: 110,
    musicalKey: "GM",
    mood: "Nostalgic, rockback, vacation, dancehall"
  },
  {
    title: "Millennium Carnival Riddim",
    genre: "Soca",
    beatStarsUrl: "https://www.beatstars.com/beat/millennium-carnival-riddim-22842538",
    artworkUrl: "/images/millenium.webp",
    bpm: 155,
    musicalKey: "CM",
    mood: "Carnival Tuesday, flag waving, bumper chasing, wild out"
  }
];

export const studioTools: StudioTools = {
  daw: "Studio One",
  plugins: ["Waves", "Sonnox", "Cable Guys"],
  instruments: ["Guitar", "Alesis V49 MIDI Keyboard"],
  audioInterface: "Universal Audio Apollo Solo",
  monitorsHeadphones:
    "Audio-Technica ATH-M50X, Yamaha HS8 8-Inch Powered Studio Monitor Pair",
  microphones: ["AKG Pro Audio P220"],
  recordingSpace: "Home studio and commercial studio",
  workflow: ["Beatmaking", "Vocal production", "Mixing", "Arrangement", "Mastering"],
  specialties: ["Soca", "Bouyon", "Jab", "Hip Hop", "Dancehall"]
};

export const proofPoints: Array<{
  label: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    label: "Artist-first production",
    description: "Built around voice, pocket, release intent, and repeat collaboration.",
    icon: Users
  },
  {
    label: "Commercial beat source",
    description: "BeatStars will remain the public catalogue and purchase destination.",
    icon: Disc3
  },
  {
    label: "Private-pack ready",
    description: "The CMA route is prepared visually; real access control comes next.",
    icon: ShieldCheck
  },
  {
    label: "Content integrity",
    description: "Credits, awards, press, and collaborations appear only after approval.",
    icon: BadgeCheck
  }
];

export const serviceSelectOptions = services.map((service) => ({
  value: service.slug,
  label: service.name
}));

export const contactChannels = [
  {
    label: "Instagram",
    detail: "Pending approved profile URL",
    href: "",
    icon: Users
  },
  {
    label: "BeatStars",
    detail: "Pending approved profile URL",
    href: "",
    icon: Headphones
  },
  {
    label: "WhatsApp",
    detail: "Pending approved number or link",
    href: "",
    icon: Radio
  },
  {
    label: "Email",
    detail: "Pending approved email address",
    href: "",
    icon: Mail
  }
];
