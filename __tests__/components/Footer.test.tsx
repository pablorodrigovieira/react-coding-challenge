import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";
import { FOOTER_NAVIGATION_ITEMS, STORE_IMAGES } from "@/constants/frontend";

describe("Footer component", () => {
  describe("Rendering", () => {
    it("should render the footer navigation links correctly", () => {
      render(<Footer />);
      const links = screen.getAllByRole("link");
      FOOTER_NAVIGATION_ITEMS.forEach((item, index) => {
        expect(links[index]).toHaveTextContent(item.label);
        expect(links[index]).toHaveAttribute("href", item.path);
      });
    });

    it("should render copyright", () => {
      render(<Footer />);
      const copyrightText = screen.getByText(/DEMO Streaming. All Rights Reserved./);
      expect(copyrightText).toBeInTheDocument();
    });

    it("should render social images correctly", () => {
      render(<Footer />);
      const facebookImg = screen.getByAltText(/Facebook/);
      expect(facebookImg).toBeInTheDocument();
      const instagramImg = screen.getByAltText(/Instagram/);
      expect(instagramImg).toBeInTheDocument();
      const twitterImg = screen.getByAltText(/Twitter/);
      expect(twitterImg).toBeInTheDocument();
    });

    it("should render app store links correctly", () => {
      render(<Footer />);
      const storeLinks = screen.getAllByRole("link", { name: /Store/ });

      STORE_IMAGES.forEach((item, index) => {
        expect(storeLinks[index]).toHaveAttribute("href", item.href);
        expect(screen.getByAltText(item.alt)).toBeInTheDocument();
      });
    });
  });
});
