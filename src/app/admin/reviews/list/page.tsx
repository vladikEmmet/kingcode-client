import { errorCatch } from "@/app/api/helper";
import { ReviewsList } from "@/components/Reviews/ReviewsList/ReviewsList";
import { ReviewService } from "@/services/review/review.service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Список отзывов - King Code",
}

export default async function ReviewListPage() {
    return <ReviewsList />
}