import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import styles from "./WhatWeDo.module.scss";
import meme from "@/assets/scratch/monkeyMeme.png";
import Image from "next/image";
import localFont from "next/font/local";
import cn from 'clsx';

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const WhatWeDo = () => {
  return (
    <section id="what-we-do" className={styles.section}>
        <div className="container">
            <BlackTab className={styles.tab}>
                <h2 className={cn("subtitle", bold.className)}>ЧЕМ МЫ БУДЕМ ЗАНИМАТЬСЯ?</h2>
                <p>SCRATCH - это визуально-блочная среда программирования. Если простым языком, дети смогут писать программы без знания какого-либо языка программирования и необходимого синтаксиса. В процессе обучения мы будем создавать интересные визуальные эффекты, яркие мультфильмы, полезные приложения и захватывающие игры.</p>
                <div className={styles.img}>
                    <Image 
                        src={meme}
                        alt="Обезьянка-мем"
                    />
                </div>
            </BlackTab>
        </div>
    </section>
  )
}
