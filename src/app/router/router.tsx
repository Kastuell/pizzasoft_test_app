import { EmployeeEditPage } from "pages/employee-edit-page";
import { EmployeeListPage } from "pages/employee-list-page";
import { createBrowserRouter } from "react-router";
import { ErrorBoundary } from "./error-boundary";
import { Layout } from "./layout";

export const router = createBrowserRouter([
  {

    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <EmployeeListPage />,
      },
      {
        path: ":id",
        element: <EmployeeEditPage />,
      },
    ],
  },
]);
