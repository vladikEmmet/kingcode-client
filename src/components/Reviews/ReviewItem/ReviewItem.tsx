"use client";

import { ReviewType } from "@/types/review.type"
import Image from "next/image"
import { FC } from "react";
import styles from "./ReviewItem.module.scss"
import cn from 'clsx'
import monkeyEmpty from "@/assets/monkey.png"
import localFont from "next/font/local";

export interface ReviewItemProps extends ReviewType {
    className?: string;
    index?: number;
    onClick?: (index: number) => void;
}

const medium = localFont({src: "../../../assets/fonts/Montserrat-Medium.woff2"});
const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const ReviewItem: FC<ReviewItemProps> = ({className, authorImg, authorName, text, index, onClick}) => {
  return (
    <div className={cn(styles.container, className)} onClick={onClick ? () => onClick(index || 0) : () => null}>
        <div className={styles.info}>
            <div className={styles.image}>
                <Image 
                    src={authorImg || monkeyEmpty}
                    alt="Фото автора отзыва"
                    width={100}
                    height={100}
                />
            </div>
            <p className={medium.className}>{authorName}</p>
        </div>
        <div className={styles["text-container"]}>
            <p className={cn(styles.text, bold.className)}>{text}</p>
        </div>
    </div>
  )
}
