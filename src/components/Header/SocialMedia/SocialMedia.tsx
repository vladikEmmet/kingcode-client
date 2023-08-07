import styles from "./SocialMedia.module.scss"
import { IoLogoWhatsapp } from "react-icons/io"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"
import { FaVk } from "react-icons/fa"

export const SocialMedia = () => {
  return (
    <div className={styles.container}>
        <a href="*" target="_blank" rel="noopener noreferrer nofollow author">
            {/* <FontAwesomeIcon icon={faVk} /> */}
            <FaVk />
        </a>
        <a href="*" target="_blank" rel="noopener noreferrer nofollow author">
            <FaTelegramPlane />
        </a>
        <a href="*" target="_blank" rel="noopener noreferrer nofollow author">
            <FaInstagram />
        </a>
        <a href="*" target="_blank" rel="noopener noreferrer nofollow author">
            <IoLogoWhatsapp />
        </a>
    </div>
  )
}