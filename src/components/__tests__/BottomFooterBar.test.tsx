import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import BottomFooterBar from "../BottomFooterBar";
import useIsMobile from "../../hooks/useIsMobile";

vi.mock("../../hooks/useIsMobile");

const mockedUseIsMobile = vi.mocked(useIsMobile);

describe("BottomFooterBar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the mobile footer when on a small screen", () => {
    mockedUseIsMobile.mockReturnValue(true);

    render(<BottomFooterBar />);

    expect(screen.getByText("English (US)")).toBeInTheDocument();
    expect(screen.getByText(/© 2025 Airbnb, Inc./)).toBeInTheDocument();
    expect(screen.getByAltText("Facebook")).toBeInTheDocument();
    expect(screen.getByText("Privacy")).toBeInTheDocument();
  });

  it("renders the desktop footer when not on mobile", () => {
    mockedUseIsMobile.mockReturnValue(false);

    render(<BottomFooterBar />);

    expect(screen.getByText("Your Privacy Choices")).toBeInTheDocument();
    expect(screen.getByText("Rp IDR")).toBeInTheDocument();
    expect(screen.getByText(/© 2025 Airbnb, Inc./)).toBeInTheDocument();
  });
});
