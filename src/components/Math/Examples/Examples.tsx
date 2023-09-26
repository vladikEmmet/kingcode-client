import styles from "./Examples.module.scss";
import cn from 'clsx';
import battery from "@/assets/math/battery.png";
import Image from "next/image";
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const Examples = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={cn("subtitle", bold.className)}>Примеры задач, которые встречаются на курсе:</h2>
            <div className={styles.list}>
                <div className={styles["list-item"]}>
                    <h3 className={bold.className}>Задача для развивающей группы (5-6 лет)</h3>
                    <div className={cn(styles["list-info"], styles["list-flex"])}>
                        <p>Цифры в батарейке должны идти строго по порядку. Сколько цифр в батарейке пропущено? А сколько уже написано? Впишите недостающие цифры.</p>
                        <div className={styles.battery}>
                            <Image 
                                src={battery}
                                alt="Иллюстрация к задаче - батарейка"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <h3 className={bold.className}>Задача для первой возрастной группы (6-8 лет)</h3>
                    <div className={styles["list-info"]}>
                        Дано число, которое меньше 20. В этом числе единиц на 6 больше, чем десятков. Какое это число? (числовое)
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <h3 className={bold.className}>Задача повышенной сложности для второй возрастной группы (8-11 лет)</h3>
                    <div className={styles["list-info"]}>
                        *** На яблоне висело два одинаковых яблока. Червяки Никита и Юра решили узнать, кто из них быстрее успеет съесть яблоко. Юра съедает за час восьмую часть яблока, а Никита съедает за 48 минут десятую часть яблока. Какой червяк победит в этом соревновании? 
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <h3 className={bold.className}>Задача для третьей возрастной группы (11-14 лет)</h3>
                    <div className={styles["list-info"]}>
                        Шахматный турнир проводился по круговой системе. Это означает, что каждая пара игроков встречается между собой ровно один раз. В турнире участвуют семь школьников. Известно, что Ваня сыграл 6 партий, Толя - 5, Леша и Дима - по 3, Семен и Илья - по 2, Женя - 1. С кем сыграл Леша? (логика)
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
