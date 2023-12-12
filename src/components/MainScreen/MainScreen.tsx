"use client"

import styles from "./MainScreen.module.scss"
import { FC } from "react";
import star from "@/assets/star.png"
import { Button, ButtonVariantsEnum } from "../UI/Button/Button";
import localFont from 'next/font/local';
import cn from 'clsx';
import Image from "next/image";
import main from "@/assets/mainScreen.png";

interface MainScreenProps {
    ageRange?: string;
    img: any;
    children?: React.ReactNode;
    scrollTarget: string;
    text?: "small" | "big";
    buttonText: string;
}

const bold = localFont({src: "../../assets/fonts/Montserrat-Bold.woff2"});

export const MainScreen: FC<MainScreenProps> = ({ageRange, img, children, scrollTarget, text = "big", buttonText}) => {
  return (
    <section className={styles.section}>
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.content} >
                {/* style={{backgroundImage: `url("${img.src}")`}} */}
                <Image src={main} alt="Папка с фоном" fill={true} className={styles.bg}/>
                {ageRange && 
                    <div className={styles.star} style={{backgroundImage: `url(${star.src})`}}>
                        <p className={bold.className}>{ageRange}</p>
                    </div>
                }
                <div className={styles.info}>
                    <h1 className={cn(bold.className, {
                        [styles.big]: text === "big"
                    })}>
                        {children}
                    </h1>
                    <Button variant={ButtonVariantsEnum.orange} className={cn(styles.button, text === "big" ? styles.big : "")}>
                        <a href={`#${scrollTarget}`}>
                            {buttonText}
                        </a>
                    </Button>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}