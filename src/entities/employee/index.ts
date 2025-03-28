export {
    changeCurrentRole,
    changeCurrentStatus,
    changeSortDetails,
    employeeSlice
} from "./model/slice";
export { type FiledNameT } from "./types/employee.types";
export { EmployeeCard } from "./ui/employee-card";

export { getEmployeesThunk } from "./model/get-employees-thunk";
export { selectEmployeeById } from "./model/selectors/select-employee-by-id/select-employee-by-id";
export { selectEmployeeState } from "./model/selectors/select-employee-state/select-employee-state";
export { selectFiltredSortedEmployees } from "./model/selectors/select-filtred-sorted-employees/select-filtred-sorted-employees";
// export {} from "./model/selectors/";
