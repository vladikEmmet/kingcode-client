"use client"

import PhoneInput from 'react-phone-input-2'
import { CallRequestData } from "@/services/callRequest/callRequest.types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.scss"
import { FC, useState } from 'react';
import { CallRequestService } from '@/services/callRequest/callRequest.service';
import { getCookie } from '@/utils/getCookie';
import { setCookie } from '@/utils/setCookie';
import { errorCatch } from '@/app/api/helper';
import { useModal } from '@/store/store';
import { Loader } from '../Loader/Loader';

interface FormProps {
    courseName?: string;
}

export const Form: FC<FormProps> = ({courseName}) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const {append} = useModal();
    const {register, handleSubmit, formState: {errors, isSubmitSuccessful}, control, reset} = useForm<CallRequestData>({
        mode: "onSubmit",
    });
    
    const onSubmit: SubmitHandler<CallRequestData> = async(data) => {
        try {
            const isAlreadyTried = getCookie("effort");
            if(isAlreadyTried) {
                reset({
                    name: "",
                    phone: "",
                });
                append("Мы перезвоним Вам в ближайшее время!");
                return;
            }

            setIsButtonDisabled(true);
            const formData = new FormData();
            formData.append("name", data?.name || "");
            formData.append("courseName", courseName || "");
            formData.append("phone", `+${data.phone}`);

            const sendedData = {
                name: data?.name || "",
                courseName: courseName || "",
                phone: data.phone
            }
            
            const json = await CallRequestService.post(formData, sendedData);

            if(isSubmitSuccessful) {
                reset({
                    name: "",
                    phone: "",
                });

                setCookie("effort", "true", {"max-age": 600});
            }

            setIsButtonDisabled(false);
        } catch(err) {
            append("Упс! Ошибка: " + errorCatch(err));
        }
    }
    
  return (
    <div className={styles.wrapper}>
        {isButtonDisabled ?
            <Loader /> : (
            <>
                <h3>Оставьте свой номер и мы сами свяжемся с Вами:</h3>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form} method="POST">
                    <input className={styles.input} {...register("name")} placeholder="Ваше имя"/>
                    {errors.name && <p className={styles.error}>{errors?.name?.message}</p>}
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <PhoneInput
                                    value={value}
                                    onChange={onChange}
                                    placeholder="+7 (xxx)-xxx-xx-xx"
                                    disableCountryCode={false}
                                    disableDropdown={true}
                                    prefix="+"
                                    masks={{kz: "(...) ...-..-.."}}
                                    inputProps={{
                                        autoComplete: "none",
                                        required: true,
                                    }}
                                    dropdownClass={styles.dropdown}
                                    inputClass="phone-input"
                                    specialLabel=''
                                    copyNumbersOnly={true}
                                    jumpCursorToEnd={true}
                                    defaultErrorMessage="Неверный номер телефона"
                                    containerClass={styles["phone-input"]}
                                />
                                {errors?.phone && <p className={styles.error}>{errors?.phone?.message}</p>}
                            </>
                        )}
                    />
                    <button type="submit" disabled={isButtonDisabled}>Отправить</button>
                </form>
            </>
        )}
    </div>
  )
}