import { render, screen } from "@testing-library/react";
import Error from "@/app/error";

describe("Error component", () => {
  describe("Rendering", () => {
    it("should render Error component with error message: Oops, something went wrong...", () => {
      render(<Error />);
      expect(screen.getByText("Oops, something went wrong...")).toBeInTheDocument();
    });
  });
});
