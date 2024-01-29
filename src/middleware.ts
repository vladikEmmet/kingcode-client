export { default } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const config = {matcher: ["/admin/:path*"]};