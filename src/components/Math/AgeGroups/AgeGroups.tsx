import styles from "./AgeGroups.module.scss";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import cn from 'clsx';
import monkeyEvolution from "@/assets/math/monkeyEvolution.png";

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

export const AgeGroups = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={montserrat.className}>Возрастные группы</h2>
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
