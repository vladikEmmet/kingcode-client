import { axiosJson } from "@/app/api/helper"
import { AdminData } from "./admin.types"

export const AdminService = {
    async login(credentials: AdminData) {
        const {data} = await axiosJson<AdminData>({
            url: "admin/login",
            method: "POST",
            data: credentials
        });

        return data;
    }
}