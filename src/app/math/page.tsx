import { MainScreen } from "@/components/MainScreen/MainScreen"
import mainImg from "@/assets/math/mainScreen.png"
import { WhatWeDo } from "@/components/Math/WhatWeDo/WhatWeDo"
import { Examples } from "@/components/Math/Examples/Examples"
import { FormSection } from "@/components/FormSection/FormSection"
import { Prices } from "@/components/Prices/Prices"
import { WhatToKnow } from "@/components/Math/WhatToKnow/WhatToKnow"
import { AgeGroups } from "@/components/Math/AgeGroups/AgeGroups"
import { Classes } from "@/components/Math/Classes/Classes"

const Math = () => {
    return (
        <>
            <MainScreen img={mainImg} ageRange="0-7 КЛАСС" scrollTarget="what-we-do">
                ОЛИМПИАДНАЯ МАТЕМАТИКА
            </MainScreen>
            <WhatWeDo />
            <Examples />
            <Classes />
            <WhatToKnow />
            <AgeGroups />
            <Prices />
            <FormSection courseName="Математика"/>
        </>
    )
}

export default Math