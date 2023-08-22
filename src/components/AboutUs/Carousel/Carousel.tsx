"use client";

import Slider from 'react-slick';
import styles from "./Carousel.module.scss";
import { FC, useCallback, useState } from 'react';
import { AboutUsData } from '@/services/aboutUs/aboutUs.types';
import Image from 'next/image';
import { NextArrow } from '@/components/UI/Arrows/NextArrow/NextArrow';
import { PrevArrow } from '@/components/UI/Arrows/PrevArrow/PrevArrow';
import { useModal } from '@/store/store';
import { BsFullscreen } from 'react-icons/bs';

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
    fade: true,
    autoplaySpeed: 3000,
    draggable: false,
    beforeChange: (_: number, index: number) => {
      handleSlideChange(index);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    ...settings,
  }
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const {append} = useModal();
  const onPause = useCallback(() => setIsAutoPlay(true), []);
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  }
  const onClick = (slide: AboutUsData) => {
    if(slide.type === "img") {
      append(<Image src={slide.link} alt="Фото" className={styles["full-img"]} width={200} height={200}/>, 
        {
          height: "100vh", width: "100%", backgroundColor: "transparent", boxShadow: "none", objectFit: "cover"
        }, "white"
      )
    }
  };

  return (
    <div className="carousel">
      <Slider {...curSettings} dotsClass="carousel-dots" swipeToSlide={true} className={styles.slider} autoplay={isAutoPlay}>
          {elements?.map((slide, idx) => 
            <div key={slide.id} onClick={(e) => onClick(slide)}>
              {slide.type === "img" ?
                (
                  <div className={styles["img-container"]}>
                    <Image 
                      src={slide.link}
                      className={styles.img}
                      alt={`Слайд номер ${idx + 1}`}
                      height={493}
                      width={870}
                    />
                    <BsFullscreen />

                  </div>
                ) : (
                  <video controls={currentSlide === idx} width="100%" height={500} onPlay={() => setIsAutoPlay(false)} onPause={onPause}>
                    <source src={slide.link} type="video/mp4"/>
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
