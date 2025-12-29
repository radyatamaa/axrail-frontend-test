import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HeroEarningsSection from "../HeroEarningsSection";

vi.mock("react-leaflet", () => ({
  MapContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="map">{children}</div>
  ),
  TileLayer: () => <div data-testid="tile-layer" />,
  Marker: () => <div data-testid="marker" />,
}));

vi.mock("leaflet", () => ({
  __esModule: true,
  default: { divIcon: vi.fn(() => ({})) },
  divIcon: vi.fn(() => ({})),
}));

describe("HeroEarningsSection", () => {
  it("shows earnings estimate and updates when nights change", () => {
    render(<HeroEarningsSection />);

    expect(screen.getByText(/Your home could/i)).toBeInTheDocument();
    expect(screen.getByTestId("map")).toBeInTheDocument();
    expect(screen.getByText(/7 nights/i)).toBeInTheDocument();

    const slider = screen.getByRole("slider") as HTMLInputElement;
    fireEvent.change(slider, { target: { value: "10" } });

    expect(screen.getByText(/10 nights/i)).toBeInTheDocument();
    expect(screen.getByText((text) => text.includes("8.032.420"))).toBeInTheDocument();
  });
});
