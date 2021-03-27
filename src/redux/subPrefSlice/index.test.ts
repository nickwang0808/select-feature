import subPrefSlice, { IFeature, setDeepTreeValue, toggleFeature } from ".";

describe("subPrefSlice", () => {
  // if I import the dummy data the test will fail, but if I copy the whole thing to here then it will pass
  const input = [
    {
      isChecked: false,
      name: "A",
      value: [
        {
          isChecked: false,
          name: "A",
          value: 50,
        },
      ],
    },
  ];
  it("should directly mutate deep trees value", () => {
    expect(setDeepTreeValue(input, "0", true)[0].isChecked).toEqual(true);
    expect(
      (setDeepTreeValue(input, "0.0", true)[0].value as IFeature[])[0].isChecked
    ).toEqual(true);
  });

  it("should check the targeted feature in state on first level", () => {
    const { features } = subPrefSlice(
      undefined,
      toggleFeature({ path: "0", isCheck: true })
    );
    expect(features[0].isChecked).toEqual(true);
  });
  it("should check the targeted feature in state on second level", () => {
    const { features } = subPrefSlice(
      undefined,
      toggleFeature({ path: "0.1", isCheck: true })
    );
    expect((features[0].value as IFeature[])[1].isChecked).toEqual(true);
  });
  it("should uncheck the targeted feature in state on first level", () => {
    const { features } = subPrefSlice(
      undefined,
      toggleFeature({ path: "0", isCheck: false })
    );
    expect(features[0].isChecked).toEqual(false);
  });
  it("should uncheck the targeted feature in state on second level", () => {
    const { features } = subPrefSlice(
      undefined,
      toggleFeature({ path: "0.1", isCheck: false })
    );
    expect((features[0].value as IFeature[])[1].isChecked).toEqual(false);
  });
});
