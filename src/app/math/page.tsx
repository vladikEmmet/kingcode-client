import { MainScreen } from "@/components/MainScreen/MainScreen"
import mainImg from "@/assets/math/mainScreen.png"

const Math = () => {
    return (
        <MainScreen img={mainImg} ageRange="0-7 КЛАСС" scrollTarget="">
            ОЛИМПИАДНАЯ МАТЕМАТИКА
        </MainScreen>
    )
}

export default Math