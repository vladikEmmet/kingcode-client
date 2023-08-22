"use client";

import { ReviewType } from "@/types/review.type"
import Image from "next/image"
import { FC, useCallback } from "react";
import styles from "./ReviewItem.module.scss"
import cn from 'clsx'
import monkeyEmpty from "@/assets/monkey.png"
import { Montserrat } from "next/font/google";
import { useModal } from "@/store/store";
import { Carousel } from "@/components/AboutUs/Carousel/Carousel";

export interface ReviewItemProps extends ReviewType {
    className?: string;
    index: number;
    onClick?: (index: number) => void;
}

export const ReviewItem: FC<ReviewItemProps> = ({className, authorImg, authorName, text, index, onClick}) => {
  return (
    <div className={cn(styles.container, className)} onClick={onClick ? () => onClick(index) : () => null}>
        <div className={styles.info}>
            <div className={styles.image}>
                <Image 
                    src={authorImg || monkeyEmpty}
                    alt="Фото"
                    width={50}
                    height={50}
                />
            </div>
            <p>{authorName}</p>
        </div>
        <div className={styles["text-container"]}>
            <p className={styles.text}>{text}</p>
        </div>
    </div>
  )
}
