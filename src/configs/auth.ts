import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}admin/refresh`, {
        method: "POST",
        headers: {
            authorization: `Refresh ${token?.backendTokens?.refreshToken}`
        },
    });

    const response = await res.json();
    return {
        ...token,
        backendTokens: response,
    }
}

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                login: {label: "login", type: "text", required: true},
                password: {label: "password", type: "password", required: true},
            },
            async authorize(credentials, req) {
                if(!credentials?.login || !credentials.password) return null;
                const {login, password} = credentials;
                const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "admin/login", {
                    method: "POST",
                    body: JSON.stringify({
                        login,
                        password,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if(res.status == 401 || res.status == 404 || res.status == 500) {
                    return null;
                }
                const user = await res.json();
                return user;
            }
        }),
    ],

    callbacks: {
       async jwt({token, user}) {
        if(user) return {...token, ...user};
        if(new Date().getTime() < token.backendTokens.expiresIn) return token;
        return await refreshToken(token);
       },

       async session({token, session}) {
        
        session.user = token.user;
        session.backendTokens = token.backendTokens;
        return session;
       }
    }
};