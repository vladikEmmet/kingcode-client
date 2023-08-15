import { axiosJson } from "@/app/api/helper"
import { URL } from "@/types/url";
import axios from "axios";
import { AboutUsData } from "./aboutUs.types"

export const AboutUsService = {
    async getAll() {
        const {data} = await axiosJson<AboutUsData[]>({
            url: URL.aboutUs,
            method: "GET",
        });
        return data;
    }
}