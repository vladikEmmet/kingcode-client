"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./Carousel.module.scss";
import { FC, useMemo, useRef, useState } from 'react';
import { AboutUsData } from '@/services/aboutUs/aboutUs.types';
import Image from 'next/image';

interface CarouselProps {
  elements: AboutUsData[];
  slidesToShow: number;
  slidesToScroll: number;
  settings?: any;
}

export const Carousel: FC<CarouselProps> = ({elements, slidesToShow, slidesToScroll, settings}) => {
  const curSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    ...settings,
  }
  const [curIdx, setCurIdx] = useState(0);
  
  const vidRef = useRef();


  const carouselSlides = useMemo(() => elements?.map((slide, idx) => 
    slide.type === "img" ?
      <Image 
        src={slide.link}
        key={slide.id}
        className={styles.img}
        alt={`Слайд номер ${idx + 1}`}
        height={500}
        width={500}
        data-index={idx}
      /> :
      <div className={styles["video-container"]} key={slide.id}>
        <video controls width="100%" height={500}>
          <source src={slide.link} type="video/mp4"/>
        </video>
      </div>
  ), [])

  return (
    <div className="carousel">
      <Slider {...curSettings} dotsClass="carousel-dots" swipeToSlide={true} className={styles.slider}>
          {carouselSlides}
      </Slider>
    </div>
  )
}
