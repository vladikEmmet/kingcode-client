import { FC } from "react";
import styles from "./ErrorComponent.module.scss";
import errorMonkey from "@/assets/errorMonkey.png";
import Image from "next/image";

interface ErrorComponentProps {
    error: Error;
}

export const ErrorComponent: FC<ErrorComponentProps> = ({error}) => {
  
  return (
    <div className={styles.container}>
      <Image
          src={errorMonkey}
          alt="Обезьянка в недоумении"
          width={300}
          
      />
      <div className={styles.text}>
        <h2>{"Oops! Кажется, что-то пошло не так :("}</h2>
        <p>{error.message}</p>
      </div>
    </div>
  )
}
