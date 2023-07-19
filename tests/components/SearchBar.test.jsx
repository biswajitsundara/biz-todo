import { render, screen } from "@testing-library/react";
import SearchBar from "../../src/components/Search/SearchBar";

describe("Renders the Search Bar component", () => {
  it("Renders the input and button elements", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Search");
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByText("New");
    expect(buttonElement).toBeInTheDocument();
  });
});
