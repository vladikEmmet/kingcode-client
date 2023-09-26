import styles from "./WhatToKnow.module.scss";
import { MdChildCare, MdOutlineMouse } from 'react-icons/md';
import { PiNotebook } from 'react-icons/pi';
import twoMonkeys from "@/assets/math/twoMonkeys.png";
import Image from "next/image";
import localFont from "next/font/local";
import cn from 'clsx';

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const WhatToKnow = () => {
  return (
    <section className={styles.section}>
        <div className={styles.header}>
            <div className="container">
                <h2 className={cn(bold.className, "subtitle")}>Что должен уметь и знать ребёнок для прохождения курса?</h2>
            </div>
        </div>
        <div className="container">
            <div className={styles.list}>
                <div className={styles["list-item"]}>
                    <div className={cn(styles["list-mark"], bold.className)}>
                        <MdChildCare />
                    </div>
                    <div className={styles["list-description"]}>
                        Если Ваш ребёнок поступает в развивающую группу, ваше присутствие во время занятия обязательно.
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={cn(styles["list-mark"], bold.className)}>
                        <PiNotebook />
                    </div>
                    <div className={styles["list-description"]}>
                        Уметь читать или воспринимать информацию на слух
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={cn(styles["list-mark"], bold.className)}>
                        0-10
                    </div>
                    <div className={styles["list-description"]}>
                        Уметь считать хотя бы до 10
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={cn(styles["list-mark"], bold.className)}>
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
