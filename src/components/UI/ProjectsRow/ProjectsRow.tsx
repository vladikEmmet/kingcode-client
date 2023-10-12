import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import styles from "./ProjectsRow.module.scss";
import cn from 'clsx';

interface IProject {
    img: StaticImageData;
    description?: string;
}

interface ProjectsRowProps {
    projects: IProject[];
    variant?: "orange" | "grey";
}

export const ProjectsRow: FC<ProjectsRowProps> = ({projects, variant = "orange"}) => {
  return (
    <div className={styles.images}>
        {projects.map((project, idx) => 
            <div 
                className={cn(styles["image-container"], {
                    [styles.grey]: variant === "grey"
                })}
                key={project.img.src}
            >
                <Image
                    src={project.img}
                    alt={`Проект № ${idx + 1}`}
                    width={100}
                    height={100}
                    placeholder="blur"
                />
                {project.description && <p>{project.description}</p>}
            </div>
        )}
    </div>
  )
}
