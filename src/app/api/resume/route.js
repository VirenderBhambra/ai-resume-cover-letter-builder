import { supabase } from "../../../lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  let { data, error } = await supabase.from("Resumes").select();
  console.log(data);
  return NextResponse.json(data);
}

export async function POST(req) {
  const body = await req.json();
  console.log(body);

  const { data,error } = await supabase.from("Resumes").insert({
    resumeId: body.resumeId,
    auth_id: body.user_id,
    userName: body.userName,
    resumeTitle: body.resumeTitle,
    email: body.email,
  });
  if (error) console.log(error);
  else {
    console.log(data);
  }
  return NextResponse.json("ok");
}
// {
//     resumeId: body.resumeId,
//     user_id: body.user_id,
//     userName: body.userName,
//     resumeTitle: body.resumeTitle,
//     email: body.email,
//   }
