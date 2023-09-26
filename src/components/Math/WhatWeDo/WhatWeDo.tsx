import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import Image from "next/image";
import styles from "./WhatWeDo.module.scss";
import monkeyDesk from "@/assets/math/monkeyDesk.png";
import cn from 'clsx';
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const WhatWeDo = () => {
  return (
    <section className={styles.section} id="what-we-do">
        <div className="container">
            <BlackTab className={styles.tab}>
                <h2 className={cn("subtitle", bold.className)}>ЧЕМ МЫ БУДЕМ ЗАНИМАТЬСЯ?</h2>
                <div className={styles.wrapper}>
                    <p className={styles.semi}>Вот этого мы проходить не будем. Школьная программа отличается от страны к стране. Знания, которые предлагаем мы, универсальны.</p>
                    <p className={styles.full}>{`Вот этого мы проходить не будем. Школьная программа отличается от страны к стране. Знания, которые предлагаем мы, универсальны. Они развивают логику, умение посмотреть на задачу "сверху", навык подбирать необходимый алгоритм.`}</p>
                    <div className={styles["mobile-flex"]}>
                        <p>{`Они развивают логику, умение посмотреть на задачу "сверху", навык подбирать необходимый алгоритм.`}</p>
                        <div className={styles.img}>
                            <Image 
                                src={monkeyDesk}
                                alt="Обезьянка играет в игру на приставке"
                            />
                        </div>
                    </div>
                </div>
            </BlackTab>
        </div>
    </section>
  )
}
