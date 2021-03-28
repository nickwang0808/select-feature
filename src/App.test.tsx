import { render } from "@testing-library/react";
import App from "./App";

it("App should render", () => {
  expect(render(<App />)).toBeDefined();
});
