import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import styles from "./Prospects.module.scss";
import cn from 'clsx';
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const Prospects = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={cn("subtitle", bold.className)}>В какой области можно работать, изучив Unity?</h2>
            <div className={styles.grid}>
                <BlackTab className={styles["grid-item"]}>
                    <div className={styles.title}>
                        <h4 className={bold.className}>Геймдев</h4>
                    </div>
                    <p>
                     {"Ваш ребенок сможет создавать игры, в которые будут играть тысячи геймеров."}
                    </p>
                </BlackTab>
                <BlackTab className={styles["grid-item"]}>
                    <div className={styles.title}>
                        <h4 className={bold.className}>VFX</h4>
                    </div>
                    <p>
                        После освоения Unity студент сможет создавать реалистичные кинематографические эффекты - перестрелки, взрывы, извержения вулканов и т.д.
                    </p>
                </BlackTab>
                <BlackTab className={styles["grid-item"]}>
                    <div className={styles.title}>
                        <h4 className={bold.className}>Анимация</h4>
                    </div>
                    <p>
                        Здесь через экраны гаджетов миллионы детей узнают о персонажах и мирах, которые создаст ваш ребенок.
                    </p>
                </BlackTab>
                <BlackTab className={styles["grid-item"]}>
                    <div className={styles.title}>
                        <h4 className={bold.className}>Разработка</h4>
                    </div>
                    <p>
                        Не бывает дыма без огня, также не бывает Unity без C#. Ученик освоит этот язык программирования, что откроет ему множество дорог!
                    </p>
                </BlackTab>
                
            </div>
        </div>
    </section>
  )
}
