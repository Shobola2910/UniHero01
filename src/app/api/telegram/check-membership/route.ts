// src/app/api/telegram/check-membership/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();
    const token = process.env.TELEGRAM_BOT_TOKEN!;
    const channel = process.env.TELEGRAM_CHANNEL!; // @UniHero_news

    if (!token || !channel || !userId) {
      return NextResponse.json({ ok: false, error: "Missing params/envs" }, { status: 400 });
    }

    const url = `https://api.telegram.org/bot${token}/getChatMember`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: channel, user_id: Number(userId) }),
    });
    const data = await res.json();

    const status = data?.result?.status as string | undefined;
    const ok = ["member", "administrator", "creator"].includes(status || "");
    return NextResponse.json({ ok, status: status || "unknown" }, { status: ok ? 200 : 403 });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
