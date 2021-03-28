import { render } from "@testing-library/react";
import { nanoid } from "nanoid/non-secure";
import { Checkbox } from "pretty-checkbox-react";
import { IFeature, mockFeatures } from "../../mockData/featuresTree";
import Feature from "./Feature";

jest.mock("nanoid/non-secure");
(nanoid as jest.Mock).mockImplementation(() => "123");

describe("Checkbox tests", () => {
  it("Checkbox should work itself", () => {
    const { container } = render(<Checkbox />);
    expect(container).toMatchSnapshot();
  });
});

describe("Feature", () => {
  const dummyProps = {
    parentNames: "",
    setParentTotal: () => {},
    checkedChildren: [],
    setCheckedChildren: () => {},
  };

  it("should render one feature", () => {
    const feature: IFeature = {
      name: "A",
      price: 50,
      children: null,
    };

    const comp = render(<Feature feature={feature} key="1" {...dummyProps} />);

    expect(comp).toMatchSnapshot();
  });
  it("should render complete complete tree", () => {
    const comp = render(
      <>
        {mockFeatures.map((feature, index) => (
          <Feature feature={feature} key={index} {...dummyProps} />
        ))}
      </>
    );

    expect(comp).toMatchSnapshot();
  });
});
