import { RouterProvider as RP } from "react-router";
import { router } from "../router";

export const RouterProvider = () => {
  return <RP router={router} />;
};
