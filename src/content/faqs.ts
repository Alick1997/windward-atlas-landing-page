export type FAQ = {
  q: string;
  a: string;
};

export const faqs: FAQ[] = [
  {
    q: "When will Windward Atlas launch?",
    a: "We are targeting the end of 2026 for public release.",
  },
  {
    q: "How can I access this when it launches?",
    a: "The app will be available on the Apple App Store and Google Play Store. Sign up for early access to follow progress and get notified when it launches.",
  },
  {
    q: "Will the app work offline?",
    a: "This app is offline-first. Core trail features will work without Wi-Fi or cellular data.",
  },
  {
    q: "Who keeps trail information updated?",
    a: "We partner with licensed guides and frequent local hikers to help keep information updated.",
  },
  {
    q: "Is it for travelers, locals, or guides?",
    a: "All three. Travelers can plan with more context, local hikers can track routes, and guides can help keep trail knowledge useful.",
  },
];
