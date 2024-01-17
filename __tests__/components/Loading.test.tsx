import { render, screen } from "@testing-library/react";
import Loading from "@/app/loading";
describe("Loading component", () => {
  describe("Rendering", () => {
    it("should render Loading component with error message: Loading...", () => {
      render(<Loading />);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });
});
