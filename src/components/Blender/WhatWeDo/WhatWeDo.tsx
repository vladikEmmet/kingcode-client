import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import styles from "./WhatWeDo.module.scss";
import monkeyGum from "@/assets/blender/monkeyGum.png";
import monkeyMixer from "@/assets/blender/monkeyMixer.png";
import Image from "next/image";
import cn from 'clsx';
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const WhatWeDo = () => {
  return (
    <section id="what-we-do" className={styles.section}>
        <div className="container">
            <BlackTab className={styles.tab}>
                <h2 className={cn("subtitle", bold.className)}>Чем мы будем заниматься?</h2>
                <p className={styles.first}>3D-моделирование – это очень перспективная и креативная область. Многие
                    площадки отмечают ее колоссальный рост.</p>
                <div className={styles["img-left-container"]}>
                    <Image
                        src={monkeyGum}
                        alt="Обезьяна с липучкой"
                        width={460}
                        height={420}
                        className={styles["img-left"]}
                    />
                </div>
                <p className={styles.second}>Мы предлагаем осваивать 3D-моделирование в программе Blender, которая
                    позволяет создавать трехмерную графику. </p>
                <p className={styles.third}>При этом, Blender включает в себя не только функции для моделирования, но и
                    позволяет работать с цифровым скульптингом, анимацией, симуляциями. В нем довольно удобно
                    визуализировать графику, заниматься постпродакшеном, видео монтажом с аудио составляющей, а также
                    создавать 2D-анимацию.</p>
                <p className={styles.fourth}>Также Blender – это неотъемлемая часть геймдева. С его помощью можно
                    создавать Game-ready модели для настоящих компьютерных/мобильных игр и приложений. </p>
                <div className={styles["img-right-container"]}>
                    <Image
                        src={monkeyMixer}
                        alt="Обезьяна с миксером"
                        width={500}
                        height={550}
                        className={styles["img-right"]}
                    />
                </div>
            </BlackTab>
        </div>
    </section>
  )
}
