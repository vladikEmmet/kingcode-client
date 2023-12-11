"use client";

import styles from "./SocialMedia.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane, FaInstagram, FaVk } from "react-icons/fa";
import { MdLocalPhone } from 'react-icons/md';
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
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(isMobile) {
        setMessage(null);
        window.location.href = `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`;
        return;
    } else {
        await copyPhone();
    }
  }

  
  
  return (
    <div className={cn(styles.container, className)}>
        <a href={`${process.env.NEXT_PUBLIC_VK_URL}`} target="_blank" rel="noopener noreferrer nofollow">
            <FaVk />
        </a>
        <a href={`${process.env.NEXT_PUBLIC_TELEGRAM_URL}`} target="_blank" rel="noopener noreferrer nofollow">
            <FaTelegramPlane />
        </a>
        <a href={`${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`} target="_blank" rel="noopener noreferrer nofollow">
            <FaInstagram />
        </a>
        <a href={`${process.env.NEXT_PUBLIC_WHATSAPP_URL}`} target="_blank" rel="noopener noreferrer nofollow">
            <IoLogoWhatsapp />
        </a>
        {
            withPhone && 
            <>
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} rel="noopener noreferrer nofollow">
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