import Link from "next/link"
import Image from "next/image"
import { SocialMedia } from "../Header/SocialMedia/SocialMedia"
import logo from "../../../public/logo.png"
import { UpButton } from "../UI/UpButton"
import styles from "./Footer.module.scss"
import cn from 'clsx';

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="wrapper">
                <SocialMedia withPhone={true} className="footer-social"/>
                <Link href="/" className={cn("logo", styles.logo)}>
                    <Image 
                        src={logo} 
                        alt="Logo"
                    />
                </Link>
                <div className={styles.upBtn}>
                    <UpButton />
                </div>
            </div>
        </div>
    </footer>
  )
}
