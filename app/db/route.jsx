import { NextResponse } from "next/server";
import { setNewRecord } from "@/supabase/supabase";

export async function POST(request) {
  const req = await request.json();
  const { newRecord, date } = req;

  const data = await setNewRecord(newRecord, date);

  return NextResponse.json(data);
}
