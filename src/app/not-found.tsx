import { ErrorComponent } from "@/components/ErrorComponent/ErrorComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Страница не найдена."
}

export default function NotFound() {
    return (
        <ErrorComponent error={{name: "404", message: "Страница не найдена"}} />
    )
}