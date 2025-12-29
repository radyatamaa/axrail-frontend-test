import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "../Header";

describe("Header", () => {
  it("renders call-to-action buttons and updates on scroll", () => {
    Object.defineProperty(window, "scrollY", { writable: true, configurable: true, value: 0 });

    const { container } = render(<Header />);

    expect(screen.getAllByText("Get started").length).toBeGreaterThanOrEqual(1);

    const header = container.querySelector("header");
    if (!header) {
      throw new Error("Header not rendered");
    }
    expect(header).toHaveClass("bg-white/30");

    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(header).toHaveClass("bg-white/80");
  });
});
