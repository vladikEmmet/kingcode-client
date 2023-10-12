import styles from "./OurProjects.module.scss";
import project1 from "@/assets/unity/project1.png";
import project2 from "@/assets/unity/project2.png";
import project3 from "@/assets/unity/project3.png";
import project4 from "@/assets/unity/project4.png";
import { ProjectsRow } from "@/components/UI/ProjectsRow/ProjectsRow";
import cn from 'clsx';
import localFont from "next/font/local";

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

const projects = [
  {
    img: project1,
    description: "Имитация домино"
  },
  {
    img: project2,
    description: "Шутер"
  },
  {
    img: project3,
    description: "Раннер"
  },
  {
    img: project4,
    description: "Кликер"
  }
]

export const OurProjects = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={cn("subtitle", bold.className)}>Проекты наших учеников</h2>
            <ProjectsRow projects={projects} variant="grey"/>
        </div>
    </section>
  )
}
