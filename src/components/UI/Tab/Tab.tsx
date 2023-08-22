import { FC, memo } from "react";
import { ButtonVariantsEnum } from "../Button/Button";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import styles from "./Tab.module.scss";
import cn from 'clsx';
import { Montserrat } from "next/font/google";
import { defineEnding } from "@/utils/defineEnding";
import { TabProps } from "@/types/price.type";

export enum EducationVariantEnum {
    group = "group",
    individual = "individual",
}

export const Tab: FC<TabProps> = memo(({price, variant, title, hours, exercises, educationVariant, description, isBlack, className}) => {
  const iconsAmount = educationVariant === EducationVariantEnum.group ? 3 : 1;

  return (
    <div className={cn(styles.wrapper)}>
        <div className={cn(styles.main, className, variant === ButtonVariantsEnum.orange ? styles.orange : styles.grey, {
            [styles['main-black']]: isBlack,
        })}>

            <div className={styles.icons}>
                {[...Array(iconsAmount)].map((_, idx) => <BsFillPersonFill className={styles.icon_el} key={idx}/>)}

                <AiOutlinePlus className={styles.plus_el}/>
                <BsFillPersonFill className={styles.icon_el}/>
            </div>

            <div>
                <h2 className={styles.title}>{title}</h2>
                {description && <p className={styles.description}>{description}</p>}
            </div>
            <div className={cn(styles.time, {
                [styles["time-black"]]: isBlack,
            })}>
                <p>{`${exercises} ${defineEnding(exercises, ["занятие", "занятия", "занятий"])}`}</p>
                <div>
                    <FiClock />
                    <span>{`${hours} ч`}</span>
                </div>
            </div>
        </div>
        <div 
            className={cn(styles.price, variant === ButtonVariantsEnum.orange ? styles["grey-btn"] : styles["orange-btn"])}
        >
            <h3>{`${price} тг`}</h3>
        </div>
    </div>
  )
})
