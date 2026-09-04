import {
  BadgeCheck,
  Disc3,
  Headphones,
  Mail,
  Mic2,
  Radio,
  ShieldCheck,
  SlidersHorizontal,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  FeaturedBeat,
  Placement,
  Service,
  SiteIdentity,
  SocialLink,
  StudioTools
} from "@/types/site";

export const siteIdentity: SiteIdentity = {
  name: "HAMZXL",
  tagline: "Hamz on the beat, my G",
  description:
    "Official public website for Hamz XL, a Caribbean music producer."
};

export const services: Service[] = [
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
    song: "Work It",
    artist: "Karthur M",
    year: 2026,
    producerRole: "Producer",
    artworkUrl: "/images/workit.webp",
    spotifyUrl: "https://open.spotify.com/track/66oHVqsGmGn8Tvz2jMLvI3?si=89047a3a6880426c",
    appleMusicUrl: "https://music.apple.com/tt/album/work-it/1865588648?i=1865588649",
    youtubeUrl: "https://www.youtube.com/watch?v=2jTB8qI5_QE"
  },
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

export const selectedPlacement =
  placements.find((placement) => placement.song === "Rum Cause It") ?? placements[0];

export const approvedCollaborators = ["Karthur M", "Chryston Floyd"];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hamzxl868"
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hamzxl"
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Hamzxl868"
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/0nTNt8ZurMb2CE4UDENcJf?si=_f7xylSDRbiPrlZEpK6DIg"
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/tt/artist/hamz-xl/1788043200"
  },
  {
    label: "BeatStars",
    href: "https://player.beatstars.com/?storeId=152867"
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/18687619145"
  },
  {
    label: "Email",
    href: "mailto:hamzxl868@gmail.com"
  }
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
    description: "Credits and collaborations appear only after approval.",
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
    detail: "Follow HAMZXL for updates, releases, studio clips, and direct messages.",
    href: "https://www.instagram.com/hamzxl868",
    icon: Users
  },
  {
    label: "TikTok",
    detail: "Watch short-form studio clips, beat previews, and release updates.",
    href: "https://www.tiktok.com/@hamzxl",
    icon: Disc3
  },
  {
    label: "YouTube",
    detail: "Watch releases, riddim uploads, visuals, and official HAMZXL content.",
    href: "https://www.youtube.com/@Hamzxl868",
    icon: Radio
  },
  {
    label: "Spotify",
    detail: "Stream HAMZXL artist releases and credited projects on Spotify.",
    href: "https://open.spotify.com/artist/0nTNt8ZurMb2CE4UDENcJf?si=_f7xylSDRbiPrlZEpK6DIg",
    icon: Disc3
  },
  {
    label: "Apple Music",
    detail: "Stream HAMZXL artist releases and credited projects on Apple Music.",
    href: "https://music.apple.com/tt/artist/hamz-xl/1788043200",
    icon: Headphones
  },
  {
    label: "BeatStars",
    detail: "Listen, license, and purchase beats through the official BeatStars player.",
    href: beatStars.profileUrl,
    icon: Headphones
  },
  {
    label: "WhatsApp",
    detail: "Message directly on WhatsApp for beat, collaboration, and production inquiries.",
    href: "https://wa.me/18687619145",
    icon: Radio
  },
  {
    label: "Email",
    detail: "Send production, custom beat, placement, and business inquiries by email.",
    href: "mailto:hamzxl868@gmail.com",
    icon: Mail
  }
];
