import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import Image from "next/image";
import styles from "./WhatWeDo.module.scss";
import monkeyDesk from "@/assets/math/monkeyDesk.png";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

export const WhatWeDo = () => {
  return (
    <section className={styles.section} id="what-we-do">
        <div className="container">
            <BlackTab className={styles.tab}>
                <h2 className={montserrat.className}>ЧЕМ МЫ БУДЕМ ЗАНИМАТЬСЯ?</h2>
                <div className={styles.wrapper}>
                    <p>
                        Вот этого мы проходить не будем. Школьная программа отличается от страны к стране. Знания, которые предлагаем мы, универсальны. Они развивают логику, умение посмотреть на задачу "сверху", навык подбирать необходимый алгоритм.
                    </p>
                    <div className={styles.img}>
                        <Image 
                            src={monkeyDesk} 
                            alt="Обезьянка стоит у доски со сложными вычисллениями"
                            className={styles["monkey-desk"]}
                            width={565}
                            height={400}
                        />
                    </div>
                </div>
            </BlackTab>
        </div>
    </section>
  )
}
