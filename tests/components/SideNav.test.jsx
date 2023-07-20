import { render } from "@testing-library/react";
import SideNav from "../../src/components/Sidenav/SideNav";

it("Renders the SideNav component with items", () => {
  const { getByTestId } = render(<SideNav />);
  const sidenavElement = getByTestId("sidenav");
  expect(sidenavElement).toBeInTheDocument();
});
