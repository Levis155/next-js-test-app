import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: 1, name: "Levis"},
        {id: 2, name: "John"},
    ])
}

export async function POST(request: NextRequest) {
   const body = await request.json(); 
   return NextResponse.json(body);
}