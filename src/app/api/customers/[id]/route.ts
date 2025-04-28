import { Configs } from "../../../../constants";
import { NextResponse } from "next/server";

export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
  const res = await fetch(`${Configs.API_URL}/customers/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function PUT(request: Request, props: { params: Promise<{ id: string }> }) {
  const { name, email, panNumber, createdAt, status } = await request.json();
    const params = await props.params;
  const res = await fetch(`${Configs.API_URL}/customers/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      panNumber,
      createdAt,
      status,
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
  const res = await fetch(`${Configs.API_URL}/customers/${params.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return NextResponse.json(data);
}