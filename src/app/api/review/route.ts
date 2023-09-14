import prisma from "@/app/api/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { saveFile } from "../utils/saveFile";
import { verifyJwt } from "../utils/jwt";

export async function GET(req: NextApiRequest) {
    const reviews = await prisma.review.findMany();
    return NextResponse.json(reviews, {status: 200});
}

export async function POST(req: any) {
    try {
        const token = req?.headers?.get("authorization")?.split(' ')[1];
        if(!token || !verifyJwt(token)) return NextResponse.json({message: "Пожалуйста, авторизуйтесь"}, {status: 401});
        const formData = await req.formData();
        const file: File | null = formData.get("file") as unknown as File;
        const authorName = formData.get("authorName") as string;
        const text = formData.get("text") as string;
        if(!authorName || !text) return NextResponse.json({ message: "Не все поля заполнены" }, {status: 400});
        let fileName = "";
        if(file) {
            fileName = await saveFile(file, "img");
        }
    
        const review = await prisma.review.create({
            data: {
                authorName: authorName,
                text: text,
                authorImg: fileName,
            }
        });
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/admin/reviews`, {status: 303});
    } catch(err) {
        console.log(err);
        return NextResponse.json({ message: "Внутренняя ошибка сервера" }, {status: 500});
    }
}