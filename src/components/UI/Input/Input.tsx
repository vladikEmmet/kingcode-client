import { FC, forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import cn from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string | null;
  name: string;
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({className, error, name, label, ...props}, ref) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input 
        className={cn(styles.input, className, {
          [styles.error]: error && error.length
        })} 
        id={name}
        ref={ref}
        {...props}
      />

      {
        error && <p className={styles["error-message"]}>{error}</p>
      }
    </div>
  )
})

Input.displayName = "Field";
export default Input;
