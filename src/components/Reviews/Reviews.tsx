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
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReviewData } from "@/services/review/review.types";

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

export default function Reviews() {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const {append, children} = useModal();
  const [elementsPerRow, setElementsPerRow] = useState(3);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const syncCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    variableWidth: true,
    adaptiveHeight: true,
    draggable: false,
    pauseOnHover: false,
  }

  const onClick = useCallback((index: number) => {
    append(
      <Slider {...carouselSettings} initialSlide={index || 0}>
        {reviews.map((review, idx) => 
          <ReviewItem 
            authorName={review.authorName}
            authorImg={review.authorImg}
            text={review.text}
            key={review.id}
            index={idx}
          />
        )}
      </Slider>
    )
  }, [reviews]);
  
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
      <h2 className={montserrat.className}>Отзывы</h2>
        <div className={styles.grid}>
          {
            (!reviews || reviews.length <= 0) ? <p className={cn(montserrat.className, styles.empty)}>Отзывы скоро появятся</p> : (
              <>
                <Slider {...syncCarouselSettings} rtl={true} className={styles.slider}>
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
                <Slider {...syncCarouselSettings} className={styles.slider}>
                  {reviews.slice(elementsPerRow).map((review, idx) =>
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
