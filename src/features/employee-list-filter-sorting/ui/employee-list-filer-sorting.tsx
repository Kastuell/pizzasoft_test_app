import {
  changeCurrentRole,
  changeCurrentStatus,
  changeSortDetails,
  FiledNameT,
  selectEmployeeState,
} from "entities/employee";
import { useAppDispatch, useAppSelector } from "shared/store/hooks";
import { Button, Input, Option, Select } from "shared/ui";
import styles from "./employee-list-filter-sorting.module.scss";

export const EmployeeListFilterSorting = () => {
  const dispatch = useAppDispatch();

  const { currentRole, currentStatus } = useAppSelector((state: RootState) =>
    selectEmployeeState(state)
  );

  const handleChangeRole = (value: string) => {
    dispatch(changeCurrentRole(value));
  };

  const handleChangeStatus = (value: boolean) => {
    dispatch(changeCurrentStatus(value));
  };

  const handleChangeSort = (value: FiledNameT) => {
    dispatch(changeSortDetails(value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter_wrapper}>
        <Select
          id="role"
          label="Роль"
          defaultValue={currentRole}
          onChange={(e) => handleChangeRole(e.target.value)}
        >
          <Option value={""}>Все</Option>
          <Option value={"waiter"}>Официант</Option>
          <Option value={"cook"}>Повар</Option>
          <Option value={"driver"}>Водитель</Option>
        </Select>
        <Input
          type="checkbox"
          defaultChecked={currentStatus}
          onChange={(e) => handleChangeStatus(e.target.checked)}
          id="isArchive"
          label="В архиве"
        />
      </div>

      <div className={styles.buttons_wrapper}>
        <Button onClick={() => handleChangeSort("name")}>
          Сортировать по имени
        </Button>
        <Button onClick={() => handleChangeSort("birthday")}>
          Сортировать по дате рождения
        </Button>
      </div>
    </div>
  );
};
