import styles from "./Prospects.module.scss";
import monkeyTea from "@/assets/blender/monkeyTea.png";
import Image from "next/image";
import cn from 'clsx';
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const Prospects = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={cn("subtitle", bold.className)}>В какой области можно работать, изучив 3d-моделирование?</h2>
            <div className={styles.list}>
                <div className={styles["list-item"]}>
                    <div className={styles["list-mark"]}>
                        <h4 className={bold.className}>Геймдев</h4>
                    </div>
                    <div className={styles["list-description"]}>
                        Вы можете создавать персонажей, которых будут узнавать сотни игроков по всему миру, или же проектировать дизайн окружения, в котором геймеры будут проводить десятки тысяч часов. Всё зависит от вас.
                    </div>
                </div>
                <div className={styles["flex-wrapper"]}>
                    <div className={styles["flex-text"]}>
                        <div className={styles["list-item"]}>
                            <div className={styles["list-mark"]}>
                                <h4 className={bold.className}>Дизайн интерьеров</h4>
                            </div>
                            <div className={styles["list-description"]}>
                                В этом случае вашей задачей будет создание  реалистичных объектов архитектуры или внутренних интерьеров чего угодно.
                            </div>
                        </div>
                        <div className={styles["list-item"]}>
                            <div className={styles["list-mark"]}>
                                <h4 className={bold.className}>Анимация</h4>
                            </div>
                            <div className={styles["list-description"]}>
                                Здесь через экраны гаджетов миллионы детей узнают о персонажах и мирах, которые вы всё это время носили в своей голове. Почувствуйте себя Современным Диснеем.
                            </div>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image 
                            src={monkeyTea}
                            alt="Обезьянка с кружкой чая"
                            width={500}
                            height={420}
                            className={styles["monkey-tea"]}
                        />
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["list-mark"]}>
                        <h4 className={bold.className}>VFX</h4>
                    </div>
                    <div className={styles["list-description"]}>
                        Нравится кино про крутые тачки и взрывы? Тогда почему бы не попробовать самому создавать реалистичные киношные эффекты перестрелок, взрывов, извержений вулканов и т.д.?
                    </div>
                </div>
                <div className={styles["list-item"]}>
                    <div className={styles["list-mark"]}>
                        <h4 className={bold.className}>ART</h4>
                    </div>
                    <div className={styles["list-description"]}>
                        {"Инструментами Пикассо и Босха были кисти и холст? Твоими станут монитор и Мышь. Твори произведения искусства, попадай на выставки, запускай NFT-коллекции или не запускай, Гордо попивай кофе в Starbucks (желательно эстетично с мизинчиком)."}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
