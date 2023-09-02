import { AdminService } from "@/services/admin/admin.service";
import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                login: {label: "login", type: "text", required: true},
                password: {label: "password", type: "password", required: true},
            },
            async authorize(credentials, req) {
                if(!credentials?.login || !credentials.password) return null;
                const admin = await AdminService.login(credentials);
                if(admin && admin.login === credentials.login) {
                    const {password, ...userWithoutPassword} = admin;
                    return userWithoutPassword as unknown as User;
                }
                
                return null;
            }
        }),
    ]
};