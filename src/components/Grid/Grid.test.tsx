import { render } from "@testing-library/react";
import Grid from "./Grid";

it("renders correctly", () => {
  const element = render(
    <Grid>{[<span key="1">hello</span>, <span key="2">world</span>]}</Grid>
  );
  expect(element.container).toMatchSnapshot();
});
