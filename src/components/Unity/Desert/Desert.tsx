import monkeyDesert from "@/assets/unity/monkeyDesert.png";
import Image from "next/image";
import styles from "./Desert.module.scss";

export const Desert = () => {
  return (
    <div className={styles.wrapper}>
        <Image 
            src={monkeyDesert}
            alt="Обезьянка на фоне вывесок"
            className={styles.img}
        />
    </div>
  )
}
