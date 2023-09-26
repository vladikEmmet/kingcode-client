import prisma from "@/app/api/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { saveFile } from "../utils/saveFile";
import { verifyJwt } from "../utils/jwt";

export async function GET(req: Request) {
    const slides = await prisma.abousUsSlide.findMany();
    return NextResponse.json(slides, {status: 200});
}

export async function POST(req: any) {
    try {
        const token = req?.headers?.get("authorization")?.split(' ')[1];
        if(!token || !verifyJwt(token)) return NextResponse.json({message: "Пожалуйста, авторизуйтесь"}, {status: 401});
        const formData = await req.formData();
        const file: File | null = formData.get("file") as unknown as File;
        const type: string = formData.get("type") as string;
        if(!file) return NextResponse.json({ message: "Вы не прикрепили файл" }, {status: 400});
        if(!type) return NextResponse.json({ message: "Вы не указали тип слайда" }, {status: 400});
        const fileName = await saveFile(file, type as any);
    
        const slide = await prisma.abousUsSlide.create({
            data: {
                type,
                link: fileName,
            }
        });
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/admin`, {status: 303});
    } catch(err) {
        console.log(err);
        return NextResponse.json({ message: "Внутренняя ошибка сервера" }, {status: 500});
    }
}