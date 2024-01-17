import { render, screen } from "@testing-library/react";
import feed from "@/constants/feed-data/sample.json";
import PopularItems from "@/components/PopularItems";

import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe("PopularItems component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  describe("Rendering", () => {
    it("should render PopularItems component correctly with 21 series", async () => {
      // Mock the API call
      fetchMock.mockResponseOnce(JSON.stringify(feed));

      const popularItemsComponent = await PopularItems({ programType: "series" });
      render(popularItemsComponent);

      const articles = await screen.findAllByRole("article");
      expect(articles).toHaveLength(21);
    });

    it("should render PopularItems component correctly with 19 movies", async () => {
      // Mock the API call
      fetchMock.mockResponseOnce(JSON.stringify(feed));

      const popularItemsComponent = await PopularItems({ programType: "movie" });
      render(popularItemsComponent);

      const articles = await screen.findAllByRole("article");
      expect(articles).toHaveLength(19);
    });
  });
});
