import prisma from "@/app/api/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
    const { name, prices } = req.body;
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
}