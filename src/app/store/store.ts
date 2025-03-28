import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "../../entities/employee";

const rootReducer = combineSlices(employeeSlice);

export const store = configureStore({
  reducer: rootReducer,
});

declare global {
  type AppStore = typeof store;
  type RootState = ReturnType<AppStore["getState"]>;
  type AppDispatch = AppStore["dispatch"];
}
