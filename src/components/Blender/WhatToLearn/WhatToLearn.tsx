import styles from "./WhatToLearn.module.scss";
import project1 from "@/assets/blender/project1.png"
import project2 from "@/assets/blender/project2.png"
import project3 from "@/assets/blender/project3.png"
import Image from "next/image";
import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

export const WhatToLearn = () => {
  return (
    <div className={styles.section}>
        <BlackTab className={styles.tab}>
            <h2 className={montserrat.className}>ЧТО МЫ ИЗУЧИМ ?</h2>
            <p>Мы изучим базовые принципы моделирования, инструменты анимирования, изучим MODELING, SHADING, BLENDER - UV EDITING, режимы рендера и многое другое.</p>
            <h3 className={montserrat.className}>ПРОЕКТЫ НАШИХ УЧЕНИКОВ</h3>
            <div className={styles.images}>
                <div className={styles["image-container"]}>
                    <Image 
                        src={project1}
                        alt="Проект1"
                    />
                </div>
                <div className={styles["image-container"]}>
                    <Image 
                        src={project2}
                        alt="Проект2"
                    />
                </div>
                <div className={styles["image-container"]}>
                    <Image 
                        src={project3}
                        alt="Проект3"
                    />
                </div>
            </div>
        </BlackTab>
    </div>
  )
}
