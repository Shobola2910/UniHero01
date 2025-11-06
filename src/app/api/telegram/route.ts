// src/app/api/telegram/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, username, comment } = await req.json();

    // ✅ Env o‘qish
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Missing TELEGRAM_* envs" },
        { status: 500 }
      );
    }

    const text =
      `🆕 UniHero Contact\n` +
      `👤 Name: ${name}\n` +
      `🔗 User: ${username}\n` +
      `💬 Comment: ${comment || "-"}\n` +
      `⏰ ${new Date().toISOString()}`;

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!res.ok) {
      const t = await res.text();
      return NextResponse.json({ ok: false, error: t }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
