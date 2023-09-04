import { NextResponse } from "next/server";
import { setScore } from "@/supabase/supabase";

export async function POST(request) {
  const req = await request.json();
  const { date, pathlength, path, createdAt } = req;
  console.log("UPDSTE");
  console.log(date, path);

  const data = await setScore(date, pathlength, path, createdAt);

  return NextResponse.json(data);
}
