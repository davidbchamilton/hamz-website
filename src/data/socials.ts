export type SocialPost = {
  id: string;
  platform: "Instagram" | "TikTok";
  url: string;
  title: string;
  description: string;
  publishedAt?: string;
  embedUrl: string;
};

// Manually selected public posts. See docs/SOCIALS.md before updating.
export const socialPosts: SocialPost[] = [
  {
    id: "DeNZki9KW5H",
    platform: "Instagram",
    url: "https://www.instagram.com/karthurm/reel/DeNZki9KW5H/",
    title: "Honey & Lime Riddim",
    description: "A new music preview shared by Karthur M, from the HAMZXL Instagram profile.",
    publishedAt: "2026-10-07",
    embedUrl: "https://www.instagram.com/p/DeNZki9KW5H/embed/"
  },
  {
    id: "Dd9LlJXp6gV",
    platform: "Instagram",
    url: "https://www.instagram.com/chrystonfloyd/p/Dd9LlJXp6gV/",
    title: "Rude / Karthur M",
    description: "A release post shared by Chryston Floyd and HAMZXL.",
    publishedAt: "2026-10-01",
    embedUrl: "https://www.instagram.com/p/Dd9LlJXp6gV/embed/"
  },
  {
    id: "DdgmR7DkWNA",
    platform: "Instagram",
    url: "https://www.instagram.com/hamzxl868/p/DdgmR7DkWNA/",
    title: "Outside once in a while",
    description: "A few moments away from the studio, shared by HAMZXL.",
    publishedAt: "2026-09-20",
    embedUrl: "https://www.instagram.com/p/DdgmR7DkWNA/embed/"
  },
  {
    id: "7592730301005090104",
    platform: "TikTok",
    url: "https://www.tiktok.com/@hamzxl/video/7592730301005090104",
    title: "Selected video / 01",
    description: "Watch this selected video from @hamzxl.",
    embedUrl: "https://www.tiktok.com/player/v1/7592730301005090104?autoplay=0"
  },
  {
    id: "7546992657847880965",
    platform: "TikTok",
    url: "https://www.tiktok.com/@hamzxl/video/7546992657847880965",
    title: "Selected video / 02",
    description: "Watch this selected video from @hamzxl.",
    embedUrl: "https://www.tiktok.com/player/v1/7546992657847880965?autoplay=0"
  },
  {
    id: "7536322528248122630",
    platform: "TikTok",
    url: "https://www.tiktok.com/@hamzxl/video/7536322528248122630",
    title: "Selected video / 03",
    description: "Watch this selected video from @hamzxl.",
    embedUrl: "https://www.tiktok.com/player/v1/7536322528248122630?autoplay=0"
  }
];

export const socialProfiles = {
  instagram: "https://www.instagram.com/hamzxl868/",
  tiktok: "https://www.tiktok.com/@hamzxl"
};

