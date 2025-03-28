import { employeesIds, mockEmployees } from "../../mock";
import { selectFiltredSortedEmployees } from "./select-filtred-sorted-employees";

const initialState = {
  currentRole: "",
  currentStatus: false,
  sortDetails: {
    direction: "asc",
    field: "name",
  },
  error: "",
  isPending: false,
};

describe("selectFiltredSortedEmployees тест", () => {
  it("должен вернуть всех employee отсортированных по имени", () => {
    const mockState = {
      employee: {
        ...initialState,
        entities: mockEmployees,
        ids: employeesIds,
      },
    } as RootState;

    const result = selectFiltredSortedEmployees(mockState);

    expect(result).toEqual(mockEmployees);
  });
});
