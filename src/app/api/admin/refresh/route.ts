import { NextResponse } from "next/server";
import { generateTokens, verifyJwt } from "../../utils/jwt";

const TOKEN_EXPIRE_TIME = 3600000;

export async function POST(req: Request) {
    try {
        const refresh = req?.headers?.get("authorization");
        if(!refresh) return NextResponse.json({message: "Unauthorized"}, {status: 401});
        const token = refresh?.split(" ")[1];
        if(!token) return NextResponse.json({message: "Unauthorized"}, {status: 401});
        const isValid = verifyJwt(token);
        if(!isValid) return NextResponse.json({message: "Unauthorized"}, {status: 401});
        const {login, id} = isValid;
        const {accessToken, refreshToken} = generateTokens({login, id});
        return NextResponse.json({
            user: {...isValid},
            backendTokens: {
                accessToken,
                refreshToken,
                expiresIn: new Date().setTime(new Date().getTime() + TOKEN_EXPIRE_TIME),
            }
        }, {status: 200});
    } catch(err) {
        console.log(err);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}