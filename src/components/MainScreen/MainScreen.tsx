"use client"

import styles from "./MainScreen.module.scss"
import { FC } from "react";
import star from "@/assets/star.png"
import { Montserrat } from "next/font/google";
import { Button, ButtonVariantsEnum } from "../UI/Button/Button";
import { Link as ScrollLink } from "react-scroll";
import localFont from 'next/font/local';
import cn from 'clsx';

interface MainScreenProps {
    ageRange?: string;
    img: any;
    children?: React.ReactNode;
    scrollTarget: string;
    text?: "small" | "big";
}

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});
const berlin = localFont({src: "../../assets/fonts/BRLNSDB.woff", variable: "--font-berlin-bold"});

export const MainScreen: FC<MainScreenProps> = ({ageRange, img, children, scrollTarget, text = "small"}) => {
  return (
    <section className={styles.section}>
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.content} style={{backgroundImage: `url("${img.src}")`}}>
                    {ageRange && 
                        <div className={styles.star} style={{backgroundImage: `url(${star.src})`}}>
                            <h5 className={montserrat.className}>{ageRange}</h5>
                        </div>
                    }
                    <h1 className={cn(montserrat.className, berlin.variable, {
                        [styles.big]: text === "big"
                    })}>
                        {children}
                    </h1>
                    <ScrollLink to={scrollTarget} smooth={true} duration={100}>
                        <Button variant={ButtonVariantsEnum.orange} className={styles.button}>
                                Выбрать направление
                        </Button>
                    </ScrollLink>
                </div>
            </div>
        </div>
    </section>
  )
}