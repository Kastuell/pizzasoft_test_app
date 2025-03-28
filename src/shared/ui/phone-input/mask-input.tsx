import InputMask from "@mona-health/react-input-mask";
import { Props } from "react-input-mask";
import styles from "./mask-input-styles.module.scss";

interface InputProps extends Props {
  error: string | undefined;
  label: string;
}

export const MaskInput = ({ error, label, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor={props.id}>
          {label}
        </label>
        <InputMask className={styles.input} {...props} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
