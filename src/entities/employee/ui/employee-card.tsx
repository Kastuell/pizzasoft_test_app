import { useNavigate } from "react-router";
import { convertRole } from "../lib/helpers/convert-role";
import styles from "./employee-card.module.scss";

interface IEmployeeCard {
  data: {
    id: number;
    name: string;
    isArchive: boolean;
    role: string;
    phone: string;
    birthday: string;
  };
}

export const EmployeeCard = (props: IEmployeeCard) => {
  const { birthday, isArchive, name, phone, role, id } = props.data;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${id}`)} className={styles.card}>
      <div>{name}</div>
      <div>{isArchive}</div>
      <div>{convertRole(role)}</div>
      <div>{phone}</div>
      <div>{birthday}</div>
    </div>
  );
};
