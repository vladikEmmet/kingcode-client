"use client";

import { CourseData } from "@/services/course/course.types";
import { FC, useMemo, useState } from "react";
import { Button, ButtonVariantsEnum } from "../UI/Button/Button";
import styles from "./CourseList.module.scss";
import cn from 'clsx';
import { Prices } from "../Prices/Prices";
import { EducationVariantEnum, Tab } from "../UI/Tab/Tab";
import { UpdateCourseForm } from "./UpdateCourseForm/UpdateCourseForm";
import { CourseService } from "@/services/course/course.service";
import { Loader } from "../UI/Loader/Loader";
import { useModal } from "@/store/store";
import { errorCatch } from "@/app/api/helper";
import { useSession } from "next-auth/react";

interface CourseListProps {
  courses: CourseData[];
}

export const CourseList: FC<CourseListProps> = ({courses}) => {
  const [activeCourse, setActiveCourse] = useState<number | null>(null);
  const [editedTab, setEditedTab] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [exercises, setExercises] = useState(0);
  const [hours, setHours] = useState("");
  const [educationVariant, setEducationVariant] = useState<EducationVariantEnum>(EducationVariantEnum.group);
  const [isLoading, setIsLoading] = useState(false);
  const {append} = useModal();
  const session = useSession();
  
  const onClick = (id: number) => {
      setActiveCourse(id === activeCourse ? null : id);
      reset();
      setEditedTab(null);
  }

  const handleTabClick = (index: number) => {
    if(!activeCourse) return;
    setEditedTab(index);
  };

  const onSubmit = async() => {
    try {
      if(!activeCourse || !editedTab) return;
      setIsLoading(true);

      const data = {title, description, price, hours, exercises, educationVariant, id: courses[activeCourse].prices[editedTab].id }
      const newPrice = await CourseService.update(activeCourse, {...data}, session.data?.backendTokens.accessToken);

      setIsLoading(false);
      return newPrice;
    } catch(err) {
      append(<h1>{`Упс! Ошибка: ${errorCatch(err)}`}</h1>)
    }
  }

  const reset = () => {
    setEditedTab(null);
    setTitle("");
    setDescription("");
    setPrice("");
    setExercises(0);
    setHours("");
    setEducationVariant(EducationVariantEnum.group);
  }

  const onCancel = () => {
    reset();
    setEditedTab(null);
  }

  const coursesToUpdate = useMemo(() => {
    return courses.map((course) =>
    <div key={course.id}>
      <Button 
        variant={ButtonVariantsEnum.orange} 
        className={cn("admin-btn",{
          "active": activeCourse === course.id
        })} 
        key={course.id}
        onClick={() => onClick(course.id)}
      >
        {course.name}
      </Button>

      {
        activeCourse === course.id && (
          <div className={styles.prices}>
            <h2 className={styles.sub}>Кликните по табличке, которую хотите изменить</h2>
            <Prices 
              courseName={course.name}
              onClick={handleTabClick}
            />

            {
              editedTab !== null && (
                <div className={styles.tab}>
                  <Tab 
                    title={title}
                    description={description}
                    educationVariant={educationVariant}
                    price={price}
                    exercises={exercises}
                    hours={hours}
                    variant={editedTab === 1 ? ButtonVariantsEnum.grey : ButtonVariantsEnum.orange}
                  />

                  <UpdateCourseForm 
                    onSubmit={onSubmit}                    
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    hours={hours}
                    setHours={setHours}
                    exercises={exercises}
                    setExercises={setExercises}
                    educationVariant={educationVariant}
                    setEducationVariant={setEducationVariant}
                    price={price}
                    setPrice={setPrice}
                    onCancel={onCancel}
                  />
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
  }, [courses, activeCourse, editedTab, title, description, hours, exercises, price, educationVariant, handleTabClick, onSubmit, onCancel, onClick])

  if(!courses) return (
    <div className={styles.container}>
      <h1>Курсы не найдены</h1>
    </div>
  )

  if(isLoading) return <Loader />
  
  return (
    <div className={styles.container}>
      {...coursesToUpdate}
    </div>
  )
}
