import styles from "./button-styles.module.scss";

interface Ibutton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: Ibutton) => {
  return <button className={styles.button} {...props}></button>;
};
