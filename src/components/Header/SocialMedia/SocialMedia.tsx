"use client";

import styles from "./SocialMedia.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane, FaInstagram, FaVk } from "react-icons/fa";
import { MdLocalPhone } from 'react-icons/md';
import { isMobile } from "@/utils/isMobile";
import { Tooltip } from 'react-tooltip';
import { FC, useState } from "react";
import cn from 'clsx';

interface SocialMediaProps {
    withPhone?: boolean;
    className?: string;
}

export const SocialMedia: FC<SocialMediaProps> = ({withPhone = false, className}) => {
  const [message, setMessage] = useState<"error" | "success" | null>(null);
  
  const copyPhone = async() => {
    try {
        await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_PHONE_NUMBER?.toString() || "1");
        setMessage("success");
        setTimeout(() => setMessage(null), 2000);
    } catch(err) {
        setMessage("error");
    }
  }

  const onClick = async() => {
    if(isMobile()) {
        window.location.href = `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`;
    } else {
        await copyPhone();
    }
  }
  
  return (
    <div className={cn(styles.container, className)}>
        <a href="*" target="_blank" rel="noopener noreferrer nofollow author">
            <FaVk />
        </a>
        <a href="*" target="_blank" rel="noopener noreferrer nofollow author">
            <FaTelegramPlane />
        </a>
        <a href="https://instagram.com/kingcode_school?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer nofollow author">
            <FaInstagram />
        </a>
        <a href="*" target="_blank" rel="noopener noreferrer nofollow author">
            <IoLogoWhatsapp />
        </a>
        {
            withPhone && 
            <>
                <a id="phone-anchor" href="tel:+77719041930">
                    <MdLocalPhone className={styles.phone} />
                </a>
                <Tooltip anchorSelect="#phone-anchor" clickable variant="light" delayHide={message ? 3000 : 0}>
                    {
                        message === "error" ? (
                            <p className={styles['tooltip-text']}>{"Ошибка при копировании :("}</p>
                        ) : message === "success" ? (
                            <p className={styles['tooltip-text']}>{"Скопировано :)"}</p>
                        ) : (
                        <button 
                            className={styles.tooltip}
                            onClick={onClick}
                        >
                            {`Тел: ${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                        </button>
                        )
                    }
                </Tooltip>
            </>
        }
    </div>
  )
}