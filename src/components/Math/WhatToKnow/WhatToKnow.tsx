import styles from "./WhatToKnow.module.scss";
import { MdChildCare, MdOutlineMouse } from 'react-icons/md';
import { PiNotebook } from 'react-icons/pi';
import twoMonkeys from "@/assets/math/twoMonkeys.png";
import Image from "next/image";

export const WhatToKnow = () => {
  return (
    <section className={styles.section}>
        <div className={styles.header}>
            <div className="container">
                <h2>Что должен уметь и знать ребёнок для прохождения курса?</h2>
            </div>
        </div>
        <div className="container">
            <div className={styles.list}>
                <div className={styles["list-item"]}>
                    <div className={styles["list-mark"]}>
                        <MdChildCare />
                    </div>
                    <div className={styles["list-description"]}>
                        Если Ваш ребёнок поступает в развивающую группу, ваше присутствие во время занятия обязательно.
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["list-mark"]}>
                        <PiNotebook />
                    </div>
                    <div className={styles["list-description"]}>
                        Уметь читать или воспринимать информацию на слух
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["list-mark"]}>
                        0-10
                    </div>
                    <div className={styles["list-description"]}>
                        Уметь считать хотя бы до 10
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["list-mark"]}>
                        <MdOutlineMouse />
                    </div>
                    <div className={styles["list-description"]}>
                        Пользоваться мышкой
                    </div>
                </div>
            </div>
            <div className={styles["two-monkeys"]}>
                <Image 
                    src={twoMonkeys}
                    alt="Взрослая обезьянка учит маленькую считать"
                />
            </div>
        </div>
    </section>
  )
}
