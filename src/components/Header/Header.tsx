"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "../../../public/logo.png"
import { Burger } from "./Burger/Burger"
import { SocialMedia } from "./SocialMedia/SocialMedia"
import { useSession } from "next-auth/react"

export const Header = () => {
  const pathname = usePathname();
  const { data: user } = useSession()
  
  return (
    <div className="flex-header">
      <header id="header" className={pathname !== "/" ? "without-burger" : ""}>
        <div className="container">
          <div className="wrapper">
            <SocialMedia withPhone={true}/>
            <Link href="/" className="logo">
                <Image 
                  src={logo} 
                  alt="Logo"
                  priority
                />
            </Link>
            {pathname === "/"  && <Burger />}
          </div>
        </div>
      </header>
      {user &&
        <div className="admin-panel-header">
          <Link href="/admin">
            Admin
          </Link>
        </div>
      }
    </div>
  )
}
