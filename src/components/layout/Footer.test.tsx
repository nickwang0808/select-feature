import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("Footer should render", () => {
    const comp = render(<Footer total={5} />);

    expect(comp).toMatchSnapshot();
  });
});
