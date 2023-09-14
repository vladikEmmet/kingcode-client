import prisma from "@/app/api/utils/prisma";
import { NextResponse } from "next/server";
import { verifyJwt } from "../utils/jwt";

export async function POST(req: Request) {
    try {
        const token = req?.headers?.get("authorization")?.split(' ')[1];
        if(!token || !verifyJwt(token)) return NextResponse.json({ message: "Авторизуйтесь" }, {status: 401});
        const json = await req.json();
        const { name, prices } = json;
        if(!name || !prices) return NextResponse.json({ message: "Заполните все поля" }, {status: 400});
        if(prices.length !== 3) return NextResponse.json({ message: "У курса должно быть 3 цены" }, {status: 400});
        const isExists = await prisma.course.findUnique({where: {name}});
        if(isExists) return NextResponse.json({message: "Курс с таким названием уже существует"}, {status: 400});
        const course = await prisma.course.create({
            data: {
                name,
                prices: {
                    createMany: {
                        data: prices,
                    },
                },
            }
        });
        return NextResponse.json(course, {status: 200});
    } catch(err) {
        console.log(err);
        return NextResponse.json({message: "Внутренняя ошибка сервера"}, {status: 500});
    }
}

export async function GET(req: Request) {
    try {
        const courses = await prisma.course.findMany({
            select: {
                id: true,
                createdAt: true,
                updatedAt: true,
                name: true,
                prices: true,
            }
        });
        return NextResponse.json(courses, {status: 200});
    } catch(err) {
        console.log(err);
        return NextResponse.json({message: "Внутренняя ошибка сервера"}, {status: 500});
    }
}