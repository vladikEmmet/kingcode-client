import { AboutUsData, AboutUsSendedData } from "@/services/aboutUs/aboutUs.types";
import prisma from "@/app/api/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { saveFile } from "../utils/saveFile";

export async function GET(req: NextApiRequest) {
    const slides = await prisma.abousUsSlide.findMany();
    return NextResponse.json(slides, {status: 200});
}

export async function POST(req: any) {
    try {
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
        return NextResponse.json(slide, {status: 200});
    } catch(err) {
        return NextResponse.json({ message: "Внутренняя ошибка сервера" }, {status: 500});
    }
}