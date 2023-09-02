import { FC } from "react"
import { InputProps } from "../Input"
import styles from "./UploadFile.module.scss"
import cn from 'clsx'

interface UploadFileProps extends InputProps {}

export const UploadFile: FC<UploadFileProps> = ({label, name, error, className, ...props}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input 
        className={cn(styles.input, className, {
          [styles.error]: error && error.length
        })} 
        id={name}
        type="file"
        {...props}
      />

      {
        error && <p className={styles["error-message"]}>{error}</p>
      }
    </div>
  )
}
