import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import styles from "./ProjectsRow.module.scss";
import cn from 'clsx';

interface ProjectsRowProps {
    projects: StaticImageData[];
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
                key={project.src}
            >
                <Image
                    src={project}
                    alt={`Проект номер ${idx + 1}`}
                />
            </div>
        )}
    </div>
  )
}
