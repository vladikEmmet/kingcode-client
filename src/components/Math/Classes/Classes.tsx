import styles from "./Classes.module.scss";
import monkeyThought from "@/assets/math/monkeyThought.png";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import cn from 'clsx';
import comment from "@/assets/math/comment.png";
import monkeyFigure from "@/assets/math/monkeyFigure.png";

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

export const Classes = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={montserrat.className}>Как проходят занятия?</h2>
      </div>
      <div className={styles.main}>
        <div className="container">
        <div className={styles["comment-wrapper"]}>
        <div className={styles.comment}>
          <p>{"Уроки проходят в мини группах до 3-человек согласно возрастной группе студента (кроме развивающей группы, у них предусмотрен только формат индивидуального обучения). Чаще всего занятие состоит из 10 задач от простой к сложной. Две последние задачи являются задачами повышенной сложности. Первые 10 уроков мы изучаем алгоритмы решения, затем ребёнок самостоятельно определяет тип задачи и выбирает необходимый алгоритм. Каждый 5 урок является самостоятельной проверочной работой."}</p>
          <p>{"Занятие длится 1,5 часа, а у ребят из развивающей группы(5-6) лет урок делится на два занятия. Поэтому у них будет 8 занятий в месяц по 45 минут. Это сделано для избежания перенагрузок и наиболее эффективного обучения."}</p>
        </div>
      </div>
          <div className={styles["img-wrapper"]}>
            <div className={styles.img}>
              <div className={cn(styles.ellipse, styles.small)} />
              <div className={cn(styles.ellipse, styles.medium)} />
              <div className={cn(styles.ellipse, styles.big)} />
              <Image 
                src={monkeyFigure}
                alt="Обезьянка с фигуркой"
              />
              {/* <div className={styles["comment-wrapper"]}>
                <div className={styles.comment}>
                  <p>{"Уроки проходят в мини группах до 3-человек согласно возрастной группе студента (кроме развивающей группы, у них предусмотрен только формат индивидуального обучения). Чаще всего занятие состоит из 10 задач от простой к сложной. Две последние задачи являются задачами повышенной сложности. Первые 10 уроков мы изучаем алгоритмы решения, затем ребёнок самостоятельно определяет тип задачи и выбирает необходимый алгоритм. Каждый 5 урок является самостоятельной проверочной работой."}</p>
                  <p>{"Занятие длится 1,5 часа, а у ребят из развивающей группы(5-6) лет урок делится на два занятия. Поэтому у них будет 8 занятий в месяц по 45 минут. Это сделано для избежания перенагрузок и наиболее эффективного обучения."}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
