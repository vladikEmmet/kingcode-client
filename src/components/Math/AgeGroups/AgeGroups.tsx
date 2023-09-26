import styles from "./AgeGroups.module.scss";
import Image from "next/image";
import monkeyEvolution from "@/assets/math/monkeyEvolution.png";
import localFont from "next/font/local";
import cn from 'clsx';

const bold = localFont({src: "../../../assets/fonts/Montserrat-Bold.woff2"});

export const AgeGroups = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={cn("subtitle", bold.className)}>Возрастные группы</h2>
            <div className={styles.img}>
                <Image 
                    src={monkeyEvolution}
                    alt="Обезьянки разных возрастов"
                    draggable={false}
                />
            </div>
        </div>
    </section>
  )
}
