import { render, screen } from "@testing-library/react";
import ContentWrapper from "@/components/ContentWrapper";

describe("Content Wrapper component", () => {
  describe("Rendering", () => {
    it("should render ContentWrapper component with p text Test children", () => {
      render(
        <ContentWrapper>
          <p>Test children</p>
        </ContentWrapper>
      );
      expect(screen.getByText("Test children")).toBeInTheDocument();
    });
  });
});
