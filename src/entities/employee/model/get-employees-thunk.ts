import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEmployees } from "../api/employees.api";

export const getEmployeesThunk = createAsyncThunk(
  "employees",
  async (_, payload) => {
    try {
      const data = await fetchEmployees();

      return data;
    } catch (e) {
      console.log(e);

      if (e instanceof Error) return payload.rejectWithValue(e.message);
    }
  }
);
