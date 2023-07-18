import { render } from "@testing-library/react";
import App from "../src/App";

it("Renders the App component with all necessary sections", () => {
  
  // This way also we can access the app
  // const app = render(<App />);
  // const header = app.getByTestId("header");
  // expect(header).toBeInTheDocument();

  const { getByTestId } = render(<App />);
  const headerComponent = getByTestId("header");
  expect(headerComponent).toBeInTheDocument();

  const sideNavComponent = getByTestId("sidenav");
  expect(sideNavComponent).toBeInTheDocument();

  const mainContentComponent = getByTestId("maincontent");
  expect(mainContentComponent).toBeInTheDocument();

  const footerComponent = getByTestId("footer");
  expect(footerComponent).toBeInTheDocument();

});
