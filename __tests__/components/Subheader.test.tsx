import { render, screen } from "@testing-library/react";
import Subheader from "@/components/Subheader";

describe("Subheader component", () => {
  describe("Rendering", () => {
    it("should render Subheader component with h1 element and text: Default Title", () => {
      render(
        <Subheader />
      );

      const title = screen.queryByRole('heading', { level: 1 });

      expect(title).toHaveTextContent("Default Title");
    });
  });
});
