"use client"

import * as Scroll from "react-scroll"
import Image from "next/image"
import img from "../../assets/Up-Btn.png"

export const UpButton = () => {
  const onClick = () => Scroll.animateScroll.scrollToTop({duration: 100});
    
  return (
    <div className="up-btn" onClick={onClick}>
        <Image 
            src={img}
            alt={`Кнопка "Наверх"`}
        />
    </div>
  )
}
