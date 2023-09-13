import prisma from "@/app/api/utils/prisma";
import { NextApiRequest } from "next";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { ParamsType } from "../../utils/params.type";

export async function DELETE(req: NextApiRequest, {params: { id }}: ParamsType) {
    if(!id) return NextResponse.json({ message: "Не указан ID" }, {status: 400});
    const isExists = await prisma.review.findUnique({ where: { id: Number(id) } });
    if(!isExists) return NextResponse.json({ message: "Слайда с таким ID не существует" }, {status: 404});
    const slide = await prisma.review.delete({ where: { id: Number(id) } });
    redirect("/admin/reviews/list");
}