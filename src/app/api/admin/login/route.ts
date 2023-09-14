import { AdminData } from "@/services/admin/admin.types";
import prisma from "@/app/api/utils/prisma";
import { verify } from "argon2";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { generateTokens, signJwtAccessToken } from "@/app/api/utils/jwt";

const TOKEN_EXPIRE_TIME = 3600000;

const validate = async (dto: AdminData) => {
    const {login, password} = dto;

    const user = await prisma.admin.findUnique({
      where: {login},
    })

    if(!user) return false;

    const isPasswordsMatch = await verify(user.password, password);
    if(!isPasswordsMatch) return false;
    const {password: pass, ...rest} = user;
    
    return rest;
}

export const config = {
    api: {
      bodyParser: false,
    },
}

export async function POST(req: NextApiRequest) {
  try {
    const data = await (req as any).json();
    const {login, password} = data;
    if(!login || !password) return NextResponse.json({ message: "Введите логин и пароль" }, {status: 404});   
    const isValid = await validate({login, password});
    if(!isValid) return NextResponse.json({ message: "Неверный логин или пароль" }, {status: 404});
    const {accessToken, refreshToken} = generateTokens(isValid);
    const backendTokens = {
      accessToken,
      refreshToken,
      expiresIn: new Date().setTime(new Date().getTime() + TOKEN_EXPIRE_TIME),
    }
    return NextResponse.json({
      user: {...isValid},
      backendTokens,
    }, {status: 200});
  } catch(err) {
    console.log(err);
    return NextResponse.json({ message: "Внутренняя ошибка сервера" }, {status: 500});
  }
}