import { ButtonHTMLAttributes, FC } from "react"
import styles from "./Button.module.scss"
import cn from 'clsx'
import { Montserrat } from "next/font/google"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariantsEnum
}

export enum ButtonVariantsEnum {
    grey = "grey",
    orange = "orange",
}

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]})

export const Button: FC<ButtonProps> = ({children, variant, className, ...props}) => {
  return (
    <button {...props} className={cn(montserrat.className, variant === ButtonVariantsEnum.grey ? styles.grey : styles.orange, className)}>
        {children}
    </button>
  )
}