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
                <p>{"SCRATCH - это визуально-блочная среда программирования, позволяющая создавать впечатляющие проекты без знания какого-либо языка программирования и необходимого синтаксиса. Иными словами - это идеальный первый шаг в обучении юных разработчиков:)"}</p>
                <p>{"В процессе обучения мы научим ребят создавать интересные визуальные эффекты, яркие мультфильмы, полезные приложения и захватывающие игры. Изучив Scratch, ребёнок сможет более плавно и легко освоить полноценный язык программирования. Это станет отличной «базой» для дальнейшего обучения"}</p>
                <div className={styles.img}>
                    <Image 
                        src={meme}
                        alt="Обезьянка - мем"
                    />
                </div>
            </BlackTab>
        </div>
    </section>
  )
}
