import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HostingToolsSection from "../HostingToolsSection";

describe("HostingToolsSection", () => {
  it("renders tool cards and mobile app button", () => {
    render(<HostingToolsSection />);

    expect(screen.getByText(/All the tools you need/i)).toBeInTheDocument();
    expect(screen.getByText("Listing editor")).toBeInTheDocument();
    expect(screen.getByText("Calendar")).toBeInTheDocument();
    expect(screen.getByText("Messages")).toBeInTheDocument();
    expect(screen.getByText("Download the Airbnb app")).toBeInTheDocument();
  });
});
