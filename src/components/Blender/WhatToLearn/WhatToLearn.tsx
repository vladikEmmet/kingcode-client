import styles from "./WhatToLearn.module.scss";
import project1 from "@/assets/blender/project1.png"
import project2 from "@/assets/blender/project2.png"
import project3 from "@/assets/blender/project3.png"
import project4 from "@/assets/blender/project4.png"
import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
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

export const WhatToLearn = () => {
  return (
    <div className={styles.section}>
        <BlackTab className={styles.tab}>
            <h2 className={cn("subtitle", bold.className)}>ЧТО МЫ ИЗУЧИМ ?</h2>
            <p>Мы изучим базовые принципы моделирования, инструменты анимирования, изучим MODELING, SHADING, BLENDER - UV EDITING, режимы рендера и многое другое.</p>
            <h3 className={bold.className}>ПРОЕКТЫ НАШИХ УЧЕНИКОВ</h3>
            <ProjectsRow projects={projects}/>
        </BlackTab>
    </div>
  )
}
