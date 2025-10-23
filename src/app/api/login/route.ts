import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Forward request to your Go backend
    const res = await fetch(`${process.env.BE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // Parse backend response
    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: data.error || "Login failed" }, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Error forwarding to Go backend:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
