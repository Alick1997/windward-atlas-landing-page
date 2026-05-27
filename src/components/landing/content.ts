export type FeatureItem = {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  body: string;
  chips: string[];
  videoUrl?: string;
  poster: string;
  posterAlt: string;
  videoLabel?: string;
};

export const features: FeatureItem[] = [
  {
    id: "offline-maps",
    navLabel: "Offline Navigation",
    eyebrow: "Full Offline Support",
    title: "No data needed.",
    body: "Never lose your bearings. Navigate trails with precise trail paths, fully functional with no cellular data. Hike stats are saved for later, so you can review memories or share with friends.",
    chips: ["Saved routes", "Live path", "Trail stats"],
    videoUrl:
      "https://assets.windwardatlas.com/Phone-Only-Winward-Atlas-Trail-Completion.mp4",
    poster: "/mockups/active-hike.jpeg",
    posterAlt: "Windward Atlas active hike route screen with trail progress",
    videoLabel: "Windward Atlas offline route app recording",
  },
  {
    id: "trail-search",
    navLabel: "Discover Trails",
    eyebrow: "Trail Search",
    title: "Rich Catalog of Trails.",
    body: "Find the ideal trail with rich search and discovery. View popular trails, search by difficulty, or even what sights you want to see.",
    chips: ["Waterfalls", "Easy", "Near me", "Family-friendly", "Short routes"],
    videoUrl:
      "https://assets.windwardatlas.com/Winward-Atlas-Search-Trails.mp4",
    poster: "/mockups/previous-hike-session.jpeg",
    posterAlt: "Windward Atlas trail discovery screen with previous hike details",
    videoLabel: "Windward Atlas trail search app recording",
  },
  {
    id: "trail-alerts",
    navLabel: "Points of Interest",
    eyebrow: "Sights and warnings",
    title: "Stay Informed.",
    body: "View important waypoints embedded directly into your trail path. See jaw-dropping sights on trail, potential hazards, and advice from guides and other hikers.",
    chips: ["Notable sights", "Hazards", "Trail notes"],
    videoUrl:
      "https://assets.windwardatlas.com/Phone-Only-Winward%20Atlas%20-%20Trail%20Sites.mp4",
    poster: "/mockups/emerald-pool-callout-mid-hike.jpeg",
    posterAlt: "Windward Atlas trail waypoint screen showing Emerald Pool context",
    videoLabel: "Windward Atlas trail sights and warnings app recording",
  },
  {
    id: "guide-lists",
    navLabel: "Hire Local Guides",
    eyebrow: "",
    title: "Contact Guides.",
    body: "Local guides are the core of this service. Hire trail experts directly in app to take your hikes to another level, no extra charge to you.",
    chips: ["Guide directory", "Trail Specialization", "Expert Guidance"],
    poster: "/mockups/boiling-lake-hike-required.png",
    posterAlt: "Windward Atlas guide recommendation screen for the Boiling Lake hike",
  },
];

export const introPoints = [
  "Pick routes by difficulty, distance, and sights before you commit.",
  "Carry local route context offline when service drops.",
  "Spot waterfalls, viewpoints, hazards, and guide notes as you hike.",
];

export const proofBadges = ["Dominica-first", "Guide-informed", "Field-tested"];
