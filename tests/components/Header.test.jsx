import { screen, render } from "@testing-library/react";
import Header from "../../src/components/Header/Header";

it("Renders the Header component with the correct title", () => {
  render(<Header />);
  const headingText = screen.queryByText(/Biz Todo/i);
  expect(headingText).toBeVisible();

  const searchbarComponent = screen.getByTestId("searchbar");
  expect(searchbarComponent).toBeVisible();
});
