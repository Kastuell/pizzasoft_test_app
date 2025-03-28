import { EmployeeT } from "../types/employee.types";

const API_URL =
  import.meta.env.PROD == true
    ? "https://pizzasoft-test-f0ecjrsz9-134.vercel.app/employees.json"
    : "http://localhost:5173/public/employees.json";

export const fetchEmployees = async () => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Ошибка получения данных!");
  }

  return (await res.json()) as EmployeeT[];
};
