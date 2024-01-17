import { render, screen } from "@testing-library/react";
import Card from "@/components/Card";

// Define the test props
const testProps = {
  path: "/series",
  label: "Test Label",
  title: "Test Title",
  className: "test-class",
  imgSrc: "/assets/placeholder.png",
  imgAlt: "Test Alt",
  imageWidth: 100,
  imageHeight: 100,
};
describe("Card component", () => {
  describe("Rendering", () => {
    it("should render Card component correctly", () => {
      render(<Card {...testProps} />);

      expect(screen.getByText("Test Label")).toBeInTheDocument();
      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByAltText("Test Alt")).toBeInTheDocument();
      expect(screen.getByRole("link")).toHaveAttribute("href", "/series");

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("alt", "Test Alt");
      expect(image).toHaveAttribute("width", "100");
      expect(image).toHaveAttribute("height", "100");
    });
  });
});
