import text from "./languages/en.json";

const PATHS = {
  SERIES: "/series",
  MOVIES: "/movies",
};

export const PAGES_TITLES = [
  { label: text.shared.popular_titles, path: "/" },
  { label: text.shared.popular_series, path: PATHS.SERIES },
  { label: text.shared.popular_movies, path: PATHS.MOVIES },
];

export const FOOTER_NAVIGATION_ITEMS = [
  { id: 1, label: text.navigation.home, path: "/" },
  { id: 2, label: text.navigation.terms_and_conditions, path: "#" },
  { id: 3, label: text.navigation.privacy_policy, path: "#" },
  { id: 4, label: text.navigation.collection_statement, path: "#" },
  { id: 5, label: text.navigation.help, path: "#" },
  { id: 6, label: text.navigation.manage_account, path: "#" },
];

export const STORE_IMAGES = [
  {
    href: "https://apps.apple.com/au/app/stan/id948095331?ls=1",
    imgSrc: "/assets/store/app-store.svg",
    alt: "App Store",
  },
  {
    href: "https://play.google.com/store/apps/details?id=au.com.stan.and",
    imgSrc: "/assets/store/play-store.svg",
    alt: "Play Store",
  },
  {
    href: "#",
    imgSrc: "/assets/store/windows-store.svg",
    alt: "Windows Store",
  },
];

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/StanAustralia",
    imgSrc: "/assets/social/facebook-white.svg",
    alt: "Facebook",
  },
  {
    href: "https://twitter.com/StanAustralia",
    imgSrc: "/assets/social/twitter-white.svg",
    alt: "Twitter",
  },
  {
    href: "https://www.instagram.com/stanaustralia/",
    imgSrc: "/assets/social/instagram-white.svg",
    alt: "Instagram",
  },
];
