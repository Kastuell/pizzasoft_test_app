import { forwardRef } from "react";
import styles from "./select-styles.module.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string | undefined;
  label: string;
}

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, label, children, ...props }: SelectProps, ref) => {
    return (
      <div className={styles.container}>
        <div className={styles.select_wrapper}>
          <label className={styles.label} htmlFor={props.id}>
            {label}
          </label>
          <select ref={ref} className={styles.select} {...props}>
            {children}
          </select>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

export const Option = forwardRef<HTMLOptionElement, OptionProps>(
  (props: OptionProps, ref) => {
    return <option ref={ref} className={styles.option} {...props}></option>;
  }
);
