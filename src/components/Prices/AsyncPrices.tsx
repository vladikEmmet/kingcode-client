import { PricesProps, TabProps } from "@/types/price.type"
import { Montserrat } from "next/font/google"
import { FC } from "react"
import { ButtonVariantsEnum } from "../UI/Button/Button"
import { Tab } from "../UI/Tab/Tab"
import styles from "./Prices.module.scss"

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700", "500"]});

export default async function AsyncPrices() {
  const prices = await f();
  
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.title}>
          <h2 className={montserrat.className}>Абонементы</h2>
          <h3 className={montserrat.className}>1 месяц</h3>
        </div>
        <div className={styles.wrapper}>
            {prices.map((price, idx) => 
                <Tab 
                    price={price.price} 
                    description={price.description}
                    variant={idx % 2 ? ButtonVariantsEnum.grey : ButtonVariantsEnum.orange}
                    title={price.title}
                    key={price.title}
                    hours={price.hours}
                    exercises={price.exercises}
                    educationVariant={price.educationVariant}
                />
            )}
        </div>
      </div>
    </section>
  )
}