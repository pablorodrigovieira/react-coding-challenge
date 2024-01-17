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