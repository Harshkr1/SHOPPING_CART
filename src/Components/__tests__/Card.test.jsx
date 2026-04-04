import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../Card";
import { describe, it, expect, vi } from "vitest";

/**
 * Mock product data
 */
const mockProduct = {
  id: 1,
  title: "Test Product",
  description: "Test Description",
  price: 100,
  discountPercentage: 10,
  thumbnail: "test.jpg",
};

describe("Card Component", () => {
  it("renders product details correctly", () => {
    render(
      <Card
        product={mockProduct}
        setCartProduct={vi.fn()}
        setCartCount={vi.fn()}
        source={2}
        cartProduct={{}}
      />
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("₹100")).toBeInTheDocument();
    expect(screen.getByText("Discount: 10%")).toBeInTheDocument();
  });

  it("increments count when + button is clicked", () => {
    const setCartProduct = vi.fn();
    const setCartCount = vi.fn();

    render(
      <Card
        product={mockProduct}
        setCartProduct={setCartProduct}
        setCartCount={setCartCount}
        source={2}
        cartProduct={{}}
      />
    );

    const plusBtn = screen.getByText("+");

    fireEvent.click(plusBtn);

    expect(setCartProduct).toHaveBeenCalled();
    expect(setCartCount).toHaveBeenCalled();
  });

  it("decrements count when - button is clicked", () => {
    const setCartProduct = vi.fn();
    const setCartCount = vi.fn();

    render(
      <Card
        product={mockProduct}
        setCartProduct={setCartProduct}
        setCartCount={setCartCount}
        source={2}
        cartProduct={{}}
      />
    );

    const minusBtn = screen.getByText("-");

    fireEvent.click(minusBtn);

    expect(setCartProduct).toHaveBeenCalled();
    expect(setCartCount).toHaveBeenCalled();
  });

  it("renders cart quantity correctly when source !== 2", () => {
    const cartProduct = {
      1: {
        product: mockProduct,
        quantity: 3,
      },
    };

    render(
      <Card
        product={mockProduct}
        setCartProduct={vi.fn()}
        setCartCount={vi.fn()}
        source={1}
        cartProduct={cartProduct}
      />
    );

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Remove from Cart")).toBeInTheDocument();
  });
});