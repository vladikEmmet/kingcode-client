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
                <p className={styles.first}>Моделирование - процесс создания копии чего-либо, максимально приближенной к оригиналу. То есть лепка из пластилина или рисунок на бумаге - это тоже моделирование. Для наших занятий нам не потребуется ни карандашей, ни доски для лепок.</p>
                <div className={styles["img-left-container"]}>
                    <Image 
                        src={monkeyGum}
                        alt="Обезьяна с липучкой"
                        width={460}
                        height={420}
                        className={styles["img-left"]}
                    />
                </div>
                <p className={styles.second}>Наш основной инструмент - компьютер, а точнее программа Blender. В ней мы можем создать персонажей из любимых мультфильмов, локацию для вашей личной игры, кинематографичный эффект и многое другое.</p>
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
