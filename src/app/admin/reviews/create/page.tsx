import { ReviewCreateComponent } from "@/components/ReviewsAdmin/ReviewCreateComponent/ReviewCreateComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Создание отзыва - King Code",
}

export default function CreateReviewPage() {
    return (
        <ReviewCreateComponent />
    )
}