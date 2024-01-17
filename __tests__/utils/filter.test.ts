import {
  filterAndOrderDataByYearLimit,
  filterEntriesByProgramType,
  getFeedDataByProgramType,
} from "@/utils/filters";

describe("Filters", () => {
  describe("function: filterAndOrderDataByYear", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("filters and orders data by title", () => {
      const entries = [
        {
          title: "Rake",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "series",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2010,
        },
        {
          title: "30 Rock",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "series",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/532/30/53230-PosterArt-df844c976b27c518d83c2707e79b4685.jpeg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2006,
        },
      ];

      const result = filterAndOrderDataByYearLimit(entries, 2010);

      expect(result).toEqual([
        {
          title: "Rake",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "series",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2010,
        },
      ]);
    });

    it("returns original entries if empty", () => {
      const emptyResult = filterAndOrderDataByYearLimit([], 2010);
      expect(emptyResult).toEqual([]);
    });
  });

  describe("function: filterEntriesByProgramType", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("filters entries by program type", () => {
      const entries = [
        {
          title: "Rake",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "movie",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2010,
        },
        {
          title: "30 Rock",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "series",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/532/30/53230-PosterArt-df844c976b27c518d83c2707e79b4685.jpeg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2006,
        },
      ];
      const result = filterEntriesByProgramType(entries, "movie");

      expect(result).toEqual([
        {
          title: "Rake",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "movie",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2010,
        },
      ]);
    });

    it("returns original entries if empty", () => {
      const emptyResult = filterEntriesByProgramType([], "movie");

      expect(emptyResult).toEqual([]);
    });
  });

  describe("function: getFeedDataByProgramType", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("retrieves feed data by program type", () => {
      const feedData = [
        {
          title: "The Resort",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "series",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/885/68/88568-PosterArt-a988d5aa0090e892f9015dd5ad17c0ac.jpg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2022,
        },
        {
          title: "Wonder",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "movie",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/165/9396/1659396-PosterArt-14385926f542bb6cb6c1fc84d907a9b2.jpeg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2017,
        },
      ];

      const result = getFeedDataByProgramType(feedData, "movie");

      expect(result).toEqual([
        {
          title: "Wonder",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          programType: "movie",
          images: {
            "Poster Art": {
              url: "https://streamcoimg-a.akamaihd.net/000/165/9396/1659396-PosterArt-14385926f542bb6cb6c1fc84d907a9b2.jpeg",
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2017,
        },
      ]);
    });

    it("returns first 21 entries or empty array if undefined", () => {
      const undefinedResult = getFeedDataByProgramType([], "movie");
      expect(undefinedResult).toEqual([]);
    });
  });
});
