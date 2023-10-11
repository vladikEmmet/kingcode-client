import styles from "./WhatToLearn.module.scss";
import monkeyCat from "@/assets/scratch/monkeyCat.png";
import Image from "next/image";
import cn from 'clsx';
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const WhatToLearn = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={cn("subtitle", bold.className)}>Что будем изучать?</h2>
            <div className={styles.list}>
                <div className={cn(styles["list-item"], bold.className)}>
                    Сначала мы изучим основы: координаты, градусы, циклы, условия и многое другое
                </div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Затем перейдём к переменным, операторам и к другим библиотекам Scratch
                </div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Уже после этого начнём создавать полноценные проекты
                </div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Курс разбит на 6 блоков, в конце каждого из них проходит самостоятельная работа, которая поможет оценить полученные знания
                </div>
            </div>
            <div className={styles.img}>
                <Image 
                    src={monkeyCat}
                    alt="Обезьянка жмет руку коту Scratch-у"
                />
            </div>
        </div>
    </section>
  )
}
