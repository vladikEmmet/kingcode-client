import { Montserrat } from "next/font/google"
import styles from "./Adventages.module.scss"
import Image from "next/image";
import leadership from "@/assets/leadership.png"
import team from "@/assets/team.png"
import jigsaw from "@/assets/jigsaw.png"
import virtualReality from "@/assets/virtual-reality.png"

export const Adventages = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className="subtitle">Почему стоит выбирать нас</h2>
            <div className={styles.container}>
                
                <div className={styles.element}>
                    <Image 
                        src={virtualReality}
                        alt="Полное погружение"
                        width={85}
                        height={85}
                    />
                    <h3>Полное прогружение</h3>
                    <p>Мы не перепрыгиваем с одной программы на другую, что даёт возможность в полной мере освоить софт</p>
                </div>

                <div className={styles.element}>
                    <Image 
                        src={team}
                        alt="Лучшие преподаватели"
                        width={85}
                        height={85}
                    />
                    <h3>Лучшие преподаватели</h3>
                    <p>Преподаватели проходят два этапа собеседования: технический и психологический. Также они постоянно проходят внутреннюю аттестацию</p>
                </div>

                <div className={styles.element}>
                    <Image 
                        src={leadership}
                        alt="Индивидуальный подход"
                        width={85}
                        height={85}
                    />
                    <h3>Индивидуальный подход</h3>
                    <p>Занятия проходят в мини-группах до 3-4 человек. А если требуется дополнительное внимание от преподаватель, существуют индивидуальные занятия</p>
                </div>

                <div className={styles.element}>
                    <Image 
                        src={jigsaw}
                        alt="Игровая форма"
                        width={85}
                        height={85}
                    />
                    <h3>Игровая форма</h3>
                    <p>{'Мы, конечно, за учёбу и всё такое. Но и зарубиться в созданные проекты мы никогда не против :)'}</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}
