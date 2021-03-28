import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("Header should render", () => {
    const comp = render(<Header />);

    expect(comp).toMatchSnapshot();
  });
});
