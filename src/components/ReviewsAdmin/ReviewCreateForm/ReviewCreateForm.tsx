"use client";

import { errorCatch } from "@/app/api/helper";
import { Button, ButtonVariantsEnum } from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import { UploadFile } from "@/components/UI/Input/UploadFile/UploadFile";
import { Loader } from "@/components/UI/Loader/Loader";
import { ReviewService } from "@/services/review/review.service";
import { useModal } from "@/store/store";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import styles from "./ReviewCreateForm.module.scss";

interface ReviewCreateFormProps {
    authorImg?: File;
    setAuthorImg: Function;
    authorName: string;
    setAuthorName: Function;
    text: string;
    setText: Function; 
}

export const ReviewCreateForm: FC<ReviewCreateFormProps> = ({
    authorImg,
    setAuthorImg,
    authorName,
    setAuthorName,
    text,
    setText
}) => {
  const {append} = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async() => {
    try {
        setIsLoading(true);
        const formData = new FormData();
        if(authorImg) {
            formData.append("file", authorImg);
        }
        formData.append("authorName", authorName);
        formData.append("text", text);

        const newReview = await ReviewService.create(formData);
        setIsLoading(false);
        router.back();
    } catch(err) {
        console.log(err);
        append(<h2>{`Упс! Ошибка: ${errorCatch(err)}`}</h2>);
    }
  }

  if(isLoading) return <Loader />
    
  return (
    <div className={styles.container}>

        <form onSubmit={onSubmit}>
            <UploadFile 
                name="authorImg"
                label="Изображение (опционально)"
                onChange={(e) => setAuthorImg((e.target.files as any)[0])}
                accept="image/*"
            />
            <Input 
                name="authorName"
                label="Имя"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
            />
            <Input 
                name="text"
                label="Текст отзыва"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Button variant={ButtonVariantsEnum.orange} className="admin-btn">
                Создать
            </Button>
        </form>
        
    </div>
  )
}
