const ROLE_MAP = {
  waiter: "Официант",
  cook: "Повар",
  driver: "Водитель",
};

export const convertRole = (str: string) =>
  ROLE_MAP[str as "waiter" | "cook" | "driver"];
