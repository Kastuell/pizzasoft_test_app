import { isRouteErrorResponse } from "react-router";
import styles from "./error-boundary.module.scss";

export const ErrorBoundary = ({ error }: any) => {
  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.error}>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className={styles.error}>
        <h1>Ошибка</h1>
        <p>{error.message}</p>
        <p>Путь:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1 className={styles.error}>Что-то пошло не так</h1>;
  }
};
