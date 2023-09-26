import { MainScreen } from '@/components/MainScreen/MainScreen'
import mainScreen from "@/assets/mainScreen.png"
import { Courses } from '@/components/Courses/Courses'
import { Prices } from '@/components/Prices/Prices'
import { FormSection } from '@/components/FormSection/FormSection'
import {Reviews} from '@/components/Reviews/Reviews'
import { Adventages } from '@/components/Adventages/Adventages'
import AboutUs from '@/components/AboutUs/AboutUs'
import { Metadata } from 'next'
import { ReviewService } from '@/services/review/review.service'
import { errorCatch } from './api/helper'
import { AboutUsService } from '@/services/aboutUs/aboutUs.service'

export const metadata: Metadata = {
  title: `Лучшие онлайн курсы для детей и подростков. IT-школа "King Code"`,
  description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
  keywords: ["IT-школа", "Онлайн образование", "Онлайн курсы", "King Code", "Программирование", "3D-моделирование", "Математика"],
  twitter: {
    title: `Лучшие онлайн курсы для детей и подростков. IT-школа "King Code"`,
    description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
  }
}

const fetchReviews = async() => {
  try {
    const reviews = await ReviewService.getAll();
    return reviews;
  } catch(err) {
    console.log(err);
  }
}

export default async function Home() {
  const reviews = await fetchReviews();
  
  return (
    <>
      <MainScreen img={mainScreen} scrollTarget='courses' text="small" buttonText='Выбрать направление'>
        НАЧНИ СВОЙ ПУТЬ В <span className="highlighted">IT</span> ВМЕСТЕ С <span className="highlighted">KingCode</span>
      </MainScreen>
      <Courses />
      <AboutUs />
      <Adventages />
      <Reviews reviews={reviews}/>
      <Prices />
      <FormSection />
    </>
  )
}
