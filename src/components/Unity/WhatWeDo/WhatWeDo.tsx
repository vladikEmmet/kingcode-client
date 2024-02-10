import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import Image from "next/image";
import styles from "./WhatWeDo.module.scss";
import monkeyGamer from "@/assets/unity/monkeyGamer.png";
import cn from 'clsx';
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const WhatWeDo = () => {
  return (
    <section className={styles.section} id="what-we-do">
        <div className="container">
            <BlackTab className={styles.tab}>
                <h2 className={cn("subtitle", bold.className)}>ЧЕМ МЫ БУДЕМ ЗАНИМАТЬСЯ?</h2>
                <div className={styles.wrapper}>
                    <p className={styles.full}>{"Unity — это один из самых популярных в мире игровых движков. На нём создано более 50% всех мобильных игр, 60% всего контента для дополненной и виртуальной реальности, а Unity-разработчик — это седьмая по росту популярности профессия на сегодняшний день! Для работы в Unity  мы изучим азы языка программирования C# и начнём творить - создавать свои собственные игры!"}</p>
                    <p className={styles.semi}>{"Unity — это один из самых популярных в мире игровых движков. На нём создано более 50% всех мобильных игр, 60% всего контента для дополненной и виртуальной реальности, а Unity-разработчик — это седьмая по росту популярности профессия на сегодняшний день!"}</p>
                    <div className={styles["mobile-wrapper"]}>
                        <p>Для работы в Unity  мы изучим азы языка программирования C# и начнём творить - создавать свои собственные игры!</p>
                        <div className={styles.img}>
                            <Image 
                                src={monkeyGamer}
                                alt="Обезьянка играет в игру на приставке"
                            />
                        </div>
                    </div>

                </div>
            </BlackTab>
        </div>
    </section>
  )
}
