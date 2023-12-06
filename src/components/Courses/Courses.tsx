"use client";

import { routes } from "@/routes"
import Image from "next/image"
import Link from "next/link"
import styles from "./Courses.module.scss"
import localFont from 'next/font/local'
import { useModal } from "@/store/store"

const berlin = localFont({src: "../../assets/fonts/BRLNSDB.woff"});

export const Courses = () => {
    const {append} = useModal();
    
    const onClick = () => {
        document.body.classList.remove("no-scroll");
        document.documentElement.classList.remove("no-scroll");
        append(null);
    }
    
    return (
        <section className={styles.section} id="courses">
            <div className="container">
                <ul>
                    {routes.map((course) => 
                        !course.subEl ? (
                            <Link href={course.link || "/"} key={course.title}>
                                <li>
                                    <Image 
                                        src={course.img} 
                                        alt={`${course.title} - изображение`}
                                        fill={true}
                                        className={styles.desktop}
                                    />
                                    <Image 
                                        src={course.mobileImg || ""}
                                        alt={`${course.title} - изображение`}
                                        fill={true}
                                        className={styles.mobile}
                                    />
                                    <h2 className={berlin.className}>
                                        {course.title}
                                    </h2>
                                </li>
                            </Link> ) : (
                                <div className={styles.wrapper} key={course.title}>
                                    <li onClick={() => append(
                                        <ul className={styles["modal-list"]}>
                                            {course.subEl?.map(sub => 
                                                <Link href={sub.link || "/"} onClick={onClick} key={sub.title}>
                                                    <li className={sub.isRightText ? styles.right : ""}>
                                                        <Image 
                                                            src={sub.img} 
                                                            alt={`${course.title} - изображение`}
                                                            fill={true}
                                                            className={styles.desktop}
                                                        />
                                                         <Image 
                                                            src={sub.mobileImg || ""}
                                                            alt={`${course.title} - изображение`}
                                                            fill={true}
                                                            className={styles.mobile}
                                                        />
                                                        <h2 className={berlin.className}>{sub.title}</h2>
                                                    </li>
                                                </Link>
                                            )}
                                        </ul>
                                    )}>
                                        <Image 
                                            src={course.img} 
                                            alt={`${course.title} - изображение`}
                                            fill={true}
                                            className={styles.desktop}
                                        />
                                         <Image 
                                            src={course.mobileImg || ""}
                                            alt={`${course.title} - изображение`}
                                            fill={true}
                                            className={styles.mobile}
                                        />
                                        <h2 className={berlin.className}>{course.title}</h2>
                                    </li>
                                </div>
                            ) 
                    )}
                </ul>
            </div>
        </section>
    )
}