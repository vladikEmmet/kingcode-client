import { errorCatch } from "@/app/api/helper";
import { ReviewsList } from "@/components/Reviews/ReviewsList/ReviewsList";
import { ReviewService } from "@/services/review/review.service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Список отзывов - King Code",
}

const fetchReviews = async() => {
    try {
        const reviews = await ReviewService.getAll();
        console.log(reviews);
        return reviews;
    } catch(err) {
        throw new Error(errorCatch(err));
    }
};

export default async function ReviewListPage() {
    const reviews = await fetchReviews();

    return <ReviewsList reviews={reviews}/>
}