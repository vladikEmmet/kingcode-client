"use client";

import { routes } from "@/routes"
import Image from "next/image"
import Link from "next/link"
import styles from "./Courses.module.scss"
import localFont from 'next/font/local'
import { useModal } from "@/store/store"

const berlin = localFont({src: "../../assets/fonts/BRLNSDB.woff"})

export const Courses = () => {
    const {append} = useModal();
    
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
                                        alt={course.title}
                                        fill={true}
                                    />
                                    <h1 className={berlin.className}>
                                        {course.title}
                                    </h1>
                                </li>
                            </Link> ) : (
                                <div className={styles.wrapper} key={course.title}>
                                    <li onClick={() => append(
                                        <ul className={styles["modal-list"]}>
                                            {course.subEl?.map(sub => 
                                                <Link href={sub.link || "/"} onClick={() => append(null)} key={sub.title}>
                                                    <li>
                                                        <Image 
                                                            src={sub.img}
                                                            alt={sub.title}
                                                            fill={true}
                                                        />
                                                        <h1 className={berlin.className}>{sub.title}</h1>
                                                    </li>
                                                </Link>
                                            )}
                                        </ul>
                                    )}>
                                        <Image
                                            src={course.img}
                                            alt={course.title}
                                            fill={true}
                                        />
                                        <h1 className={berlin.className}>{course.title}</h1>
                                    </li>
                                </div>
                            ) 
                    )}
                </ul>
            </div>
        </section>
    )
}