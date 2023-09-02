"use client";

import { ReviewType } from "@/types/review.type"
import Image from "next/image"
import { FC } from "react";
import styles from "./ReviewItem.module.scss"
import cn from 'clsx'
import monkeyEmpty from "@/assets/monkey.png"

export interface ReviewItemProps extends ReviewType {
    className?: string;
    index?: number;
    onClick?: (index: number) => void;
}

export const ReviewItem: FC<ReviewItemProps> = ({className, authorImg, authorName, text, index, onClick}) => {
  return (
    <div className={cn(styles.container, className)} onClick={onClick ? () => onClick(index || 0) : () => null}>
        <div className={styles.info}>
            <div className={styles.image}>
                <Image 
                    src={authorImg || monkeyEmpty}
                    alt="Фото"
                    width={100}
                    height={100}
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
