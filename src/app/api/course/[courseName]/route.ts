import prisma from "@/app/api/utils/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { verifyJwt } from "../../utils/jwt";

export async function GET(req: NextApiRequest, {params: { courseName }}: {params: { courseName: string }}) {
  try {
    const course = await prisma.course.findUnique({where: {name: courseName as string},
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          prices: true,
        }
      });
    
    if(!course || !course.prices) return NextResponse.json({ message: "Нет цен на этот курс" }, {status: 404});
    return NextResponse.json(course, {status: 200});
  } catch(err) {
    console.log(err);
    return NextResponse.json({ message: "Внутренняя ошибка сервера" }, {status: 500});
  }
}

export async function PATCH(req: Request, {params: { name }}: {params: { name: string }}) {
  try {
    const token = req?.headers?.get("authorization")?.split(' ')[1];
    if(!token || !verifyJwt(token)) return NextResponse.json({ message: "Авторизуйтесь" }, {status: 401});
  } catch(err) {
    return NextResponse.json({ message: "Внутренняя ошибка сервера" }, {status: 500});
  }
}

export async function DELETE(req: Request, {params: { name }}: {params: { name: string }}) {
  try {
    const token = req?.headers?.get("authorization")?.split(' ')[1];
    if(!token || !verifyJwt(token)) return NextResponse.json({ message: "Авторизуйтесь" }, {status: 401});
    if(!name) return NextResponse.json({ message: "Не указан id" }, {status: 400});
    const isExists = await prisma.course.findUnique({ where: {name: name as string} });
    if(!isExists) return NextResponse.json({ message: "Нет курса с таким id" }, {status: 400});
    const removedCourse = await prisma.course.delete({ where: { name: name as string } });
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/admin/prices`, {status: 303});   
  } catch(err) {
    console.log(err);
    return NextResponse.json({ message: "Внутренняя ошибка сервера" }, {status: 500});
  }
}