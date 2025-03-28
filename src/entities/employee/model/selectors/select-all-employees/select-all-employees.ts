import { employeeAd } from "../../slice";

export const selectAllEmployees = employeeAd.getSelectors(
  (state: RootState) => state.employee
).selectAll;
