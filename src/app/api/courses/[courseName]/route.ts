import prisma from "@/app/api/utils/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
    const {courseName} = req.query;
    if(!courseName) return NextResponse.json({ message: "No name" }, {status: 400});
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
}

export async function PATCH(req: NextApiRequest) {
    const { name } = req.query;

}

export async function DELETE(req: NextApiRequest) {
    const { name } = req.query;
    if(!name) return NextResponse.json({ message: "No id provided" }, {status: 400});
    const isExists = await prisma.course.findUnique({ where: {name: name as string} });
    if(!isExists) return NextResponse.json({ message: "Нет курса с таким id" }, {status: 400});
    const removedCourse = await prisma.course.delete({ where: { name: name as string } });
    NextResponse.redirect("/admin/prices", {status: 303});   
}