import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
    expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTIONS: SignOption = {
    expiresIn: "1h",
};

const DEFAULT_REFRESH_SIGN_OPTIONS: SignOption = {
    expiresIn: "1d",
};

export function signJwtAccessToken(payload: JwtPayload, options: SignOption = DEFAULT_SIGN_OPTIONS) {
    const secretKey = process.env.NEXT_PUBLIC_JWT_ACCESS_SECRET || "test";
    const token = jwt.sign(payload, secretKey, options);
    return token;
}

export function signJwtRefreshToken(payload: JwtPayload, options: SignOption = DEFAULT_REFRESH_SIGN_OPTIONS) {
    const secretKey = process.env.NEXT_PUBLIC_JWT_REFRESH_SECRET || "test";
    const token = jwt.sign(payload, secretKey, options);
    return token;
}

export function generateTokens(payload: JwtPayload) {
    const accessToken = signJwtAccessToken(payload);
    const refreshToken = signJwtRefreshToken(payload);
    return {
        accessToken,
        refreshToken,
    }
}

export function verifyJwt(token: string) {
    try {
        const secretKey = process.env.NEXT_PUBLIC_JWT_ACCESS_SECRET || "test";
        const decoded = jwt.verify(token, secretKey);
        return decoded as JwtPayload;
    } catch(err) {
        console.log(err);
        return null;
    }
}