import styles from "./AgeGroups.module.scss";
import Image from "next/image";
import monkeyEvolution from "@/assets/math/monkeyEvolution.png";

export const AgeGroups = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className="subtitle">Возрастные группы</h2>
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
