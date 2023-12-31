import { NextResponse } from "next/server";
import { getScores } from "@/supabase/supabase";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  console.log("GETTING SCOREs");
  console.log(date);

  let data = await getScores(date);
  console.log(data);
  // data = data.map((obj) => obj.pathlength);

  return NextResponse.json(data);
}
