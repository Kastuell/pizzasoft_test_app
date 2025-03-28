export type EmployeeT = {
  id: number;
  name: string;
  isArchive: boolean;
  role: EmployeeRole;
  phone: string;
  birthday: string;
};

export type EmployeeRole = "cook" | "driver" | "waiter";

export type SortDirectionT = "asc" | "desc";
export type FiledNameT = "name" | "birthday";

export type SortDetailsT = {
  direction: SortDirectionT;
  field: FiledNameT;
};
