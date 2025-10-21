// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // Here you can forward to Telegram/Email/Zapier etc.
  console.log("CONTACT_FORM:", body);
  return NextResponse.json({ ok: true });
}
