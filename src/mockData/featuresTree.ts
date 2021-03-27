import { IFeature } from "../redux/subPrefSlice";

export const mockFeatures: IFeature[] = [
  {
    isChecked: false,
    name: "A",
    value: [
      {
        isChecked: false,
        name: "1",
        value: [
          {
            isChecked: false,
            name: "1",
            value: 50,
          },
        ],
      },
      {
        isChecked: false,
        name: "2",
        value: [
          {
            isChecked: false,
            name: "1",
            value: 50,
          },
          {
            isChecked: false,
            name: "1",
            value: 20,
          },
        ],
      },
      {
        isChecked: false,
        name: "3",
        value: [
          {
            isChecked: false,
            name: "1",
            value: 50,
          },
        ],
      },
    ],
  },
  {
    isChecked: false,
    name: "B",
    value: 50,
  },
];
