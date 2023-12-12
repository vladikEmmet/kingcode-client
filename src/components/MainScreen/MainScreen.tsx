"use client"

import styles from "./MainScreen.module.scss"
import { FC } from "react";
import star from "@/assets/star.png"
import { Button, ButtonVariantsEnum } from "../UI/Button/Button";
import localFont from 'next/font/local';
import cn from 'clsx';

interface MainScreenProps {
    ageRange?: string;
    img: any;
    children?: React.ReactNode;
    scrollTarget: string;
    text?: "small" | "big";
    buttonText: string;
}

const berlin = localFont({src: "../../assets/fonts/BRLNSDB.woff", variable: "--font-berlin-bold"});
const bold = localFont({src: "../../assets/fonts/Montserrat-Bold.woff2"});

export const MainScreen: FC<MainScreenProps> = ({ageRange, img, children, scrollTarget, text = "big", buttonText}) => {
  return (
    <section className={styles.section}>
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.content} style={{backgroundImage: `url("${img.src}")`}}>
                    {ageRange && 
                        <div className={styles.star} style={{backgroundImage: `url(${star.src})`}}>
                            <h4 className={bold.className}>{ageRange}</h4>
                        </div>
                    }
                    <h1 className={cn(bold.className, {
                        [styles.big]: text === "big"
                    })}>
                        {children}
                    </h1>
                    <Button variant={ButtonVariantsEnum.orange} className={cn(styles.button, text === "big" ? styles.big : "")}>
                        <a href="#courses">
                            {buttonText}
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  )
}