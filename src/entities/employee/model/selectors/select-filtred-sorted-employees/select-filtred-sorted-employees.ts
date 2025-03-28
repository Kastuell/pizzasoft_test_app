import { createSelector } from "@reduxjs/toolkit";
import { convertDateToISO } from "entities/employee/lib/helpers/convert-date-to-iso";
import { selectAllEmployees } from "../select-all-employees/select-all-employees";
import { selectEmployeeState } from "../select-employee-state/select-employee-state";


export const selectFiltredSortedEmployees = createSelector(
  [selectEmployeeState, selectAllEmployees],
  ({ currentRole, currentStatus, sortDetails }, employees) => {
    const filtred_sorted = employees
      .filter((item) => item.role.includes(currentRole))
      .filter((item) =>
        currentStatus ? item.isArchive == currentStatus : true
      );

    if (sortDetails.field == "name") {
      filtred_sorted.sort((a, b) => {
        if (sortDetails.direction == "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    } else {
      filtred_sorted.sort((a, b) => {
        if (sortDetails.direction == "asc") {
          return convertDateToISO(a.birthday).localeCompare(
            convertDateToISO(b.birthday)
          );
        } else {
          return convertDateToISO(b.birthday).localeCompare(
            convertDateToISO(a.birthday)
          );
        }
      });
    }

    return filtred_sorted;
  }
);
