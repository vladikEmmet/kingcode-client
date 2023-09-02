import { FC } from "react";
import styles from "./StepWrapper.module.scss";

interface StepWrapperProps {
    activeStep: number;
    children: React.ReactNode | React.ReactNode[];
}

const steps = ["Цена №1 (слева)", "Цена №2 (центр)", "Цена №3 (правый край)"];
export const StepWrapper:FC<StepWrapperProps> = ({activeStep, children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.steps}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
  )
}
