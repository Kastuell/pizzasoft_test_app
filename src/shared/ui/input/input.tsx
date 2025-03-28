import styles from "./input-styles.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  label: string;
}

export const Input = ({ error, label, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor={props.id}>
          {label}
        </label>
        <input className={styles.input} {...props} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
