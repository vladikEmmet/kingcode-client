import { Montserrat } from "next/font/google";
import Image from "next/image";
import styles from "./OurProjects.module.scss";
import project1 from "@/assets/unity/project1.png";
import project2 from "@/assets/unity/project2.png";
import project3 from "@/assets/unity/project3.png";
import project4 from "@/assets/unity/project4.png";
import project5 from "@/assets/unity/project5.png";
import project6 from "@/assets/unity/project6.png";

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

export const OurProjects = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={montserrat.className}>Проекты наших учеников</h2>
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
        </div>
    </section>
  )
}
