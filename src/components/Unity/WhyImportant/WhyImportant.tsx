import { Montserrat } from "next/font/google";
import Image from "next/image";
import styles from "./WhyImportant.module.scss";
import meme from "@/assets/scratch/whyMeme.png";

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

export const WhyImportant = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={montserrat.className}>Зачем это нужно ребёнку?</h2>
            <div>
                <div className={styles["list-item"]}>
                    <div className={montserrat.className}>1</div>
                    <p>В игровой форме студент изучает основы языка C#, который входит в ТОП5 самых популярных языков программирования</p>
                </div>
                <div className={styles["list-item"]}>
                    <div className={montserrat.className}>2</div>
                    <p>Появится структурированное мышление. Мы всегда пытаемся решить не одну конкретную задачу, а подобрать алгоритм, подходящий для решения всех подобных задач</p>
                </div>
                <div className={styles["list-item"]}>
                    <div className={montserrat.className}>3</div>
                    <p>У студента появится понимание принципов работы игрового движка Unity</p>
                </div>
                <div className={styles["list-item"]}>
                    <div className={montserrat.className}>4</div>
                    <p>Мы Слегка затронем основы 3D-моделирования</p>
                </div>
                <div className={styles["list-item"]}>
                    <div className={montserrat.className}>5</div>
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
