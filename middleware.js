import { NextResponse } from "next/server";

// const url = "localhost:3000/";
// const url = process.env.NEXT_PUBLIC_APP_URL;

export function middleware(req) {
  const url = req.nextUrl;
  const { pathname } = url;

  if (pathname.startsWith(`/api`)) {
    if (!req.headers.get("referer")?.includes("https://wordlink2.vercel.app")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)"],
};
