"use client";

import { errorCatch } from "@/app/api/helper";
import { CourseService } from "@/services/course/course.service";
import { FC, useEffect, useState } from "react";
import { ButtonVariantsEnum } from "../UI/Button/Button"
import { EducationVariantEnum, Tab } from "../UI/Tab/Tab"
import styles from "./Prices.module.scss"
import cn from 'clsx'
import localFont from "next/font/local";

interface PricesProps {
    courseName?: string;
    variant?: "orange" | "grey";
    isBlack?: boolean;
    onClick?: (index: number) => void;
}

const medium = localFont({src: "../../assets/fonts/Montserrat-Medium.woff2"});
const bold = localFont({src: "../../assets/fonts/Montserrat-Bold.woff2"});

export const Prices:FC<PricesProps> = ({variant = "grey", courseName, onClick}) => {
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
            setPrices([...data.prices.sort((a, b) => a.id - b.id)]);
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
                <h2 className={cn("subtitle", bold.className)}>Абонементы</h2>
                <h3 className={medium.className}>1 месяц</h3>
            </div>
            <div className={styles.wrapper}>
                {prices.map((price, idx) => 
                    <Tab 
                        price={price.price} 
                        description={price.description}
                        variant={idx % 2 ? ButtonVariantsEnum.grey : ButtonVariantsEnum.orange}
                        title={price.title}
                        key={price.title + idx}
                        hours={price.hours}
                        exercises={price.exercises}
                        educationVariant={price.educationVariant}
                        className={styles.tab}
                        isBlack={variant === "orange" && idx !== 1}
                        onClick={() => onClick ? onClick(idx) : null}
                        index={idx}
                    />
                )}
            </div>
        </div>
      </section>
    )
}