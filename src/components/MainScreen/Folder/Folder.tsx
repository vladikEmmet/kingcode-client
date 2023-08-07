import Image from "next/image";
import { FC } from "react"
import styles from './Folder.module.scss'
import firstSheet from "../../../assets/folderEffect.png"
import secondSheet from "../../../assets/folderEffect2.png"

interface FolderProps {
    img: any;
    children?: React.ReactNode;
}

const Folder: FC<FolderProps> = ({children, img}) => {
  return (
    <div className={styles.container}>
        <div className={styles.folder}>
            <div className={styles.sheets}>
                <Image src={firstSheet} alt="Первый лист папки" className={styles.firstSheet}/>
                <Image src={secondSheet} alt="Второй лист папки" className={styles.secondSheet}/>
                <Image src={img} alt="Обложка папки" className={styles["folder-background"]}/>
                <div className={styles.wrapper}>
                    <div className={styles.tab}></div>
                    <div className={styles.chatAre}>
                    </div>
                </div>
            </div> 


            {/* <div className={styles.wrapper}>
                <div className={styles.tab}></div>
                <div className={styles.chatAre}>
                    <div className={styles.sheets}>
                        <Image src={firstSheet} alt="Первый лист папки" className={styles.firstSheet}/>
                        <Image src={secondSheet} alt="Второй лист папки" className={styles.secondSheet}/>
                        <Image src={img} alt="Обложка папки" className={styles["folder-background"]}/>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Folder