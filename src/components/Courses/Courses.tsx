import { routes } from "@/routes"
import Image from "next/image"
import Link from "next/link"
import styles from "./Courses.module.scss"
import localFont from 'next/font/local'

const berlin = localFont({src: "../../assets/fonts/BRLNSDB.woff"})

export const Courses = () => {
    return (
        <section className={styles.container} id="courses">
            <ul>
                {routes.map((course, idx) => 
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
                    </Link>
                )}
            </ul>
        </section>
    )
}