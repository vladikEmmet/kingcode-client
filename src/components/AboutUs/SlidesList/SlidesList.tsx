"use client"

import { errorCatch } from "@/app/api/helper";
import { Button, ButtonVariantsEnum } from "@/components/UI/Button/Button";
import { AboutUsData } from "@/services/aboutUs/aboutUs.types";
import Link from "next/link";
import { FC, useState } from "react";
import { SlidesItem } from "./SlidesItem/SlidesItem";
import styles from "./SlidesList.module.scss";

interface SlidesListProps {
    slides: AboutUsData[];
}

export const SlidesList: FC<SlidesListProps> = ({slides}) => {
  return (
    <div className={styles.container}>
        <Link href="/admin/about-us/create">
            <Button variant={ButtonVariantsEnum.orange} className="admin-btn">Создать</Button>
        </Link>
        <h1>Список слайдов</h1>
        <div className={styles.slides}>
            {
                slides.length <= 0 ? <h1>Пусто...</h1> : (
                    <> 
                        {
                            slides.map((slide) => 
                                <SlidesItem slide={slide} key={slide.id}/>
                            )
                        }
                    </> 
                )
            }
        </div>
    </div>
  )
}
