import mainImg from "@/assets/unity/mainScreen.png";
import { FormSection } from "@/components/FormSection/FormSection";
import { MainScreen } from "@/components/MainScreen/MainScreen";
import { Prices } from "@/components/Prices/Prices";
import { Desert } from "@/components/Unity/Desert/Desert";
import { OurProjects } from "@/components/Unity/OurProjects/OurProjects";
import { Prospects } from "@/components/Unity/Prospects/Prospects";
import { WhatToExplore } from "@/components/Unity/WhatToExplore/WhatToExplore";
import { WhatWeDo } from "@/components/Unity/WhatWeDo/WhatWeDo";
import { WhyImportant } from "@/components/Unity/WhyImportant/WhyImportant";

export default function Unity() {
    return (
        <>
            <MainScreen scrollTarget="what-we-do" img={mainImg} ageRange="1 - 4 КЛАСС" text="big">
                РАЗРАБОТКА ИГР НА <span className="highlighted">UNITY</span>
            </MainScreen>
            <WhatWeDo />
            <WhatToExplore />
            <OurProjects />
            <WhyImportant />
            <Prospects />
            <Desert />
            <Prices />
            <FormSection courseName="Unity"/>
        </>
    )
}