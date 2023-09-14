import prisma from "@/app/api/utils/prisma";
import { NextResponse } from "next/server";
import { ParamsType } from "../../utils/params.type";
import { verifyJwt } from "../../utils/jwt";

export async function DELETE(req: Request, {params: { id }}: ParamsType) {
    try {
        const token = req?.headers?.get("authorization")?.split(' ')[1];
        if(!token || !verifyJwt(token)) return NextResponse.json({ message: "Авторизуйтесь" }, {status: 401});
        if(!id) return NextResponse.json({ message: "Не указан ID" }, {status: 400});
        const isExists = await prisma.review.findUnique({ where: { id: Number(id) } });
        if(!isExists) return NextResponse.json({ message: "Слайда с таким ID не существует" }, {status: 404});
        const slide = await prisma.review.delete({ where: { id: Number(id) } });
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/admin/reviews/list`, {status: 303});
    } catch(err) {
        console.log(err);
        return NextResponse.json({message: "Внутренняя ошибка сервера"}, {status: 500});
    }
}