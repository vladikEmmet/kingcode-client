import styles from "./WhatToLearn.module.scss";
import project1 from "@/assets/blender/project1.png"
import project2 from "@/assets/blender/project2.png"
import project3 from "@/assets/blender/project3.png"
import project4 from "@/assets/blender/project4.png"
import { BlackTab } from "@/components/UI/BlackTab/BlackTab";
import { ProjectsRow } from "@/components/UI/ProjectsRow/ProjectsRow";

export const WhatToLearn = () => {
  return (
    <div className={styles.section}>
        <BlackTab className={styles.tab}>
            <h2 className="subtitle">ЧТО МЫ ИЗУЧИМ ?</h2>
            <p>Мы изучим базовые принципы моделирования, инструменты анимирования, изучим MODELING, SHADING, BLENDER - UV EDITING, режимы рендера и многое другое.</p>
            <h3>ПРОЕКТЫ НАШИХ УЧЕНИКОВ</h3>
            <ProjectsRow projects={[project1, project2, project3, project4]}/>
        </BlackTab>
    </div>
  )
}
