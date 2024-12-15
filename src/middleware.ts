import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const token = req.cookies.get("blife-token");

  if (!token && !pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  const res = NextResponse.next();
  res.headers.set("current-path", pathname);

  return res;
}

export const config = {
  matcher: ["/((?!auth).)*"],
};
