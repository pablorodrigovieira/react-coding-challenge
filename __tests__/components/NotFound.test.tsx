import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";
describe("NotFound component", () => {
  describe("Rendering", () => {
    it("should render NotFound component with heading text: Oops!", () => {
      render(<NotFound />);
      expect(screen.getByText("Oops!")).toBeInTheDocument();
    });

    it("should render NotFound component with heading text: The page you were looking for does not exist.", () => {
      render(<NotFound />);
      expect(screen.getByText("The page you were looking for does not exist.")).toBeInTheDocument();
    });

    it("should render NotFound component with heading text: You may have mistyped the address or the page may have moved.", () => {
      render(<NotFound />);
      expect(
        screen.getByText("You may have mistyped the address or the page may have moved.")
      ).toBeInTheDocument();
    });

    it("should render a link with: Take me back to the home page.", () => {
      render(<NotFound />);
      const link = screen.getByRole("link", { name: "Take me back to the home page." });
      expect(link).toBeInTheDocument();
    });

    it("should have proper accessibility attributes", () => {
      render(<NotFound />);
      const link = screen.getByRole("link", { name: "Take me back to the home page." });
      expect(link).toHaveAccessibleName();
    });
  });
});
