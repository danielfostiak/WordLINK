// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const url = req.nextUrl;
//   const { pathname } = url;

//   if (pathname.startsWith(`/api`)) {
//     if (!req.headers.get("referer")?.includes("http://localhost:3000")) {
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)"],
// };
