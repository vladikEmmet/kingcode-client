import prisma from "@/app/api/utils/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { ParamsType } from "../../utils/params.type";

export async function DELETE(req: NextApiRequest, {params: { id }}: ParamsType) {
    if(!id) return NextResponse.json({ message: "Не указан ID" }, {status: 400});
    const isExists = await prisma.abousUsSlide.findUnique({ where: { id: Number(id) } });
    if(!isExists) return NextResponse.json({ message: "Нет слайда с таким id" }, {status: 404});
    const slide = await prisma.abousUsSlide.delete({ where: { id: Number(id) } });
    NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/admin/about-us`, {status: 303});
}