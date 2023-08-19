import { FC } from "react";
import cn from 'clsx';
import styles from "./BlackTab.module.scss";

interface BlackTab {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

export const BlackTab:FC<BlackTab> = ({children, className}) => {
  return (
    <div className={cn(className, styles.wrapper)}>
        {children}
    </div>
  )
}
