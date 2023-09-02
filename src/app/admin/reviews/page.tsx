import { ReviewsList } from "@/components/Reviews/ReviewsList/ReviewsList";
import { ReviewsAdmin } from "@/components/ReviewsAdmin/ReviewsAdmin";
import { ReviewService } from "@/services/review/review.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Отзывы - админ-панель King Code"
}

export default function Reviews() {
    return (
        <ReviewsAdmin/>
    )
}