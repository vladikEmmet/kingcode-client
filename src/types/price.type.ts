import { ButtonVariantsEnum } from "@/components/UI/Button/Button";
import { EducationVariantEnum } from "@/components/UI/Tab/Tab";

export interface PriceProps {
    index?: number;
    price: string;
    title: string;
    description?: string;
    hours: string;
    exercises: number;
    educationVariant: EducationVariantEnum;
}

export interface TabProps extends PriceProps {
    variant: ButtonVariantsEnum;
    className?: string;
    isBlack?: boolean;
    onClick?: () => void;
}