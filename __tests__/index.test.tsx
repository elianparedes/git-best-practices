import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
    it("This header must have no bugs!", () => {
        render(<Home />);

        const headings = screen.getAllByRole("heading");
        const emojiHeading = headings[1]; // Get the second heading which contains the emojis
        const headingText = emojiHeading.textContent || "";

        expect(headingText).not.toContain("🐛");
    });
});
