"use client"

import { ErrorComponent } from "@/components/ErrorComponent/ErrorComponent"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Oops! Кажется, что-то пошло не так"
}

export default function ErrorWrapper({error}: {error: Error}) {
    return (
        <ErrorComponent error={error}/>
    )
}