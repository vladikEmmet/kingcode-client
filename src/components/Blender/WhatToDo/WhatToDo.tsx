import Image from "next/image";
import styles from "./WhatToDo.module.scss";
import project1 from "@/assets/blender/tinkercad1.png"
import project2 from "@/assets/blender/tinkercad2.png"
import project3 from "@/assets/blender/tinkercad3.png"
import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import { Montserrat } from "next/font/google";
import tinkerCubes from "@/assets/blender/tinkerCubes.png";
import monkeyTinkercad from "@/assets/blender/monkeyTinkercad.png";

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]})

export const WhatToDo = () => {
  return (
    <BlackTab className={styles.tab}>
        <Image 
            src={tinkerCubes}
            alt="Кубиками выложено TINKER"
            // width={255}
            // height={800}
            className={styles.cubes}
        />
        <h2 className={montserrat.className}>Что делать, если ребёнок никогда не занимался ничем подобным?</h2>
        <div className={styles.wrapper}>
            <p>
                1. Не переживать и расслабиться
            </p>
            <p>
                2. Пройти обязательный для всех мини-курс в <span className="highlighted">TINKERCAD</span>
            </p>
            <p className={styles.additional}>В Tinkercad мы изучим примитивы, работу с ними, разрезы, группировку и много чего ещё, но самое главное, мы разовьём базовое пространственное мышление ребёнка. Мы создадим 10 проектов, проверим усвоенные знания на самостоятельных работах и проведём 2 творческих урока, где студенты смогут самостоятельно выбрать тематику своего проекта. Для работы в Tinkercad ничего не надо скачивать, нужен только хороший интернет.</p>
            <Image 
                src={monkeyTinkercad}
                alt="Обезьянка на кубиках TINKERCAD"
                width={560}
                height={490}
                className={styles["monkey-tinkercad"]}
            />
        </div>
        <h3>ПРОЕКТЫ В <span className="highlighted">TINKERCAD</span></h3>
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
  )
}
