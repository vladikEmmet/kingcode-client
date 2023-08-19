import { MainScreen } from "@/components/MainScreen/MainScreen";
import mainImg from "@/assets/scratch/mainScreen.png";
import { WhatWeDo } from "@/components/Scratch/WhatWeDo/WhatWeDo";
import { WhatToLearn } from "@/components/Scratch/WhatToLearn/WhatToLearn";
import { OurProjects } from "@/components/Scratch/OurProjects/OurProjects";
import { WhyImportant } from "@/components/Scratch/WhyImportant/WhyImportant";
import { Prices } from "@/components/Prices/Prices";
import { FormSection } from "@/components/FormSection/FormSection";

export default function Scratch() {
    return (
        <>
            <MainScreen scrollTarget="what-we-do" img={mainImg} ageRange="1 - 4 КЛАСС">
                ПРОГРАММИРОВАНИЕ В <span className="highlighted">SCRATCH</span>
            </MainScreen>
            <WhatWeDo />
            <WhatToLearn />
            <OurProjects />
            <WhyImportant />
            <Prices />
            <FormSection courseName="Scratch"/>
        </>
    )
}