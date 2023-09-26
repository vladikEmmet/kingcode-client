import prisma from "@/app/api/utils/prisma";
import { NextResponse } from "next/server";
import { verifyJwt } from "../../utils/jwt";

export async function GET(req: Request, {params: { courseName }}: {params: { courseName: string }}) {
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

export async function PATCH(req: Request, {params: { id }}: {params: { id: string }}) {
  try {
    const token = req?.headers?.get("authorization")?.split(' ')[1];
    if(!token || !verifyJwt(token)) return NextResponse.json({ message: "Авторизуйтесь" }, {status: 401});
    if(!id) return NextResponse.json({ message: "Не указан id" }, {status: 400});
    const data = await (req as any).json();
    const {title, description, educationVariant, exercises, hours, price} = data;
    if(!data.id) return NextResponse.json({message: "Не указан id цены"}, {status: 400});
    const course = await prisma.course.findUnique({where: {id: +id}});
    if(!course) return NextResponse.json({ message: "Нет курса с таким id" }, {status: 400});
    const priorPrice = await prisma.price.findUnique({where: {id: data.id}});
    if(!priorPrice) return NextResponse.json({ message: "Нет цены с таким id" }, {status: 400});
    
    priorPrice.title = title || priorPrice.title;
    priorPrice.description = description || "";
    priorPrice.educationVariant = educationVariant || priorPrice.educationVariant;
    priorPrice.exercises = exercises || priorPrice.exercises;
    priorPrice.hours = hours || priorPrice.hours;
    priorPrice.price = price || priorPrice.price;

    const updatedPrice = await prisma.price.update({
      where: {id: data.id},
      data: price,
    });
    return updatedPrice;
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