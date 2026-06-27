// Curated "Featured" projects shown at the top of the Projects page.
// `repoName` (when set) de-dupes the project from the auto-fetched GitHub grid below.
export interface FeaturedProject {
  name: string;
  description: string;
  url: string;
  language?: string;
  tag?: string;
  live?: boolean;
  repoName?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Echo Messenger",
    description:
      "End-to-end encrypted, decentralized messenger — a Rust core with a Flutter client.",
    url: "https://echo-messenger.us",
    language: "Rust",
    tag: "Live",
    live: true,
    repoName: "echo-messenger",
  },
  {
    name: "Sad Cats",
    description:
      "Discord community platform with an idle clicker game, daily community boss battles, and a live leaderboard.",
    url: "https://sad-cats.org",
    language: "TypeScript",
    tag: "Live",
    live: true,
    repoName: "sad-cats-backend",
  },
  {
    name: "Check-In",
    description:
      "Self-hosted way to check in with friends — share photo & text updates and get on-device birthday reminders, no big-tech middleman.",
    url: "https://github.com/NC1107/check-in",
    language: "Dart",
    tag: "Self-hosted",
    repoName: "check-in",
  },
  {
    name: "Sink",
    description:
      "SteelSeries Sonar for Linux. Per-app audio routing, mixes for OBS, and a processed virtual mic — built on PipeWire.",
    url: "https://github.com/NC1107/sink",
    language: "Rust",
    tag: "Linux App",
    repoName: "sink",
  },
];
