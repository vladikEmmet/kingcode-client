import { errorCatch } from "@/app/api/helper";
import { AboutUsService } from "@/services/aboutUs/aboutUs.service";
import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./AboutUs.module.scss"
import { Carousel } from "./Carousel/Carousel";

const fetchSlides = async() => {
  try {
    const data = await AboutUsService.getAll();
    return data;
  } catch(err) {
    console.log(errorCatch(err));
  }
}

export default async function AboutUs() {
  const slides = await fetchSlides();

  return (
    <section className={styles.section} id="about-us">
        <div className="container">
            <h2>О нас</h2>
            {!slides?.length ?
              <h3 className={styles.empty}>Мы скоро вернемся с новостями!</h3> :
              <Carousel 
                slidesToScroll={1}
                slidesToShow={1}
                elements={slides}
              />
            }
        </div>
    </section>
  )
}
