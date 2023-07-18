import { screen, render } from "@testing-library/react";
import Header from "../../src/components/Header/Header";

it("renders the Header component with the correct title", () => {
    render(<Header />);
    const message = screen.queryByText(/Biz Todo/i);
    expect(message).toBeVisible();
});
