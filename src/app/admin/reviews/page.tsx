import { ReviewsAdmin } from "@/components/ReviewsAdmin/ReviewsAdmin";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Отзывы - админ-панель King Code"
}

export default function Reviews() {
    return (
        <ReviewsAdmin/>
    )
}