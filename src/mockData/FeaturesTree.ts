import { Feature } from "../redux/subPrefSlice";

export const mockFeatures: Feature[] = [
  {
    isChecked: false,
    name: "Feature A",
    value: [
      {
        isChecked: false,
        name: "Feature A-1",
        value: [
          {
            isChecked: false,
            name: "Feature A-1-1",
            value: 50,
          },
        ],
      },
      {
        isChecked: false,
        name: "Feature A-2",
        value: [
          {
            isChecked: false,
            name: "Feature A-2-1",
            value: 50,
          },
          {
            isChecked: false,
            name: "Feature A-2-1",
            value: 20,
          },
        ],
      },
      {
        isChecked: false,
        name: "Feature A-3",
        value: [
          {
            isChecked: false,
            name: "Feature A-3-1",
            value: 50,
          },
        ],
      },
    ],
  },
  {
    isChecked: false,
    name: "Sub-feature B",
    value: 50,
  },
];
