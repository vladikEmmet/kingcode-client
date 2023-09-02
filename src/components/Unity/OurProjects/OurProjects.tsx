import styles from "./OurProjects.module.scss";
import project1 from "@/assets/unity/project1.png";
import project2 from "@/assets/unity/project2.png";
import project3 from "@/assets/unity/project3.png";
import project4 from "@/assets/unity/project4.png";
import { ProjectsRow } from "@/components/UI/ProjectsRow/ProjectsRow";

export const OurProjects = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className="subtitle">Проекты наших учеников</h2>
            <ProjectsRow projects={[project1, project2, project3, project4]} variant="grey"/>
        </div>
    </section>
  )
}
