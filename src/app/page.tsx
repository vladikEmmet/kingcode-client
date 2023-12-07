import { MainScreen } from '@/components/MainScreen/MainScreen'
import mainScreen from "@/assets/mainScreen.png"
import { Courses } from '@/components/Courses/Courses'
import { Prices } from '@/components/Prices/Prices'
import { FormSection } from '@/components/FormSection/FormSection'
import {Reviews} from '@/components/Reviews/Reviews'
import { Adventages } from '@/components/Adventages/Adventages'
import AboutUs from '@/components/AboutUs/AboutUs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Лучшие онлайн курсы для детей и подростков. IT-школа "King Code"`,
  description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
  keywords: ["IT-школа", "Онлайн образование", "Онлайн курсы", "King Code", "Программирование", "3D-моделирование", "Математика"],
  twitter: {
    title: `Лучшие онлайн курсы для детей и подростков. IT-школа "King Code"`,
    description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
  },
  alternates: {
    canonical: "https://kingcodeschool.com",
  },
  openGraph: {
    title: `Лучшие онлайн курсы для детей и подростков. IT-школа "King Code"`,
    description: `"King Code" - онлайн-школа для детей в возрасте от 5 до 15 лет. У нас Вы легко сможете изучить математику, программирование и 3D-моделирование с опытными преподавателями. 0% скуки, 100% драйва.`,
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "King Code School",
    type: "website",
    locale: "ru_KZ",
    alternateLocale: ["ru_RU", "ru_US"],
  },
}

export default async function Home() {
  const jsonLd = {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "3Д-Моделирование",
      "item": "https://kingcodeschool.com/modeling"  
    },{
      "@type": "ListItem", 
      "position": 2, 
      "name": "Unity",
      "item": "https://kingcodeschool.com/unity"  
    },{
      "@type": "ListItem", 
      "position": 3, 
      "name": "Scratch",
      "item": "https://kingcodeschool.com/scratch"  
    },{
      "@type": "ListItem", 
      "position": 4, 
      "name": "Математика",
      "item": "https://kingcodeschool.com/math"  
    }]
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainScreen img={mainScreen} scrollTarget='courses' text="small" buttonText='Выбрать направление'>
        НАЧНИ СВОЙ ПУТЬ В <span className="highlighted">IT</span> ВМЕСТЕ С <span className="highlighted">KingCode</span>
      </MainScreen>
      <Courses />
      <AboutUs />
      <Adventages />
      <Reviews />
      <Prices />
      <FormSection />
    </>
  )
}
