import styles from "./WhatToLearn.module.scss";
import project1 from "@/assets/blender/project1.png"
import project2 from "@/assets/blender/project2.png"
import project3 from "@/assets/blender/project3.png"
import project4 from "@/assets/blender/project4.png"
import project5 from "@/assets/blender/project5.png"
import project6 from "@/assets/blender/project6.png"
import Image from "next/image";
import { BlackTab } from "@/components/UI/BlackTab/BlackTab";

export const WhatToLearn = () => {
  return (
    <div className={styles.section}>
        <BlackTab className={styles.tab}>
            <h2 className="subtitle">ЧТО МЫ ИЗУЧИМ ?</h2>
            <p>Мы изучим базовые принципы моделирования, инструменты анимирования, изучим MODELING, SHADING, BLENDER - UV EDITING, режимы рендера и многое другое.</p>
            <h3>ПРОЕКТЫ НАШИХ УЧЕНИКОВ</h3>
            <div className={styles.grid}>
                <div className={styles.wrapper}>
                    <div>
                        <Image 
                            src={project1}
                            alt="Проект 1"
                        />
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div>
                        <Image 
                            src={project2}
                            alt="Проект 2"
                        />
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div>
                        <Image 
                            src={project3}
                            alt="Проект 3"
                        />
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div>
                        <Image 
                            src={project4}
                            alt="Проект 4"
                        />
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div>
                        <Image 
                            src={project5}
                            alt="Проект 5"
                        />
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div>
                        <Image 
                            src={project6}
                            alt="Проект 6"
                        />
                    </div>
                </div>
            </div>
        </BlackTab>
    </div>
  )
}
