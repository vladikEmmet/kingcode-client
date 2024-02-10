"use client";

import { errorCatch } from "@/app/api/helper";
import { AboutUsService } from "@/services/aboutUs/aboutUs.service";
import styles from "./AboutUs.module.scss";
import { Carousel } from "./Carousel/Carousel";
import localFont from "next/font/local";
import cn from 'clsx';
import { useEffect, useState } from "react";

const fetchSlides = async() => {
  try {
    const data = await AboutUsService.getAll();
    return data;
  } catch(err) {
    console.log(errorCatch(err));
  }
}

const bold = localFont({src: "../../assets/fonts/Montserrat-Bold.woff2"});

export default function AboutUs() {
  const [slides, setSlides] = useState<any>([]);
  useEffect(() => {
    const fetched = async() => {
      const data = await fetchSlides();
      setSlides(data);
    }
    try {
      fetched();
    } catch(err) {
      console.log(err);
    }
  }, [])

  return (
    <section className={styles.section} id="about-us">
        <div className="container">
            <h2 className={cn("subtitle", bold.className)}>О нас</h2>
            {!slides?.length ?
              <h3 className={styles.empty}>Мы скоро вернемся с новостями!</h3> :
              <Carousel 
                slidesToScroll={1}
                slidesToShow={1}
                elements={slides}
              />
            }
            <div className={styles.text}>
              <p>{"Добро пожаловать в «KingCode» - IT-школу для детей и подростков в онлайн-формате!"}</p>
              <p>{"Команда «KingCode» состоит из профессионалов своего дела, работающих в различных сферах IT.  Опираясь на наши знания и опыт, мы создали обучающие курсы по математике, программированию и 3D-моделированию, которые идеально подойдут для детей в возрасте от 5 до 14 лет."}</p>
              <p>{"Для того, чтобы определиться с выбором направления и познакомиться с преподавателями, мы предлагаем каждому ученику пройти бесплатный пробный урок по каждому нашему направлению. После занятия вы получите подробную информацию об интересах и способностях вашего ребенка. Наши рекомендации помогут вам определиться с выбором направления для вашего ребенка."}</p>
              <p>{"Так же, так как  «KingCode» - это онлайн-школа, ваш ребенок сможет учиться из любой точки мира в любое удобное время!"}</p>
              <p>{"Наши преподаватели молоды, однако их опыт работы и преподавания уже впечатляет! Мы убеждены, что молодые специалисты - идеальные преподаватели для детей и подростков, так как они остаются “на одной волне” с учениками, лучше их понимают, отчего и сами ученики становятся более заинтересованными в обучении."}</p>
              <p>{"Мы искренне любим то, что мы делаем и ждем каждого в «KingCode»!"}</p>
            </div>
        </div>
    </section>
  )
}
