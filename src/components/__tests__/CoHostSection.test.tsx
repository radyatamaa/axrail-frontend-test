import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CoHostSection from "../CoHostSection";

describe("CoHostSection", () => {
  it("shows all co-hosts and action button", () => {
    render(<CoHostSection />);

    ["Jorge", "Gabrielle", "Mariam", "Elizabeth", "Anthony"].forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });

    expect(screen.getByText(/A co-host can help/i)).toBeInTheDocument();
    expect(screen.getByText("Find a co-host")).toBeInTheDocument();
  });
});
