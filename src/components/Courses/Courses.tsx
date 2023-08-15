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
                    {routes.map((course, idx) => 
                        <Link href={course.link || "/"} key={course.title} onClick={() => console.log("click")}>
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
                        </Link>
                    )}
                </ul>
            </div>
        </section>
    )
}