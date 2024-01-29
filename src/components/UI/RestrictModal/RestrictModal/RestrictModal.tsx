import styles from "./RestrictModal.module.scss";
import Image from "next/image";
import monkeyImg from "@/assets/monkeyDip.png";
import cn from "clsx";
import localFont from "next/font/local";

const robotoBold = localFont({src: "../../../../assets/fonts/Roboto-Bold.ttf"});

export const RestrictModal = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
            <div className={styles.main}>
                <h2 className={cn(styles.title, robotoBold.className)}>Вы из России? </h2>
                <div className={styles.flex}>
                    <h3 className={cn(styles.please, robotoBold.className)}>
                        Пожалуйста используйте  
                    </h3>
                    <h3 className={cn(styles.vpn, robotoBold.className)}>VPN</h3>
                </div>
            </div>
            <div className={cn(styles.secondary, robotoBold.className)}>Мы работаем над устранением проблемы</div>
        </div>
        <div className={styles.image}>
            <Image src={monkeyImg} alt="Обезьянка-инженер с чемоданчиком" />
        </div>
    </div>
  )
}
