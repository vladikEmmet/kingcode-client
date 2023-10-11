import Image from "next/image";
import styles from "./WhyImportant.module.scss";
import meme from "@/assets/scratch/whyMeme.png";
import cn from 'clsx';
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const WhyImportant = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={cn("subtitle", bold.className)}>Зачем это нужно ребёнку?</h2>
            <div>
                <div className={styles["list-item"]}>
                    <div>1</div>
                    <p>В игровой форме студент изучает основы языка C#, который входит в ТОП5 самых популярных языков программирования</p>
                </div>
                <div className={styles["list-item"]}>
                    <div>2</div>
                    <p>Появится структурированное мышление. Мы всегда пытаемся решить не одну конкретную задачу, а подобрать алгоритм, подходящий для решения всех подобных задач</p>
                </div>
                <div className={styles["list-item"]}>
                    <div>3</div>
                    <p>У студента появится понимание принципов работы игрового движка Unity</p>
                </div>
                <div className={styles["list-item"]}>
                    <div>4</div>
                    <p>Мы слегка затронем основы 3D-моделирования</p>
                </div>
                <div className={styles["list-item"]}>
                    <div>5</div>
                    <p>У вашего ребёнка накопится приличное количество крутых проектов в портфолио</p>
                </div>
            </div>
            <div className={styles.img}>
               <Image 
                    src={meme}
                    alt={`Мем "Зачем?" с обезьянкой`}
               />
            </div>
        </div>
    </section>
  )
}
