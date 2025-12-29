import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import EasyListSection from "../EasyListSection";
import useIsMobile from "../../hooks/useIsMobile";

vi.mock("../../hooks/useIsMobile");

const mockedUseIsMobile = vi.mocked(useIsMobile);

describe("EasyListSection", () => {
  it("renders the listing steps", () => {
    mockedUseIsMobile.mockReturnValue(false);

    render(<EasyListSection />);

    expect(screen.getByText(/easy to list your/i)).toBeInTheDocument();
    expect(screen.getByText(/Create a listing/i)).toBeInTheDocument();
    expect(screen.getByText(/Go at your own pace/i)).toBeInTheDocument();
    expect(screen.getByText(/Get 1:1 support/i)).toBeInTheDocument();

    const image = screen.getByAltText("Easy to list");
    expect(image).toHaveClass("w-full");
  });

  it("adjusts layout for mobile screens", () => {
    mockedUseIsMobile.mockReturnValue(true);

    render(<EasyListSection />);
    const image = screen.getByAltText("Easy to list");

    expect(image).toHaveClass("w-[92%]");
  });
});
