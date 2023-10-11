"use client";

import styles from "./SocialMedia.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane, FaInstagram, FaVk } from "react-icons/fa";
import { MdLocalPhone } from 'react-icons/md';
import { isMobile } from "@/utils/isMobile";
import { Tooltip } from 'react-tooltip';
import { FC, useEffect, useState } from "react";
import cn from 'clsx';

interface SocialMediaProps {
    withPhone?: boolean;
    className?: string;
}

export const SocialMedia: FC<SocialMediaProps> = ({withPhone = false, className}) => {
  const [message, setMessage] = useState<"error" | "success" | null>(null);
  const [isDeviceMobile, setIsDeviceMobile] = useState(false);
  
  const copyPhone = async() => {
    try {
        await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_PHONE_NUMBER?.toString() || "1");
        setMessage("success");
        setTimeout(() => setMessage(null), 2000);
    } catch(err) {
        setMessage("error");
    }
  }

  useEffect(() => {
    const mobile = isMobile();
    if(isMobile()) {
        setIsDeviceMobile(true);
        const vkLink = document.getElementById("vk-link");
        const telegramLink = document.getElementById("telegram-link");
        const whatsappLink = document.getElementById("whatsapp-link");

        if(vkLink) vkLink.setAttribute("target", `_blank`);
        if(telegramLink) telegramLink.setAttribute("target", `_blank`);
        if(whatsappLink) whatsappLink.setAttribute("target", `_blank`);
    }
  }, [])

  const onClick = async() => {
    if(isMobile()) {
        setMessage(null);
        window.location.href = `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`;
        return;
    } else {
        await copyPhone();
    }
  }

  
  
  return (
    <div className={cn(styles.container, className)}>
        <a href={`${process.env.NEXT_PUBLIC_VK_URL}`} rel="noopener noreferrer nofollow author" id="vk-link">
            <FaVk />
        </a>
        <a href={`${process.env.NEXT_PUBLIC_TELEGRAM_URL}`} rel="noopener noreferrer nofollow author" id="telegram-link">
            <FaTelegramPlane />
        </a>
        <a href={`${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`} rel="noopener noreferrer nofollow author">
            <FaInstagram />
        </a>
        <a href={`${process.env.NEXT_PUBLIC_WHATSAPP_URL}`} rel="noopener noreferrer nofollow author" id="whatsapp-link">
            <IoLogoWhatsapp />
        </a>
        {
            withPhone && 
            <>
                <a id="phone-anchor" href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
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