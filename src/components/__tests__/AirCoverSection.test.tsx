import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AirCoverSection from "../AirCoverSection";

describe("AirCoverSection", () => {
  it("renders the headline and protection highlights", () => {
    render(<AirCoverSection />);

    expect(screen.getByText(/However you host/i)).toBeInTheDocument();
    expect(screen.getByText(/Up to \$3M damage protection/i)).toBeInTheDocument();
    expect(screen.getByText(/Up to \$1M liability insurance/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn about AirCover/i)).toBeInTheDocument();
  });
});
