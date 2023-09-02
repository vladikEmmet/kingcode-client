"use client";

import Slider, { Settings } from 'react-slick';
import styles from "./Carousel.module.scss";
import { FC, useCallback, useState } from 'react';
import { AboutUsData } from '@/services/aboutUs/aboutUs.types';
import Image from 'next/image';
import { NextArrow } from '@/components/UI/Arrows/NextArrow/NextArrow';
import { PrevArrow } from '@/components/UI/Arrows/PrevArrow/PrevArrow';

interface CarouselProps {
  elements: AboutUsData[];
  slidesToShow: number;
  slidesToScroll: number;
  settings?: any;
}

export const Carousel: FC<CarouselProps> = ({elements, slidesToShow, slidesToScroll, settings}) => {
  
  const curSettings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow,
    slidesToScroll,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    draggable: false,
    beforeChange: (_: number, index: number) => {
      handleSlideChange(index);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
        }
      },
    ],
    ...settings,
  }
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const onPause = useCallback(() => setIsAutoPlay(true), []);
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  }

  return (
    <div className="carousel">
      <Slider {...curSettings} dotsClass="carousel-dots" swipeToSlide={true} className={styles.slider} autoplay={isAutoPlay}>
          {elements?.map((slide, idx) => 
            <div key={slide.id} className={styles["slide-container"]}>
              {slide.type === "img" ?
                (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER_URL}${slide.link}`}
                    className={styles.img}
                    alt={`Слайд номер ${idx + 1}`}
                    height={493}
                    width={870}
                  />
                ) : (
                  <video controls={currentSlide === idx} width="100%" height={500} onPlay={() => setIsAutoPlay(false)} onPause={onPause} onClick={() => console.log("click")}>
                    <source src={`${process.env.NEXT_PUBLIC_SERVER_URL}${slide.link}`} type="video/mp4"/>
                    Ваш браузер не поддерживает видео.
                  </video>
                )
              }
            </div> 
          )}
      </Slider>
    </div>
  )
}
