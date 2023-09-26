import { FC } from "react";
import { Form } from "../UI/Form/Form";
import styles from "./FormSection.module.scss";
import cn from 'clsx';
import localFont from "next/font/local";

interface FormSectionProps {
  courseName?: string;
  className?: string;
}

const bold = localFont({src: "../../assets/fonts/Montserrat-Bold.woff2"});

export const FormSection: FC<FormSectionProps> = ({courseName, className}) => {
  return (
    <section className={cn(styles.section, className)}>
        <div className="container">
            <div className={styles.wrapper}>
                <h2 className={cn("subtitle", bold.className)}>Остались вопросы?</h2>
                <Form courseName={courseName}/>
            </div>
        </div>
    </section>
  )
}
