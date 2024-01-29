"use client";

import Cookies from "js-cookie";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useModal } from "@/store/store";
import { RestrictModal } from "./RestrictModal/RestrictModal";

interface RestrictModalProviderProps {
  children?: React.ReactNode;
  restrictedCountries: string | string[];
}

export const RestrictModalProvider: FC<RestrictModalProviderProps> = ({ restrictedCountries, children }) => {
  const [isRestricted, setIsRestricted] = useState(false);
  const modal = useModal();
  
  useEffect(() => {
    const hasVisited = Cookies.get("hasVisited");

    if(!hasVisited) {
      axios.get('https://geolocation-db.com/json/')
            .then(res => {
              const { country_name } = res.data;

              if(restrictedCountries.includes(country_name)) {
                Cookies.set("hasVisited", "true", { expires: 2 });
                setIsRestricted(true);
                modal.append(<RestrictModal />, {"background": "#2d2d2d", "border": "1px solid #AEAEAE", "box-shadow": "none"}, "white");
              }
            }).catch(err => console.error("Не удалось определить местоположение: ", err));
    }
  }, []);

  return children;
}