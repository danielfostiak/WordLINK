import { NextResponse } from "next/server";
import { setScore } from "@/supabase/supabase";

export async function POST(request) {
  const req = await request.json();
  const { date, pathlength, path } = req;
  console.log("UPDSTE");
  console.log(date, path);

  const data = await setScore(date, pathlength, path);

  return NextResponse.json(data);
}
