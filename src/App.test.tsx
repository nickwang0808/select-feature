import { render } from "@testing-library/react";
import App from "./App";

it("App to render", () => {
  expect(render(<App />)).toBeDefined();
});
