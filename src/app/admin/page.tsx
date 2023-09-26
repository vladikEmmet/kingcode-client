import { AdminPage } from "@/components/AdminPage/AdminPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Админ-панель"
}

export default function Admin() {
  return (
    <AdminPage />
  )
}

