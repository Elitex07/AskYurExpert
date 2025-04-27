import { Configs } from "../../../constants";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, panNumber, createdAt, status} = await request.json();
    const res = await fetch(`${Configs.API_URL}/customers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            panNumber,
            createdAt,
            status
        })
    });
  const data = await res.json();
  return NextResponse.json(data);
}