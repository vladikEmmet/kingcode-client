"use client";

import styles from "./Reviews.module.scss"
import { ReviewItem } from "./ReviewItem/ReviewItem";
import cn from 'clsx'
import { useCallback, useEffect, useRef, useState } from "react";
import { useModal } from "@/store/store";
import Slider from "react-slick";
import { ReviewData } from "@/services/review/review.types";
import { NextArrow } from "../UI/Arrows/NextArrow/NextArrow";
import { PrevArrow } from "../UI/Arrows/PrevArrow/PrevArrow";
import { defineSizes } from "@/utils/defineSizes";
import { Loader } from "../UI/Loader/Loader";
import { SingleReview } from "./SingleReview/SingleReview";
import localFont from "next/font/local";
import { ReviewService } from "@/services/review/review.service";
import { errorCatch } from "@/app/api/helper";

const bold = localFont({src: "../../assets/fonts/Montserrat-Bold.woff2"});

export const Reviews = () => {
  const [mobile, setMobile] = useState(false);
  const {append} = useModal();
  const [elementsPerRow, setElementsPerRow] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [firstRow, setFirstRow] = useState<React.ReactNode[]>([]);
  const [secondRow, setSecondRow] = useState<React.ReactNode[]>([]);
  const [allRows, setAllRows] = useState<React.ReactNode[]>([]);
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const desktopCarouselRef = useRef<Slider>(null);

  useEffect(() => {
    const {width} = defineSizes();
    if(width <= 575) setMobile(true);
  }, [])

  // Fetch reviews

  useEffect(() => {
    const fetchReviews = async() => {
      try {
        const reviews = await ReviewService.getAll();
        return reviews;
      } catch(err) {
        console.log(err);
      }
    }
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchReviews();
        if (data) {
          setReviews(data);
        }
      } catch(err) {
        console.log(errorCatch(err))
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])


  const carouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px", 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false, 
        }
      }
    ]
  };

  const syncCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4500,
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
          pauseOnHover: true,
        }
      },
    ]
  };

  const onClick = useCallback((index: number, isFirst: boolean = true) => {
    if(mobile) return null;
    
    append(
      <div className={styles["carousel-container"]}>
        <Slider {...carouselSettings} initialSlide={isFirst ? index : elementsPerRow + index || 0} className={styles["modal-slider"]} slide={styles["review-specified"]}>
          {reviews?.map((review) => 
            <SingleReview 
              authorName={review.authorName}
              authorImg={review.authorImg && `${process.env.NEXT_PUBLIC_SERVER_URL}${review.authorImg}`}
              text={review.text}
              key={review.id}
              className={styles["review-specified"]}
            />
          )}
        </Slider>
      </div>,
      {minHeight: "100vh", width: "100%", backgroundColor: "transparent", boxShadow: "none", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"},
      "white"
    )
  }, [reviews, append, mobile, elementsPerRow]);

  useEffect(() => {
    setIsLoading(true);
    const curFirstRow = reviews?.slice(0, elementsPerRow).map((review, idx) =>
      <ReviewItem
        authorName={review.authorName}
        authorImg={review.authorImg && `${process.env.NEXT_PUBLIC_SERVER_URL}${review.authorImg}`}
        text={review.text}
        key={review.id}
        onClick={onClick}
        index={idx}
      />
    );
    setFirstRow(curFirstRow || []);
    const curSecondRow = reviews?.slice(elementsPerRow).map((review, idx) =>
      <ReviewItem
        authorName={review.authorName}
        authorImg={review.authorImg && `${process.env.NEXT_PUBLIC_SERVER_URL}${review.authorImg}`}
        text={review.text}
        key={review.id}
        onClick={() => onClick(idx, false)}
        index={idx}
      />
    );
    setSecondRow(curSecondRow || []);
    setIsLoading(false);
  }, [reviews]);
  
  
  return (
    <section className={styles.section} id="reviews">
      <h2 className={cn("subtitle", bold.className)}>Отзывы</h2>
      { isLoading ? <Loader /> : (
        <div className={styles.grid}>
          {
            (!reviews || reviews.length <= 0) ? <p className={styles.empty}>Отзывы скоро появятся</p> : (
              <>
                <Slider {...syncCarouselSettings} rtl={true} ref={desktopCarouselRef} className={cn(styles.slider, styles["slider-desktop"])}>
                  {firstRow}
                </Slider>
                <Slider  
                  className={cn(styles.slider, styles["slider-mobile"])}
                  slide={styles.slide}
                  {...syncCarouselSettings}
                >
                  {mobile ? [...secondRow, ...firstRow] : secondRow}
                </Slider>
              </>
            )
          }
        </div>
      )}
    </section>
  )
}
