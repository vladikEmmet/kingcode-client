import { MainScreen } from '@/components/MainScreen/MainScreen'
import mainScreen from "@/assets/mainScreen.png"
import { Courses } from '@/components/Courses/Courses'


export default function Home() {
  
  
  return (
    <>
      <MainScreen img={mainScreen} ageRange="10-11 класс" scrollTarget='courses'>
        Начни свой путь в <span className="highlighted">IT</span> вместе с <span className="highlighted">King Code</span>
      </MainScreen>
      <Courses />
    </>
  )
}
