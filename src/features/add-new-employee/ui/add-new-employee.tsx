import { addEmployee } from "entities/employee/model/slice";
import { EmployeeT } from "entities/employee/types/employee.types";
import { useAppDispatch } from "shared/store/hooks";
import styles from "./add-new-employee.module.scss";

export const AddNewEmployee = () => {
  const dispatch = useAppDispatch();

  const mock_employee: Omit<EmployeeT, "id"> = {
    birthday: "01.01.2024",
    isArchive: false,
    name: "Test_name",
    phone: "+7 (111) 111-1111",
    role: "cook",
  };

  const handleAddEmployee = () => {
    dispatch(addEmployee(mock_employee));
  };

  return (
    <div onClick={handleAddEmployee} className={styles.container}>
      +
    </div>
  );
};
