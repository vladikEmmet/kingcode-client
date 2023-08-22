"use client";

import { errorCatch } from "@/app/api/helper";
import { CourseService } from "@/services/course/course.service";
import { Montserrat } from "next/font/google"
import { FC, useEffect, useState } from "react";
import { ButtonVariantsEnum } from "../UI/Button/Button"
import { EducationVariantEnum, Tab } from "../UI/Tab/Tab"
import styles from "./Prices.module.scss"
import cn from 'clsx'

interface PricesProps {
    courseName?: string;
    variant?: "orange" | "grey";
    isBlack?: boolean;
}

export const Prices:FC<PricesProps> = ({variant = "grey", courseName}) => {
    const [prices, setPrices] = useState([
        {
            title: "Групповые занятия",
            price: "25 000",
            educationVariant: EducationVariantEnum.group,
            exercises: 4,
            hours: "1, 5",
        },
        {
            title: "Премиум-подписка",
            description: "Посещение всех направлений",
            exercises: 12,
            hours: "1, 5",
            educationVariant: EducationVariantEnum.group,
            price: "50 000",

        },
        {
            title: "Индивидуальные занятия",
            educationVariant: EducationVariantEnum.individual,
            exercises: 4,
            hours: "1, 5",
            price: "40 000",
        }
    ]);

    useEffect(() => {
        const fetchPrices = async () => {
            if(!courseName) return;
            const data = await CourseService.get(courseName);
            setPrices([...data.prices]);
        }

        try {
            fetchPrices();
        } catch(err) {
            console.log(errorCatch(err));
        }
    }, [])

    return (
      <section className={cn(styles.section, styles[variant])} id="prices">
        <div className="container">
            <div className={cn(styles.title, styles[`title-${variant}`])}>
                <h2 className="subtitle">Абонементы</h2>
                <h3>1 месяц</h3>
            </div>
            <div className={styles.wrapper}>
                {prices.map((price, idx) => 
                    <Tab 
                        price={price.price} 
                        description={price.description}
                        variant={idx % 2 ? ButtonVariantsEnum.grey : ButtonVariantsEnum.orange}
                        title={price.title}
                        key={price.title}
                        hours={price.hours}
                        exercises={price.exercises}
                        educationVariant={price.educationVariant}
                        className={styles.tab}
                        isBlack={variant === "orange" && idx !== 1}
                    />
                )}
            </div>
        </div>
      </section>
    )
}