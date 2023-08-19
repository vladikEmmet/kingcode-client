import styles from "./PrevArrow.module.scss";
import { PiCaretLeftBold } from 'react-icons/pi';
import { FC } from "react";

interface PrevArrowProps {
    className?: string;
    style?: any;
    onClick?: any;
}

export const PrevArrow: FC<PrevArrowProps> = ({className, style, onClick}) => {
  return (
    <div className={className} onClick={onClick}><PiCaretLeftBold style={{...style}} className={styles.arrow}/></div>
  )
}
