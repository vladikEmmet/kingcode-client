import loader from "@/assets/loader.png";
import { FC } from "react";
import cn from 'clsx';
import Image from "next/image";

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({className}) => {
    
  return (
    <div className="loader-container">
        <div className={cn("loader-img", className)}>
            <Image 
                src={loader}
                alt="Выполняется загрузка..."
                width={100}
                height={100}
            />
        </div>
    </div>
  )
}
