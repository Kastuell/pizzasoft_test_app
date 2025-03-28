import { selectEmployeeById } from "entities/employee";
import { updateEmployee } from "entities/employee/model/slice";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "shared/store/hooks";
import { Button, Input, MaskInput, Option, Select } from "shared/ui";
import { validate } from "../lib/validate";
import { FormData } from "../types/schema";
import styles from "./employee-edit-page.module.scss";

const initialFormState = {
  name: "",
  isArchive: "",
  role: "",
  phone: "",
  birthday: "",
};

export const EmployeeEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const employeeData = useAppSelector((state) =>
    selectEmployeeById(state, Number(id))
  );

  const [userFormData, setFormData] = useState<Partial<FormData>>({});
  const [showErrors, setShowErrors] = useState(false);

  const formData = {
    ...initialFormState,
    ...employeeData,
    ...userFormData,
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formData);
    if (errors) {
      setShowErrors(true);
      return;
    }
    dispatch(updateEmployee(formData));

    navigate("/");
  };

  const errors = showErrors ? validate(formData) : undefined;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link
          to={{
            pathname: "/",
          }}
        >
          Назад
        </Link>
        <form onSubmit={handleSubmit}>
          <Input
            value={formData.name}
            onChange={(e) =>
              setFormData((item) => ({ ...item, name: e.target.value }))
            }
            id="name"
            label="Имя"
            error={errors?.name?._errors.join(", ")}
            required
          />
          <Select
            id="role"
            error={errors?.role?._errors.join(", ")}
            label="Роль"
            value={formData.role}
            onChange={(e) =>
              setFormData((item) => ({ ...item, role: e.target.value }))
            }
            required
          >
            <Option value={"waiter"}>Официант</Option>
            <Option value={"cook"}>Повар</Option>
            <Option value={"driver"}>Водитель</Option>
          </Select>
          <MaskInput
            id="phone"
            error={errors?.phone?._errors.join(", ")}
            label="Телефон"
            mask={"+7 (999) 999-9999"}
            value={formData.phone}
            onChange={(e) => {
              console.log(e.target.value);
              setFormData((item) => ({ ...item, phone: e.target.value }));
            }}
            required
          />
          <MaskInput
            id="birthday"
            error={errors?.birthday?._errors.join(", ")}
            label="Дата рождения"
            mask={"99.99.9999"}
            value={formData.birthday}
            onChange={(e) =>
              setFormData((item) => ({ ...item, birthday: e.target.value }))
            }
            required
          />
          <Input
            checked={formData.isArchive}
            type="checkbox"
            onChange={(e) =>
              setFormData((item) => ({ ...item, isArchive: e.target.checked }))
            }
            id="isArchive"
            label="В архиве"
            error={errors?.isArchive?._errors.join(", ")}
          />

          <Button type="submit">Подтвердить</Button>
        </form>
      </div>
    </div>
  );
};
