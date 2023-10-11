import styles from "./WhatToExplore.module.scss";
import monkeyExplorer from "@/assets/unity/monkeyExplorer.png";
import Image from "next/image";
import cn from 'clsx';
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const WhatToExplore = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={cn("subtitle", bold.className)}>Что будем изучать?</h2>
            <div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Познакомимся с интерфейсом UNITY
                </div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Поработаем со свойствами объектов, с ассетами, с настройками сцен
                </div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Погрузимся в тонкости настройки освещения
                </div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Подробно изучим RIGIDBODY, BOX COLLIDER. Физика игрового движка
                </div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Попробуем себя в качестве аниматоров
                </div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Знакомство с синтаксисом C#
                </div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Разберём понятие переменной, рассмотрим какие бывают типы переменных
                </div>
                <div className={cn(styles["list-item"], bold.className)}>
                    Освоим условные операторы и циклы
                </div>
            </div>
            <div className={styles.img}>
                <Image 
                    src={monkeyExplorer}
                    alt="Обезьянка в белом халате смотрит на что-то через лупу"
                />
            </div>
        </div>
    </section>
  )
}
