import { FC } from "react";
import { ButtonVariantsEnum } from "../Button/Button";

interface TabProps {
    price: string;
    variant: ButtonVariantsEnum;
    icon: ImageData;
    title: string;
    hours: string;
    exercises: number;
}

const Tab: FC<TabProps> = ({price, variant, icon, title, hours, exercises}) => {
  return (
    <div>

    </div>
  )
}

export default Tab