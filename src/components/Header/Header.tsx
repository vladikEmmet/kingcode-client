"use client";

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "@/assets/logo.png"
import { Burger } from "./Burger/Burger"
import { SocialMedia } from "./SocialMedia/SocialMedia"
import { useSession } from "next-auth/react"

export const Header = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  
  return (
    <div className="flex-header">
      <header id="header" className={pathname !== "/" ? "without-burger" : ""}>
        <div className="container">
          <div className="wrapper">
            <SocialMedia withPhone={true}/>
            <Link href="/" className="logo">
                <Image 
                  src={logo} 
                  alt="KingCode logo"
                  priority
                />
            </Link>
            {pathname === "/"  && <Burger />}
          </div>
        </div>
      </header>
      {session && session.user &&
        <div className="admin-panel-header">
          <Link href="/admin">
            Admin
          </Link>
          <Link href="/api/auth/signout">Выйти</Link>
        </div>
      }
    </div>
  )
}
