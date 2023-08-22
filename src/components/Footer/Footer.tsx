import Link from "next/link"
import Image from "next/image"
import { SocialMedia } from "../Header/SocialMedia/SocialMedia"
import logo from "../../../public/logo.png"
import { UpButton } from "../UI/UpButton"
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="wrapper">
                <SocialMedia withPhone={true}/>
                <Link href="/" className="logo">
                    <Image src={logo} alt="Logo"/>
                </Link>
                <div className={styles.upBtn}>
                    <UpButton />
                </div>
            </div>
        </div>
    </footer>
  )
}
