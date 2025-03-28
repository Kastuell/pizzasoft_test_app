import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { EmployeeT, FiledNameT, SortDetailsT } from "../types/employee.types";
import { getEmployeesThunk } from "./get-employees-thunk";

interface EmployeeState {
  currentRole: string;
  currentStatus: boolean;
  sortDetails: SortDetailsT;
  isPending: boolean;
  error: string | null;
}

export const employeeAd = createEntityAdapter<EmployeeT>();

const initialState = employeeAd.getInitialState<EmployeeState>({
  currentRole: "",
  currentStatus: false,
  sortDetails: {
    direction: "asc",
    field: "name",
  },
  isPending: false,
  error: null,
});

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: {
      reducer: (state, action: PayloadAction<EmployeeT>) => {
        employeeAd.addOne(state, action.payload);
      },
      prepare: (item: Omit<EmployeeT, "id">) => ({
        payload: { ...item, id: Date.now() },
      }),
    },
    updateEmployee(state, action: PayloadAction<EmployeeT>) {
      employeeAd.upsertOne(state, action.payload);
    },
    changeSortDetails: (state, action: PayloadAction<FiledNameT>) => {
      state.sortDetails = {
        direction: state.sortDetails.direction == "asc" ? "desc" : "asc",
        field: action.payload,
      };
    },
    changeCurrentRole: (state, action: PayloadAction<string>) => {
      state.currentRole = action.payload;
    },
    changeCurrentStatus: (state, action: PayloadAction<boolean>) => {
      state.currentStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeesThunk.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getEmployeesThunk.fulfilled, (state, action) => {
        state.isPending = false;
        employeeAd.addMany(state, action);
      })
      .addCase(getEmployeesThunk.rejected, (state) => {
        state.isPending = false;
        state.error = "Ошибка получения данных!";
      });
  },
});

export const {
  changeCurrentRole,
  changeCurrentStatus,
  changeSortDetails,
  addEmployee,
  updateEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;
