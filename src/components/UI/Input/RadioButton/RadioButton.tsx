import { FC } from "react"
import { InputProps } from "../Input"
import styles from "./RadioButton.module.scss"
import cn from 'clsx'

interface RadioButtonProps extends InputProps{
}

export const RadioButton: FC<RadioButtonProps> = ({label, name, className, error, ...props}) => {
  return (
    <div className={styles.container}>
        <label htmlFor={name}>{label}</label>
        <input 
            className={cn(styles.input, className, {
                [styles.error]: error && error.length
            })} 
            id={name}
            type="radio"
            {...props}
        />
        {
            error && <p className={styles["error-message"]}>{error}</p>
        }
    </div>
  )
}
