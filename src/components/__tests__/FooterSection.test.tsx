import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FooterSection from "../FooterSection";

describe("FooterSection", () => {
  it("renders footer columns and links", () => {
    render(<FooterSection />);

    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Hosting")).toBeInTheDocument();
    expect(screen.getByText("Airbnb")).toBeInTheDocument();
    expect(screen.getByText("Help Center")).toBeInTheDocument();
    expect(screen.getByText("Find a co-host")).toBeInTheDocument();
  });
});
