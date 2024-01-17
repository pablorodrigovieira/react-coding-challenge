import { render, screen } from "@testing-library/react";
import PopularTitles from "@/components/PopularTitles";

describe("PopularTitles component", () => {
  describe("Rendering", () => {
    it("should render PopularTitles component with the text: Popular Series", () => {
      render(<PopularTitles />);
      expect(screen.getByText("Popular Series")).toBeInTheDocument();
    });

    it("should render PopularTitles component with the text: Popular Movies", () => {
      render(<PopularTitles />);
      expect(screen.getByText("Popular Movies")).toBeInTheDocument();
    });

    it("should render 2 images correctly", () => {
      render(<PopularTitles />);
      const images = screen.getAllByAltText("Video placeholder");
      expect(images).toHaveLength(2);
    });
  });
});
