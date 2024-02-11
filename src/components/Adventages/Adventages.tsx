"use client";
import cn from 'clsx';
import styles from "./Adventages.module.scss"
import Image from "next/image";
import leadership from "@/assets/leadership.png"
import team from "@/assets/team.png"
import jigsaw from "@/assets/jigsaw.png"
import virtualReality from "@/assets/virtual-reality.png"
import localFont from "next/font/local";
import ebook from "@/assets/ebook.png";
import idea from "@/assets/idea.png";
import mark from "@/assets/mark.png";
import {useState} from "react";
import {Button, ButtonVariantsEnum} from "@/components/UI/Button/Button";

const montserratBold = localFont({src: "../../assets/fonts/Montserrat-Bold.woff2"});
const medium = localFont({src: "../../assets/fonts/Montserrat-Medium.woff2"});

export const Adventages = () => {
    const [isRowVisible, setIsRowVisible] = useState(false);
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={cn("subtitle", montserratBold.className)}>Почему стоит выбирать нас</h2>
            <div className={styles.container}>

                <div className={styles.element}>
                    <Image
                        src={virtualReality}
                        alt="Полное погружение"
                        width={85}
                        height={85}
                    />
                    <h3 className={montserratBold.className}>Полное прогружение</h3>
                    <p className={medium.className}>Мы не пытаемся научить ребёнка всему и сразу, что даёт возможность в
                        полной мере освоить программы и теоретический материал</p>
                </div>

                <div className={styles.element}>
                    <Image
                        src={team}
                        alt="Лучшие преподаватели"
                        width={85}
                        height={85}
                    />
                    <h3 className={montserratBold.className}>Лучшие преподаватели</h3>
                    <p className={medium.className}>Наши преподаватели проходят два этапа собеседования: технический и
                        психологический. Также они постоянно проходят внутреннюю аттестацию</p>
                </div>

                <div className={styles.element}>
                    <Image
                        src={leadership}
                        alt="Индивидуальный подход"
                        width={85}
                        height={85}
                    />
                    <h3 className={montserratBold.className}>Индивидуальный подход</h3>
                    <p className={medium.className}>Занятия проходят в мини-группах до 3-4 человек. А если требуется
                        дополнительное внимание от преподаватель, существуют индивидуальные занятия</p>
                </div>

                <div className={styles.element}>
                    <Image
                        src={jigsaw}
                        alt="Игровая форма"
                        width={85}
                        height={85}
                    />
                    <h3 className={montserratBold.className}>Игровая форма</h3>
                    <p className={medium.className}>Мы придерживаемся принципа геймификации учебного процесса. Создаём и
                        играем в игры, чтобы не заскучать во время обучения достаточно сложных вещей. 80% - практики,
                        20% - теории</p>
                </div>

            </div>
            {!isRowVisible && <Button variant={ButtonVariantsEnum.grey} className={styles.more} onClick={() => setIsRowVisible(true)}>Показать ещё</Button>}
            <div className={cn(styles.container, styles.second, isRowVisible ? styles["mobile-visible"] : null)}>
                <div className={styles.element}>
                    <Image
                        src={ebook}
                        alt="Онлайн-формат"
                        width={85}
                        height={85}
                    />
                    <h3 className={montserratBold.className}>Онлайн-формат</h3>
                    <p className={medium.className}>Мы работаем онлайн, поэтому вам не придется тратить время на дорогу
                        до нас. А экономия времени очень важна для наших клиентов</p>
                </div>

                <div className={styles.element}>
                    <Image
                        src={idea}
                        alt="Закрепление материала"
                        width={85}
                        height={85}
                    />
                    <h3 className={montserratBold.className}>Закрепление материала</h3>
                    <p className={medium.className}>Учебные программы подразумевают проверочные самостоятельные работы
                        для направлений программирования и математики, а также творческие уроки 3Д-моделирования</p>
                </div>

                <div className={styles.element}>
                    <Image
                        src={mark}
                        alt="Система отработок"
                        width={85}
                        height={85}
                    />
                    <h3 className={montserratBold.className}>Система отработок</h3>
                    <p className={medium.className}>У нас есть гибкая система отработок пропусков</p>
                </div>
            </div>
        </div>
    </section>
  )
}
