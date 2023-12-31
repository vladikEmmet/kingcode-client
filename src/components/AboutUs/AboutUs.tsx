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
              <p>{"На связи команда «KingCode» - самая лучшая IT-школа для детей онлайн (точно не кликбейт)!"}</p>
              <p>{"Мы верим в образование. Каждый из нашей команды проходил кучу курсов, просмотрел сотни часов туториалов на YouTube и просто «методом тыка» (без этого никак) осваивал ту или иную профессию. Чтобы вашему ребёнку не пришлось тратить вагон и тележку времени, перебирая терабайты информации разной степени полезности, мы собрали наши знания воедино, разложили всё по полочкам, упаковали всё это в игровую форму, нашли не только компетентных, но и весёлых людей и сделали их нашими преподавателями. Теперь мы выкатываем наши курсы по математике, программированию и 3D-моделированию вам."}</p>
              <p>{"Мы в «KingCode» знаем, что никогда не поздно и никогда не рано начинать свой путь в IT. Поэтому неважно, сколько лет нашим будущим студентам, нам есть, что предложить любой возрастной категории: от мала до велика."}</p>
              <p>{"Нас абсолютно точно не остановят оценки, которые получают наши студенты в школе, нам не важна страна их проживания, наши преподаватели найдут общий язык с любым: от интровертной девочки Уэнздей до самого общительного парня на блоке. Каждому необходим индивидуальный подход, и мы гарантируем его."}</p>
              <p>{"Нашим маскотом является горилла по имени Code. Он сильный, уверенный и счастливый. Вот и мы стараемся помочь нашим студентам сделать первые шаги на пути к тому, чтобы стать сильными, уверенными в своих скиллах и знаниях специалистами. Ведь только, занимаясь любимым, востребованным у общества, делом, можно по-настоящему кайфовать от каждого дня и стать счастливым человеком. Таков путь!"}</p>
            </div>
        </div>
    </section>
  )
}
