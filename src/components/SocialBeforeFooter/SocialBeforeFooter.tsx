"use client";

import styles from "./SocialBeforeFooter.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane, FaInstagram, FaVk } from "react-icons/fa";
import { MdLocalPhone } from 'react-icons/md';

export const SocialBeforeFooter = () => {
    
  return (
    <section className={styles.section}>
        <div className={styles.container}>
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
            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} rel="noopener noreferrer nofollow">
                <MdLocalPhone className={styles.phone}/>
            </a>
        </div>
    </section>
  )
}
