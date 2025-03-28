import { Outlet } from "react-router";
import styles from "./layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};
