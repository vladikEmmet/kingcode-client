import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import { Montserrat } from "next/font/google";
import styles from "./Prospects.module.scss";

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

export const Prospects = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={montserrat.className}>В какой области можно работать, изучив Unity?</h2>
            <div className={styles.grid}>
                <BlackTab className={styles["grid-item"]}>
                    <div className={styles.title}>
                        <h4 className={montserrat.className}>Геймдев</h4>
                    </div>
                    <p>
                     Вы можете создавать игры, в которые залипнут тысячи геймеров. Иногда они будут боготворить Вас как создателя лучшей игры на свете, а иногда будут ненавидеть за слишком сложные уровни, привет миссии с вертолётом в Vice City
                    </p>
                </BlackTab>
                <BlackTab className={styles["grid-item"]}>
                    <div className={styles.title}>
                        <h4 className={montserrat.className}>VFX</h4>
                    </div>
                    <p>
                        Нравится кино про крутые тачки и взрывы? Тогда почему бы не попробовать самому создавать реалистичные киношные эффекты перестрелок, взрывов, извержений вулканов и т.д.?
                    </p>
                </BlackTab>
                <BlackTab className={styles["grid-item"]}>
                    <div className={styles.title}>
                        <h4 className={montserrat.className}>Анимация</h4>
                    </div>
                    <p>
                        Здесь через экраны гаджетов миллионы детей узнают о персонажах и мирах, которые вы всё это время носили в своей голове. Почувствуйте себя Современным Диснеем.
                    </p>
                </BlackTab>
                <BlackTab className={styles["grid-item"]}>
                    <div className={styles.title}>
                        <h4 className={montserrat.className}>Разработка</h4>
                    </div>
                    <p>
                        Не бывает дыма без огня, также не бывает unity без C#. Ты освоишь этот язык программирования, что откроет тебе кучу дорог
                    </p>
                </BlackTab>
                
            </div>
        </div>
    </section>
  )
}
