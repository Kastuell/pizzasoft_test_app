import { EmployeeT } from "../types/employee.types";

export const fetchEmployees = async () => {
  const res = await fetch("http://localhost:5173/public/employees.json");

  if (!res.ok) {
    throw new Error("Ошибка получения данных!");
  }

  return (await res.json()) as EmployeeT[];
};
