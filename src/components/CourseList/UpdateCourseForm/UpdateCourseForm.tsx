import { Button, ButtonVariantsEnum } from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import { RadioButton } from "@/components/UI/Input/RadioButton/RadioButton";
import { EducationVariantEnum } from "@/components/UI/Tab/Tab";
import { FC } from "react";
import styles from "./UpdateCourseForm.module.scss";

interface UpdateCourseFormProps {
    title: string;
    setTitle: Function;
    description: string;
    setDescription: Function;
    price: string;
    setPrice: Function;
    hours: string;
    setHours: Function;
    exercises: number;
    setExercises: Function;
    educationVariant: EducationVariantEnum;
    setEducationVariant: Function;
    onSubmit: any;
    onCancel: () => void;
}

export const UpdateCourseForm: FC<UpdateCourseFormProps> = 
    ({
        title, 
        setTitle, 
        description, 
        setDescription, 
        price, 
        setPrice, 
        hours, 
        setHours, 
        exercises, 
        setExercises, 
        educationVariant, 
        setEducationVariant,
        onSubmit,
        onCancel,
    }) => {
    
  return (
    <>
    <form onSubmit={onSubmit} className={styles.form}>
        <Input
            name="title"
            label="Заголовок"
            required={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <Input
            name="description"
            label="Описание (опционально)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <Input
            name="price"
            label="Цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
        />
        <Input
           name="hours"
           label="Длительность занятия" 
           value={hours}
           onChange={(e) => setHours(e.target.value)}
        />
        <Input
            type="number"
            name="exercises"
            label="Кол-во занятий"
            value={exercises}
            onChange={(e) => setExercises(+e.target.value)}
        />
        <RadioButton
            value={EducationVariantEnum.group}
            type="radio"
            name="group-variant"
            label="Групповые занятия"
            onChange={() => setEducationVariant(EducationVariantEnum.group)}
            checked={educationVariant === EducationVariantEnum.group}
        />
        <RadioButton
            type="radio"
            value={EducationVariantEnum.individual}
            name="individual-variant"
            label="Индивидуальные занятия"
            onChange={() => setEducationVariant(EducationVariantEnum.individual)}
            checked={educationVariant === EducationVariantEnum.individual}
        />
        <Button variant={ButtonVariantsEnum.orange} className="admin-btn" onClick={onCancel}>Отмена</Button>
        <Button variant={ButtonVariantsEnum.orange} className="admin-btn" type="submit">Отправить</Button>
    </form>
    </>
  )
}
