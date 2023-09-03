import { axiosJson } from "@/app/api/helper"
import { AdminData, AdminFetchedData } from "./admin.types"

export const AdminService = {
    async login(credentials: AdminData) {
        const {data} = await axiosJson<AdminFetchedData>({
            url: "admin/login",
            method: "POST",
            data: credentials,
        });

        return data;
    }
}