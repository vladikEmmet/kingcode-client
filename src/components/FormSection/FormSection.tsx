import { Montserrat } from "next/font/google"
import { FC } from "react";
import { Form } from "../UI/Form/Form";
import styles from "./FormSection.module.scss";
import cn from 'clsx';

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

interface FormSectionProps {
  courseName?: string;
  className?: string;
}

export const FormSection: FC<FormSectionProps> = ({courseName, className}) => {
  return (
    <section className={cn(styles.section, className)}>
        <div className="container">
            <div className={styles.wrapper}>
                <h2 className={montserrat.className}>Остались вопросы?</h2>
                <Form courseName={courseName}/>
            </div>
        </div>
    </section>
  )
}