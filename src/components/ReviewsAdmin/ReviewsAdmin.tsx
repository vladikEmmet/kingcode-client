"use client";

import { useModal } from "@/store/store";
import Link from "next/link";
import { useState } from "react";
import { Button, ButtonVariantsEnum } from "../UI/Button/Button";
import { ReviewRemoveForm } from "./ReviewRemoveForm/ReviewRemoveForm";
import styles from "./ReviewsAdmin.module.scss";

export const ReviewsAdmin = () => {
  const {append} = useModal();
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    append(<ReviewRemoveForm/>)
  }

  if(clicked) throw new Error("Нажата кнопка");
    
  return (
    <div className={styles.container}>
        <Button variant={ButtonVariantsEnum.orange} className="admin-btn" onClick={onClick}>Удалить</Button>
        <Link href="/admin/reviews/create">
          <Button variant={ButtonVariantsEnum.orange} className="admin-btn">Создать</Button>
        </Link>
        <Button variant={ButtonVariantsEnum.orange} className="admin-btn" onClick={() => setClicked(true)}>Throw error</Button>
    </div>
  )
}
