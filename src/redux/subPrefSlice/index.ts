import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockFeatures } from "../../mockData/FeaturesTree";

export interface Feature {
  isChecked: boolean;
  // assuming the name is unique, in production we should use some kind of guid for it.
  name: string;
  // recursive interface, the value can be sub-features or just a price
  value: Feature[] | number;
}

interface IState {
  features: Feature[];
}

const initialState: IState = {
  features: mockFeatures,
};

const subPrefSlice = createSlice({
  name: "subPref",
  initialState,
  reducers: {
    toggleFeature: (state, action: PayloadAction<Feature["name"]>) => {
      // set specified
    },
  },
});
