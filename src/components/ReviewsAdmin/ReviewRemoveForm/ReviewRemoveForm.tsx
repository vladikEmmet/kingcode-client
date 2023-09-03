"use client";

import { errorCatch } from "@/app/api/helper";
import { Button, ButtonVariantsEnum } from "@/components/UI/Button/Button";
import { Loader } from "@/components/UI/Loader/Loader";
import { ReviewService } from "@/services/review/review.service";
import { useModal } from "@/store/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./ReviewRemoveForm.module.scss";

export const ReviewRemoveForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<{id: number}>({
        mode: "onSubmit",
    });
    const {append} = useModal();
    const [isLoading, setIsLoading] = useState(false);
    const session = useSession();

    const onSubmit: SubmitHandler<{id: number}> = async(data) => {
        try {
            setIsLoading(true);
            const removedReview = await ReviewService.delete(+data.id, session.data?.backendTokens.accessToken);
            append(<h2>Готово!</h2>);
        } catch(err) {
            append(<h1>{`Упс! Ошибка: ${errorCatch(err)}`}</h1>)
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    const onClose = () => {
        append(null);
        document.documentElement.classList.remove("no-scroll");
        document.body.classList.remove("no-scroll");
    }

    if(isLoading) {
        return <Loader />
    }
    
  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("id", {
                    required: true
                })}
                type="number"
                className={styles.input}
                placeholder="Введите ID отзыва"
            />
            {errors?.id?.message && <h2>{errors.id.message}</h2>}
            <Button variant={ButtonVariantsEnum.orange} className="admin-btn" type="submit">Удалить</Button>
        </form>
        <Link href="/admin/reviews/list" onClick={onClose}>Или выберите из списка</Link>
    </div>
  )
}