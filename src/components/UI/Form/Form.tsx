"use client"

import PhoneInput from 'react-phone-input-2'
import { CallRequestData } from "@/services/callRequest/callRequest.types";
import { Montserrat } from "next/font/google"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.scss"
import { FC, forwardRef, useState } from 'react';
import { CallRequestService } from '@/services/callRequest/callRequest.service';

const montserrat = Montserrat({subsets: ["cyrillic"], weight: ["700"]});

interface FormProps {
    courseName?: string;
}

export const Form: FC<FormProps> = ({courseName}) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const {register, handleSubmit, formState: {errors}, control, reset, clearErrors} = useForm<CallRequestData>({
        mode: "onSubmit",
    });
    
    const onSubmit: SubmitHandler<CallRequestData> = async(data) => {
        try {
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

            reset();

            setIsButtonDisabled(false);
        } catch(err) {
            console.log(err);
        }
    }
    
  return (
    <div className={styles.wrapper}>
        <h3 className={montserrat.className}>Оставьте свой номер и мы сами свяжемся с Вами:</h3>
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
                            value=""
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
                        />
                        {errors?.phone && <p className={styles.error}>{errors?.phone?.message}</p>}
                    </>
                )}
            />
            <button type="submit" disabled={isButtonDisabled}>Отправить</button>
        </form>
    </div>
  )
}