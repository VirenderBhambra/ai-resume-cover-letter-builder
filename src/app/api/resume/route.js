import {supabase} from "../../../lib/supabaseClient"
import { NextResponse } from "next/server";

export async function GET() {
  
let { data, error } = await supabase
.from('Resumes')
.select()
    console.log(data)
  return NextResponse.json(data);
}

export async function POST(req) {
  const body = await req.json();
  console.log("here post request");
  return NextResponse.json(body);
}
