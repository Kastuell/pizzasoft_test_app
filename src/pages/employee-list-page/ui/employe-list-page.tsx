import {
  EmployeeCard,
  getEmployeesThunk,
  selectFiltredSortedEmployees,
} from "entities/employee";
import { AddNewEmployee } from "features/add-new-employee";
import { EmployeeListFilterSorting } from "features/employee-list-filter-sorting";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/store/hooks";
import styles from "./employee-list-page.module.scss";

export const EmployeeListPage = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(selectFiltredSortedEmployees);

  useEffect(() => {
    dispatch(getEmployeesThunk());
  }, []);

  return (
    <div className={styles.container}>
      <EmployeeListFilterSorting />
      <div className={styles.employee_list}>
        {data?.map((item) => (
          <EmployeeCard data={item} key={item.id} />
        ))}
        <AddNewEmployee />
      </div>
    </div>
  );
};
