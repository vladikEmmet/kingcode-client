import axios from "axios";

const getJsonContentType = () => ({
    "Content-Type": "application/json",
});

const getFormDataContentType = () => ({
    "Content-Type":"multipart/form-data",
})

export const errorCatch = (error: any): string => {
    const message = error?.response?.data?.message;
    return (message 
    ? typeof error.response.data.message === "object" 
        ? message[0] : message 
        : error.message);
}

const axiosJsonOptions = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: getJsonContentType(),
};

const axiosFormDataOptions = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: getFormDataContentType(),
}

const axiosFormDataSheetsOptions = {
    baseURL: process.env.NEXT_PUBLIC_SHEETS_URL,
    headers: getFormDataContentType(),
}

export const axiosJson = axios.create(axiosJsonOptions);
export const axiosFormData = axios.create(axiosFormDataOptions);
export const axiosSheets = axios.create(axiosFormDataSheetsOptions);