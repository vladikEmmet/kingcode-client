"use client"

import { Button, ButtonVariantsEnum } from "@/components/UI/Button/Button";
import Link from "next/link";
import { SlidesItem } from "./SlidesItem/SlidesItem";
import styles from "./SlidesList.module.scss";
import { useEffect, useState } from "react";
import { AboutUsData } from "@/services/aboutUs/aboutUs.types";
import { errorCatch } from "@/app/api/helper";
import { AboutUsService } from "@/services/aboutUs/aboutUs.service";

export const SlidesList = () => {
  const [slides, setSlides] = useState<AboutUsData[]>([]);
    
  // Fetch slides

  useEffect(() => {
    const getSlides = async() => {
        try {
            const data = await AboutUsService.getAll();
            return data;
        } catch(err) {
            console.log(err);
        }
    }

    const fetchSlides = async() => {
        try {
            const data = await getSlides();
            if(data) {
                setSlides(data);
            }
        } catch(err) {
            console.log(errorCatch(err));
        }
    }

    fetchSlides();
  }, [])
  
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
