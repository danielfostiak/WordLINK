import { NextResponse } from "next/server";

// const domain = "http://localhost:3000";

// export function middleware(req) {
//   const url = req.nextUrl;
//   const { pathname } = url;

//   if (pathname.startsWith(`/api`)) {
//     if (!req.headers.get("referer")?.includes(domain)) {
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)"],
// };

const domain = process.env.NEXT_PUBLIC_APP_URL;
const domain2 = process.env.NEXT_PUBLIC_APP_URL2;

export function middleware(req) {
  const url = req.nextUrl;
  const { pathname } = url;

  if (pathname.startsWith(`/api`)) {
    if (
      !req.headers.get("referer")?.includes(domain) ||
      !req.headers.get("referer")?.includes(domain2)
    ) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)"],
};
