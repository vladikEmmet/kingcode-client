"use client";

import { errorCatch } from "@/app/api/helper";
import { authConfig } from "@/configs/auth";
import { useModal } from "@/store/store";
import axios from "axios";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, ButtonVariantsEnum } from "../UI/Button/Button";
import { RadioButton } from "../UI/Input/RadioButton/RadioButton";
import { UploadFile } from "../UI/Input/UploadFile/UploadFile";
import { Loader } from "../UI/Loader/Loader";
import styles from "./CreateSlideForm.module.scss";


export const CreateSlideForm = () => {
  const [file, setFile] = useState<File>();
  const [type, setType] = useState<"img" | "video" | null>(null);
  const [fileError, setFileError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {append} = useModal();
  const router = useRouter();
  const session = useSession();

  const onSubmit = async() => {
    try {
        setIsLoading(true);

        if(!type) setTypeError("Укажите тип файла");
        if(!file) setFileError("Загрузите файл");

        const formData = new FormData();
        formData.append("file", file as Blob);
        formData.append("type", type as string);

        const a = await axios.post("http://localhost:4200/api/about-us", formData, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                "authorization": `Bearer ${session.data?.backendTokens.accessToken}`
            }
        });
        setIsLoading(false);
        router.back();
    } catch(err) {
        console.log(err);
        append(errorCatch(err));
    } finally {
        setIsLoading(false);
    }
  }

  if(isLoading) return <Loader />

  return (
    <form className={styles.form}>
        <RadioButton 
            label="Фото" 
            name="photo-radio" 
            checked={type === "img"} 
            onChange={() => setType("img")}
            error={typeError}
        />
        <RadioButton 
            label="Видео"
            name="video-radio"
            checked={type === "video"}
            onChange={() => setType("video")}
            error={typeError}
        />
        {
            type === "video" ? 
            <UploadFile 
                name="file"
                label="Загрузите видео"
                onChange={(e) => setFile((e.target.files as any)[0])}
                accept="video/*"
                required={true}
                error={fileError}
                /> : type === "img" ? (
                    <UploadFile 
                    name="file"
                    label="Загрузите фото"
                    required={true}
                    onChange={(e) => setFile((e.target.files as any)[0])}
                    accept="image/*"
                    error={fileError}
                />
            ) : <h2>Выберите тип файла</h2>
        }
        <Button variant={ButtonVariantsEnum.orange} type="submit" className="admin-btn" onClick={onSubmit}>Создать</Button>
    </form>
  )
}
