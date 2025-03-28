import { employeeAd } from "../../slice";

export const selectEmployeeById = employeeAd.getSelectors(
  (state: RootState) => state.employee
).selectById;
