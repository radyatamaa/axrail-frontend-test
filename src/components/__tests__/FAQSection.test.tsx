import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FAQSection from "../FAQSection";

describe("FAQSection", () => {
  it("toggles an FAQ item open and closed", () => {
    render(<FAQSection />);

    const questionButton = screen.getByRole("button", { name: /Top questions/i });
    const contentWrapper = questionButton.nextElementSibling as HTMLElement | null;

    expect(contentWrapper?.style.maxHeight).toBe("0px");

    fireEvent.click(questionButton);
    expect(contentWrapper?.style.maxHeight).toBe("700px");
    expect(screen.getByText(/Is my place right for Airbnb/i)).toBeInTheDocument();

    fireEvent.click(questionButton);
    expect(contentWrapper?.style.maxHeight).toBe("0px");
  });
});
