import { MainScreen } from '@/components/MainScreen/MainScreen'
import mainScreen from "@/assets/mainScreen.png"
import { Courses } from '@/components/Courses/Courses'
import { Prices } from '@/components/Prices/Prices'
import { FormSection } from '@/components/FormSection/FormSection'
import Reviews from '@/components/Reviews/Reviews'
import { Adventages } from '@/components/Adventages/Adventages'
import AboutUs from '@/components/AboutUs/AboutUs'

export default function Home() {
  return (
    <>
      <MainScreen img={mainScreen} scrollTarget='courses' text="small">
        НАЧНИ СВОЙ ПУТЬ В <span className="highlighted">IT</span> ВМЕСТЕ С <span className="highlighted">KingCode</span>
      </MainScreen>
      <Courses />
      {/* @ts-expect-error */}
      <AboutUs />
      <Adventages />
      <Reviews />
      <Prices />
      <FormSection />
    </>
  )
}
