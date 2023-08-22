import styles from "./WhatToExplore.module.scss";
import monkeyExplorer from "@/assets/unity/monkeyExplorer.png";
import Image from "next/image";

export const WhatToExplore = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className="subtitle">Что будем изучать?</h2>
            <div>
                <div className={styles["list-item"]}>
                    Познакомимся с интерфейсом UNITY
                </div>
                <div className={styles["list-item"]}>
                    Поработаем со свойствами объектов, с ассетами, с настройками сцен
                </div>
                <div className={styles["list-item"]}>
                    Погрузимся в тонкости настройки освещения
                </div>
                <div className={styles["list-item"]}>
                    Подробно изучим RIGIDBODY, BOX COLLIDER. Физика игрового движка
                </div>
                <div className={styles["list-item"]}>
                    Попробуем себя в качестве аниматоров
                </div>
                <div className={styles["list-item"]}>
                    Знакомство с синтаксисом C#
                </div>
                <div className={styles["list-item"]}>
                    Разберём понятие переменной, рассмотрим какие бывают типы переменных
                </div>
                <div className={styles["list-item"]}>
                    Освоим операторы IF, ELSE
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
