export const siteConfig = {
  name: "Windward Atlas",
  title: "Windward Atlas | Dominica Trail Guide & Offline Hiking App",
  description:
    "Plan Dominica hikes with local trail knowledge, offline maps, sight and warning waypoints, route stats, and guide-informed recommendations.",
  url: "https://windwardatlas.com",
  locale: "en_US",
  contactEmail: "hello@windwardatlas.com",
  keywords: [
    "Dominica hiking app",
    "Dominica trails",
    "offline hiking maps",
    "Caribbean hiking guide",
    "Windward Atlas",
    "Boiling Lake hike",
    "Emerald Pool Dominica",
    "Dominica travel",
    "local hiking guides",
  ],
  ogImage: {
    path: "/hike-photos/trafalgar-falls-papa.jpeg",
    width: 1536,
    height: 2048,
    alt: "Windward Atlas shown on a phone at a Dominica waterfall",
  },
  previewImages: [
    "/hike-photos/trafalgar-falls-papa.jpeg",
    "/hike-photos/elfin-woodlands-trail.jpeg",
    "/mockups/previous-hike-session.jpeg",
    "/mockups/boiling-lake-hike-required.png",
    "/mockups/home-page.jpeg"
  ],
} as const;

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const baseUrl = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}
