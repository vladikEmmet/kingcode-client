import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import Image from "next/image";
import styles from "./WhatWeDo.module.scss";
import monkeyGamer from "@/assets/unity/monkeyGamer.png";

export const WhatWeDo = () => {
  return (
    <section className={styles.section} id="what-we-do">
        <div className="container">
            <BlackTab className={styles.tab}>
                <h2 className="subtitle">ЧЕМ МЫ БУДЕМ ЗАНИМАТЬСЯ?</h2>
                <div className={styles.wrapper}>
                    <p className={styles.full}>{"UNITY - это игровой движок, в котором можно воплотить свои самые смелые идеи. Большинство современных мобильных игр сделано именно на нём (Pokemon GO, Hearthstone), но и на компьютере существует куча крутых проектов (Cuphead, Outer Wilds), созданных на Unity, кто-то создаёт в нем мультики и произведения искусства. Для работы в нём мы изучим азы языка программирования C# и начнём творить."}</p>
                    <p className={styles.semi}>{"UNITY - это игровой движок, в котором можно воплотить свои самые смелые идеи. Большинство современных мобильных игр сделано именно на нём (Pokemon GO, Hearthstone), но и на компьютере существует куча крутых проектов (Cuphead, Outer Wilds), созданных на Unity, кто-то создаёт в нем мультики и произведения искусства. "}</p>
                    <div className={styles["mobile-wrapper"]}>
                        <p>Для работы в нём мы изучим азы языка программирования C# и начнём творить</p>
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
