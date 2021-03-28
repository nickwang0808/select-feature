import { render } from "@testing-library/react";
import Content from "./Content";

describe("Content", () => {
  it("Content should render", () => {
    const comp = render(
      <Content>
        <h1>Hello this is a test</h1>
      </Content>
    );

    expect(comp).toMatchSnapshot();
  });
});
