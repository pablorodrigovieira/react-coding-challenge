import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header component", () => {
  describe("Rendering", () => {
    it("should render Header component with logo DEMO Streaming", () => {
      render(<Header />);
      expect(screen.getByText("DEMO Streaming")).toBeInTheDocument();
    });

    it("should render Log in link", () => {
      render(<Header />);
      const logoLink = screen.getByRole("link", { name: "Log in" });

      expect(logoLink).toBeInTheDocument();
    });

    it("should render Start your free trial button", () => {
      render(<Header />);
      const freeTrial = screen.getByRole("link", { name: "Start your free trial" });

      expect(freeTrial).toBeInTheDocument();
    });

    it('should render Start your free trial button "grey-button" class', () => {
      render(<Header />);
      const freeTrial = screen.getByRole("link", { name: "Start your free trial" });

      expect(freeTrial).toHaveClass("grey-button");
    });

    it("should have proper accessibility attributes", () => {
      render(<Header />);
      const logoLink = screen.getByText("DEMO Streaming");
      const loginLink = screen.getByRole("link", { name: "Log in" });
      const freeTrial = screen.getByRole("link", { name: "Start your free trial" });

      expect(logoLink).toHaveAccessibleName();
      expect(loginLink).toHaveAccessibleName();
      expect(freeTrial).toHaveAccessibleName();
    });
  });
});
