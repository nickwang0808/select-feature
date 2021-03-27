import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import set from "lodash.set";
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

interface ICheckAction {
  path: string;
  isCheck: boolean;
}

const initialState: IState = {
  features: mockFeatures,
  totalPrice: 0,
};

const subPrefSlice = createSlice({
  name: "subPref",
  initialState,
  reducers: {
    toggleFeature: (state, { payload }: PayloadAction<ICheckAction>) => {
      state = {
        ...state,
        features: setDeepTreeValue(
          state.features,
          payload.path,
          payload.isCheck
        ),
      };
    },
  },
});

// this function MUTATE objects,it's only meant to run inside a slice with immer
export function setDeepTreeValue(
  obj: IState["features"],
  path: string,
  value: boolean
) {
  const regex = /\./g;
  const fullPath = path.replace(regex, ".value.").split(".");
  fullPath.push("isChecked");

  return set(obj, fullPath, value);
}

export default subPrefSlice.reducer;
export const { toggleFeature } = subPrefSlice.actions;
