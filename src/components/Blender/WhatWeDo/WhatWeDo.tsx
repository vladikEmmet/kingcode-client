import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import { Montserrat } from "next/font/google";
import styles from "./WhatWeDo.module.scss";
import monkeyGum from "@/assets/blender/monkeyGum.png";
import monkeyMixer from "@/assets/blender/monkeyMixer.png";
import Image from "next/image";

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]})

export const WhatWeDo = () => {
  return (
    <section id="what-we-do" className={styles.section}>
        <div className="container">
            <BlackTab className={styles.tab}>
                <Image 
                    src={monkeyGum}
                    alt="Обезьяна с липучкой"
                    width={460}
                    height={420}
                    className={styles["img-left"]}
                />
                <h2 className={montserrat.className}>Чем мы будем заниматься?</h2>
                <p className={styles.first}>Моделирование - процесс создания копии чего-либо, максимально приближенной к оригиналу. То есть лепка из пластилина или рисунок на бумаге - это тоже моделирование. Для наших занятий нам не потребуется ни карандашей, ни доски для лепок.</p>
                <p className={styles.second}>Наш основной инструмент - компьютер, а точнее программа Blender. В ней мы можем создать персонажей из любимых мультфильмов, локацию для вашей личной игры, кинематографичный эффект и многое другое.</p>
                <Image 
                    src={monkeyMixer}
                    alt="Обезьяна с миксером"
                    width={500}
                    height={550}
                    className={styles["img-right"]}
                />
            </BlackTab>
        </div>
    </section>
  )
}
