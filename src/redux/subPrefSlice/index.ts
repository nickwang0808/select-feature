import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockFeatures } from "../../mockData/featuresTree";

export interface IFeature {
  isChecked: boolean;
  /* assuming the name is unique relative to the current branch and level. We should use Guid on prod 
  to ensure uniqueness */
  name: string;
  // recursive interface, the value can be sub-features or just a price
  value: IFeature[] | number;
}

interface IState {
  totalPrice: number;
  features: IFeature[];
}

const initialState: IState = {
  features: mockFeatures,
  totalPrice: 0,
};

const subPrefSlice = createSlice({
  name: "subPref",
  initialState,
  reducers: {
    checkFeature: (state, action: PayloadAction<string>) => {
      // check current feature
      // if feature has sub features, display them
      // if feature has price, add to global price
    },
    uncheckFeature: (state, action: PayloadAction<string>) => {
      // uncheck current feature
      // if feature has sub features, display them
      // if feature has price, add to global price
    },
  },
});

function findFeature(features: string[]) {
  // take a array of feature names and find the feature in the deep nested tree
  // hint use recursion
}

export default subPrefSlice.reducer;
export const {} = subPrefSlice.actions;
