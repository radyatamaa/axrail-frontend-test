import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RentalInfoSection from "../RentalInfoSection";

describe("RentalInfoSection", () => {
  it("describes hosting for renters", () => {
    render(<RentalInfoSection />);

    expect(screen.getByText(/Hosting isn’t only for homeowners/i)).toBeInTheDocument();
    expect(screen.getByText(/Airbnb-friendly apartments/i)).toBeInTheDocument();
    expect(screen.getByText("Learn more")).toBeInTheDocument();
  });
});
