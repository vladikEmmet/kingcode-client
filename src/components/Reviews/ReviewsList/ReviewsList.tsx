"use client"

import { errorCatch } from "@/app/api/helper";
import { Button, ButtonVariantsEnum } from "@/components/UI/Button/Button";
import { ReviewService } from "@/services/review/review.service";
import { ReviewData } from "@/services/review/review.types";
import { useModal } from "@/store/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import styles from "./ReviewsList.module.scss";

interface ReviewsListProps {
    reviews: ReviewData[];
}

export const ReviewsList: FC<ReviewsListProps> = ({reviews}) => {
  const {append} = useModal();
  const router = useRouter();
  const session = useSession();
    
  const onClick = async(id: number) => {
    try {
        const removedReview = await ReviewService.delete(id, session.data?.backendTokens.accessToken);
        router.refresh();
    } catch(err) {
        console.log(err);
        append(errorCatch(err));
    }
  }
  
  return (
    <div className={styles.container}>
        {
            reviews.map(review => 
                <div key={review.id} className={styles.item}>
                    <ReviewItem 
                        authorName={review.authorName}
                        authorImg={review.authorImg && `${process.env.NEXT_PUBLIC_SERVER_URL}${review.authorImg}`}
                        text={review.text}
                        className={styles.review}
                    />
                    <Button variant={ButtonVariantsEnum.grey} className="admin-btn" onClick={() => onClick(review.id)}>Удалить</Button>
                </div>
            )
        }
    </div>
  )
}
