import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.png"
import { Burger } from "./Burger/Burger"
import { SocialMedia } from "./SocialMedia/SocialMedia"

export const Header = () => {
  
  return (
    <header id="header">
      <div className="container">
        <div className="wrapper">
          <SocialMedia />
          <Link href="/" className="logo">
              <Image 
                src={logo} 
                alt="Logo"
              />
          </Link>
          <Burger />
        </div>
      </div>
    </header>
  )
}
