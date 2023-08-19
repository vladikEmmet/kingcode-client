import { Montserrat } from "next/font/google";
import styles from "./WhatToLearn.module.scss";
import monkeyCat from "@/assets/scratch/monkeyCat.png";
import Image from "next/image";
import cn from 'clsx';


const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

export const WhatToLearn = () => {
  return (
    <section className={cn(styles.section, montserrat.className)}>
        <div className="container">
            <h2>Что будем изучать?</h2>
            <div className={styles.list}>
                <div className={styles["list-item"]}>
                    Сначала мы изучим основы: Координаты, градусы, циклы, условия и многое другое
                </div>
                <div className={styles["list-item"]}>
                    Затем перейдём к переменным, операторам и к другим библиотекам Scratch
                </div>
                <div className={styles["list-item"]}>
                    Уже после этого начнём создавать полноценные проекты
                </div>
                <div className={styles["list-item"]}>
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
