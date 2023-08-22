import Image from "next/image";
import styles from "./WhyImportant.module.scss";
import meme from "@/assets/scratch/whyMeme.png";

export const WhyImportant = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className="subtitle">Зачем это нужно ребёнку?</h2>
            <div>
                <div className={styles["list-item"]}>
                    <div>
                        1
                    </div>
                    <p>Изучив Scratch, ребёнок сможет более плавно и легко освоить уже серьёзный язык программирования. Так как за время нашего курса студент получает понимание циклов, переменных, операторов и т.д</p>
                </div>
                <div className={styles["list-item"]}>
                    <div>
                        2
                    </div>
                    <p>Появится структурированное мышление. Мы всегда пытаемся решить не одну конкретную задачу, а подобрать алгоритм, подходящий для решения всех подобных задач</p>
                </div>
                <div className={styles["list-item"]}>
                    <div>
                        3
                    </div>
                    <p>У вашего ребёнка накопится приличное количество крутых проектов, в том числе игр, которыми можно флексить перед своими одноклассниками</p>
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
