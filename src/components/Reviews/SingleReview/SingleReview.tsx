import { ReviewType } from "@/types/review.type";
import { FC } from "react";
import styles from "./SingleReview.module.scss";
import cn from 'clsx';
import Image from 'next/image';
import monkeyEmpty from "@/assets/monkey.png";

interface SingleReviewProps extends ReviewType {
    className?: string;
}

export const SingleReview: FC<SingleReviewProps> = 
    ({
        className,
        authorName,
        authorImg,
        text,

    }) => {
    return (
        <div className={cn(styles.container, className)}>
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