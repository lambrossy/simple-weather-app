import { render } from "@testing-library/react";
import GlassPane from "./GlassPane";

it("renders correctly", () => {
  const element = render(<GlassPane>Children</GlassPane>);
  expect(element.container).toMatchSnapshot();
});
