import styles from "./NextArrow.module.scss";
import { PiCaretRightBold } from 'react-icons/pi';
import { FC } from "react";

interface NextArrowProps {
  className?: string;
  style?: any;
  onClick?: any;
}

export const NextArrow: FC<NextArrowProps> = ({className, style, onClick}) => {
  return (
    <div className={className} onClick={onClick}><PiCaretRightBold style={{...style}} className={styles.arrow}/></div>
  )
}
