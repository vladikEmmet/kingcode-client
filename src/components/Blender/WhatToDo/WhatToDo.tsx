import Image from "next/image";
import styles from "./WhatToDo.module.scss";
import project1 from "@/assets/blender/tinkercad1.png";
import project2 from "@/assets/blender/tinkercad2.png";
import project3 from "@/assets/blender/tinkercad3.png";
import project4 from "@/assets/blender/tinkercad4.png";
import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import tinkerCubes from "@/assets/blender/tinkerCubes.png";
import monkeyTinkercad from "@/assets/blender/monkeyTinkercad.png";
import { ProjectsRow } from "@/components/UI/ProjectsRow/ProjectsRow";
import cn from 'clsx';
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

const projects = [
    {
      img: project1,
    },
    {
      img: project2,
    },
    {
      img: project3,
    },
    {
      img: project4,
    }
  ];

export const WhatToDo = () => {
  return (
    <BlackTab className={styles.tab}>
        <h2 className={cn("subtitle", bold.className)}>Что делать, если ребёнок никогда не занимался ничем подобным?</h2>
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <p>
                        1. Не переживать и расслабиться
                    </p>
                    <p>
                        2. Пройти обязательный для всех мини-курс в <span className="highlighted">TINKERCAD</span>
                    </p>
                </div>
                <div className={styles["monkey-tinkercad"]}>
                    <Image 
                        src={monkeyTinkercad}
                        alt="Обезьянка на кубиках TINKERCAD"
                        width={560}
                        height={490}
                    />
                </div>
            </div>
            <div className={styles.cubes}>
                <Image 
                    src={tinkerCubes}
                    alt="Кубиками выложено TINKER"
                />
            </div>
            <p className={styles.additional}>В Tinkercad мы изучим примитивы, работу с ними, разрезы, группировку и много чего ещё, но самое главное, мы разовьём базовое пространственное мышление ребёнка. Мы создадим 10 проектов, проверим усвоенные знания на самостоятельных работах и проведём 2 творческих урока, где студенты смогут самостоятельно выбрать тематику своего проекта. Для работы в Tinkercad ничего не надо скачивать, нужен только хороший интернет.</p>
        </div>
        <h3 className={bold.className}>ПРОЕКТЫ В <span className="highlighted">TINKERCAD</span></h3>
        <ProjectsRow projects={projects}/>
    </BlackTab>
  )
}
