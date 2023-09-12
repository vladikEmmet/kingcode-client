"use client"

import { Button, ButtonVariantsEnum } from "@/components/UI/Button/Button";
import { AboutUsService } from "@/services/aboutUs/aboutUs.service";
import { AboutUsData } from "@/services/aboutUs/aboutUs.types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./SlidesItem.module.scss";

interface SlidesItemProps {
    slide: AboutUsData;
}

export const SlidesItem: FC<SlidesItemProps> = ({slide}) => {
  const router = useRouter();
  const session = useSession();
    
  const onDelete = async() => {
    try {
        const data = await AboutUsService.delete(slide.id, session.data?.backendTokens.accessToken);
        router.refresh();
    } catch(err) {
        console.log(err);
    }
  }

  return (
    <div className={styles.container}>
        {
            slide.type === "video" ? (
                <div className={styles.video}>
                    <video autoPlay={false} controls={true}>
                        <source type="video/mp4" src={`${process.env.NEXT_PUBLIC_SERVER_URL}${slide.link}`}/>
                    </video>
                </div>
            ) : (
                <div className={styles.img}>
                    <Image 
                        width={500}
                        height={300}
                        alt="Изображение"
                        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${slide.link}`}
                    />
                </div>
            )
        }
        <Button variant={ButtonVariantsEnum.orange} onClick={onDelete}>Удалить</Button>
    </div>
  )
}
