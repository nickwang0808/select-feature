import { combineReducers, configureStore } from "@reduxjs/toolkit";
import subPrefSlice from "./subPrefSlice";

const rootReducer = combineReducers({
  subPref: subPrefSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type IAppState = ReturnType<typeof store.getState>;
