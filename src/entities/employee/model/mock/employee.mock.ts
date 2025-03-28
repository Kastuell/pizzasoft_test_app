import { EmployeeT } from "entities/employee/types/employee.types";


export const mockEmployees: EmployeeT[] = [
  {
    id: 1,
    birthday: "12.12.1212",
    isArchive: false,
    name: "Артём Иванов",
    phone: "+7 (883) 444-552",
    role: "cook",
  },
  {
    id: 2,
    birthday: "13.12.1313",
    isArchive: false,
    name: "Валентин Иванов",
    phone: "+7 (883) 333-2222",
    role: "cook",
  },
  {
    id: 3,
    birthday: "22.33.3333",
    isArchive: true,
    name: "Игорь Иванов",
    phone: "+7 (883) 508-1111",
    role: "waiter",
  },
  {
    id: 4,
    birthday: "16.06.4444",
    isArchive: true,
    name: "Пётр Иванов",
    phone: "+7 (883) 508-2222",
    role: "driver",
  },
];

export const employeesIds = Object.keys(mockEmployees).map(Number);
