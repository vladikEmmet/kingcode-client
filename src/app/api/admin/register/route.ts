import prisma from "@/app/api/utils/prisma";
import { hash } from "argon2";
import { NextResponse } from "next/server";

const hashPassword = async(password: string) => {
    const newPass = await hash(password);
    return newPass;
}

export async function POST(req: Request) {
    try {
        const token = req?.headers?.get("authorization")?.split(' ')[1];
        const data = await req.json();
        const {login, password, key} = data;
        if(!login || !password || !key) return NextResponse.json({ message: "Введите логин, пароль и секретный ключ" }, {status: 400});
        if(key !== process.env.ADMIN_KEY) return NextResponse.json({ message: "Неверный секретный ключ" }, {status: 400});
        const hashedPassword = await hashPassword(password);
        const newAdmin = await prisma.admin.create({
            data: {
                login,
                password: hashedPassword,
            }
        });
        return NextResponse.json({login, password}, {status: 200});
    } catch(err) {
        console.log(err);
        return NextResponse.json({ message: "Произошла ошибка" }, {status: 500});
    }
}