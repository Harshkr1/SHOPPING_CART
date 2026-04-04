import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";

/**
 * Wrapper to provide Router context
 * (required because we are using <Link />)
 */
const renderWithRouter = (ui) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe("Home Component", () => {
  it("renders main heading", () => {
    renderWithRouter(<Home />);

    expect(
      screen.getByText("Welcome to the Online Store")
    ).toBeInTheDocument();
  });

  it("renders subtitle text", () => {
    renderWithRouter(<Home />);

    expect(
      screen.getByText(
        "Discover amazing products at unbeatable prices. Shop smart, live better."
      )
    ).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    renderWithRouter(<Home />);

    expect(screen.getByText("Start Shopping")).toBeInTheDocument();
    expect(screen.getByText("View Cart")).toBeInTheDocument();
  });

  it("links have correct routes", () => {
    renderWithRouter(<Home />);

    const shopLink = screen.getByText("Start Shopping");
    const cartLink = screen.getByText("View Cart");

    expect(shopLink.getAttribute("href")).toBe("/shop");
    expect(cartLink.getAttribute("href")).toBe("/cart");
  });
});