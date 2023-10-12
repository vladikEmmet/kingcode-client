import styles from "./OurProjects.module.scss";
import project1 from "@/assets/scratch/project1.png";
import project2 from "@/assets/scratch/project2.png";
import project3 from "@/assets/scratch/project3.png";
import project4 from "@/assets/scratch/project4.png";
import { ProjectsRow } from "@/components/UI/ProjectsRow/ProjectsRow";
import localFont from "next/font/local";
import cn from 'clsx';

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

const projects = [
  {
    img: project1,
    description: "Игра-ловилка"
  },
  {
    img: project2,
    description: "Раннер"
  },
  {
    img: project3,
    description: "Кликер"
  },
  {
    img: project4,
    description: `Игра "Танчики"`
  }
];

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
