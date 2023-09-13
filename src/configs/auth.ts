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
                    console.log(res.statusText);
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

// import { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authConfig: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" , required: true},
//         password: { label: "Password", type: "password", required: true },
//       },
//       async authorize(credentials, req) {
//         const res = await fetch("http://localhost:3000/api/admin/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: credentials?.username,
//             password: credentials?.password,
//           }),
//         });

//         if (res.status === 401) return null;
//         const user = await res.json();

//         if (user) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user, trigger, session }) {
//       if (trigger === "update") {
//         return { ...token, ...session.user };
//       }
//       return { ...token, ...user };
//     },

//     async session({ session, token }) {
//       session.user = token as any;
//       return session;
//     },
//   },
// };