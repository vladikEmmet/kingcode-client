"use client";

import { ReviewService } from "@/services/review/review.service"
import styles from "./Reviews.module.scss"
import { ReviewItem } from "./ReviewItem/ReviewItem";
import { Montserrat } from "next/font/google";
import cn from 'clsx'
import { useCallback, useEffect, useState } from "react";
import { errorCatch } from "@/app/api/helper";
import { useModal } from "@/store/store";
import Slider from "react-slick";
import { ReviewData } from "@/services/review/review.types";
import { NextArrow } from "../UI/Arrows/NextArrow/NextArrow";
import { PrevArrow } from "../UI/Arrows/PrevArrow/PrevArrow";
import { defineSizes } from "@/utils/defineSizes";

export default function Reviews() {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [mobile, setMobile] = useState(false);
  const {append} = useModal();
  const [elementsPerRow, setElementsPerRow] = useState(3);

  useEffect(() => {
    const {width} = defineSizes();
    console.log(width);
    if(width <= 575) setMobile(true);
  }, [])

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px", 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const mobileSettings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true, 
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  }

  const syncCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    variableWidth: true,
    adaptiveHeight: true,
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          variableWidth: false,
          swipeToSlide: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          variableWidth: false,
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          centerMode: true,
          centerPadding: "0px",
        }
      },
    ]
  };

  const onClick = useCallback((index: number) => {
    if(mobile) return null;
    
    append(
      <div className={styles["carousel-container"]}>
        <Slider {...carouselSettings} initialSlide={index || 0} className={styles["modal-slider"]}>
          {reviews.map((review, idx) => 
            <ReviewItem 
              authorName={review.authorName}
              authorImg={review.authorImg}
              text={review.text}
              key={review.id}
              index={idx}
              className={styles["review-specified"]}
            />
          )}
        </Slider>
      </div>
    )
  }, [reviews]);
  
  const getMobileSettings = () => mobile ? mobileSettings : syncCarouselSettings;
  
  useEffect(() => {
    const getReviews = async() => {
      const reviews = await ReviewService.getAll();
      setElementsPerRow(Math.round(reviews.length / 2));
      setReviews(reviews);
    }

    try {
      getReviews();
    } catch(err) {
      console.log(errorCatch(err));
    }
  }, [])
  
  return (
    <section className={styles.section} id="reviews">
      <h2 className="subtitle">Отзывы</h2>
        <div className={styles.grid}>
          {
            (!reviews || reviews.length <= 0) ? <p className={styles.empty}>Отзывы скоро появятся</p> : (
              <>
                <Slider {...syncCarouselSettings} rtl={true} className={cn(styles.slider, styles["slider-desktop"])}>
                  {reviews.slice(0, elementsPerRow).map((review, idx) =>
                    <ReviewItem
                      authorName={review.authorName}
                      authorImg={review.authorImg}
                      text={review.text}
                      key={review.id}
                      onClick={onClick}
                      index={idx}
                    />
                  )}
                </Slider>
                <Slider  
                  className={cn(styles.slider, "slider-mobile")}
                  {...getMobileSettings()}
                  slide={styles.slide}
                >
                  {reviews.slice(mobile ? 0 : elementsPerRow).map((review, idx) =>
                    <ReviewItem 
                      authorName={review.authorName}
                      authorImg={review.authorImg}
                      text={review.text}
                      key={review.id}
                      onClick={onClick}
                      index={idx}
                    />
                  )}
                </Slider>
              </>
            )
          }
        </div>
    </section>
  )
}
