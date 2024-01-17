import { render, screen } from "@testing-library/react";
import PopularList from "@/components/PopularList";

describe("PopularList component", () => {
  describe("Rendering", () => {
    it("should render PopularList component with li element and the text: Testing", () => {
      render(
        <PopularList>
          <li>Testing</li>
        </PopularList>
      );
      expect(screen.getByRole("list")).toHaveTextContent("Testing");
    });
  });
});
