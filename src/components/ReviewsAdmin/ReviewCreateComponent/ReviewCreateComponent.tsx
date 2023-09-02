"use client";

import { ReviewItem } from "@/components/Reviews/ReviewItem/ReviewItem";
import { useState } from "react";
import { ReviewCreateForm } from "../ReviewCreateForm/ReviewCreateForm";
import styles from "./ReviewCreateComponent.module.scss";

export const ReviewCreateComponent = () => {
  const [authorName, setAuthorName] = useState("");
  const [authorImg, setAuthorImg] = useState<null | File>(null);
  const [text, setText] = useState("");
    
  return (
    <div className={styles.container}>
        <ReviewItem text={text} authorName={authorName} />
        <ReviewCreateForm
            authorImg={authorImg || undefined}
            setAuthorImg={setAuthorImg}
            authorName={authorName}
            setAuthorName={setAuthorName}
            text={text}
            setText={setText}
        />
    </div>
  )
}
