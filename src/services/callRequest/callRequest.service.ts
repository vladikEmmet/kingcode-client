import { axiosFormData, axiosJson, axiosSheets } from "@/app/api/helper";
import { URL } from "@/types/url";
import axios from "axios";
import { CallRequestData } from "./callRequest.types";

export const CallRequestService = {
    async post(formData: FormData, json: CallRequestData) {
        const sheets = await axiosSheets<FormData>({
            method: "POST",
            data: formData,
        })
        
        const {data} = await axiosJson<CallRequestData>({
            url: URL.callRequest,
            method:'POST',
            data: json,
        });

        return data;
    }
}