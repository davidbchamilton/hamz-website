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
  NavigationItem,
  Placement,
  Service,
  SiteIdentity,
  SocialLink
} from "@/types/site";

export const siteIdentity: SiteIdentity = {
  name: "Caribbean Music Producer",
  legalNamePending: true,
  tagline: "Dancehall, Soca, and Afrobeats production for serious artists.",
  description:
    "Official public website for a Caribbean music producer. Final name, biography, credits, links, and media assets are pending approval."
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

export const emptyPlacements: Placement[] = [];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "", isPending: true },
  { label: "BeatStars", href: "", isPending: true },
  { label: "WhatsApp", href: "", isPending: true },
  { label: "Email", href: "", isPending: true }
];

export const beatStars = {
  profileUrl: "",
  embedUrl: "",
  isConfigured: false
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
