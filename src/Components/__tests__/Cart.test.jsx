import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Cart from "../Cart";

// Mock useOutletContext
vi.mock("react-router-dom", () => ({
  useOutletContext: vi.fn(),
}));

import { useOutletContext } from "react-router-dom";

/**
 * Mock product data
 */
const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 100,
};

/**
 * Helper function to render Cart with mock context
 */
const renderCart = (contextValue) => {
  useOutletContext.mockReturnValue(contextValue);
  return render(<Cart />);
};

describe("Cart Component", () => {
  it("shows empty cart message when cartTotal is 0", () => {
    renderCart({
      cartProduct: {},
      cartTotal: 0,
      setCartProduct: vi.fn(),
      setCartTotal: vi.fn(),
      setCartCount: vi.fn(),
    });

    expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
  });

  it("renders cart items when cart has products", () => {
    const cartProduct = {
      1: {
        product: mockProduct,
        quantity: 2,
      },
    };

    renderCart({
      cartProduct,
      cartTotal: 200,
      setCartProduct: vi.fn(),
      setCartTotal: vi.fn(),
      setCartCount: vi.fn(),
    });

    expect(screen.getByText("Your Cart :")).toBeInTheDocument();
    expect(screen.getByText("Your Total: 200")).toBeInTheDocument();
  });

  it("calls setCartTotal with correct value", () => {
    const setCartTotal = vi.fn();

    const cartProduct = {
      1: {
        product: mockProduct,
        quantity: 3,
      },
    };

    renderCart({
      cartProduct,
      cartTotal: 0,
      setCartProduct: vi.fn(),
      setCartTotal,
      setCartCount: vi.fn(),
    });

    // total = 100 * 3 = 300
    expect(setCartTotal).toHaveBeenCalledWith(300);
  });

  it("filters out invalid cart items safely", () => {
    const cartProduct = {
      1: {
        product: mockProduct,
        quantity: 2,
      },
      2: null, // invalid item
    };

    renderCart({
      cartProduct,
      cartTotal: 200,
      setCartProduct: vi.fn(),
      setCartTotal: vi.fn(),
      setCartCount: vi.fn(),
    });

    expect(screen.getByText("Your Cart :")).toBeInTheDocument();
  });
});