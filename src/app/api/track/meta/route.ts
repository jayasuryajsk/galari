import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

type RequestPayload = {
  eventName?: string;
  eventId?: string;
  eventSourceUrl?: string;
};

function sha256(value: string) {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function readCookieValue(cookieHeader: string | null, key: string): string | undefined {
  if (!cookieHeader) return undefined;
  const pairs = cookieHeader.split(";").map((value) => value.trim());
  const match = pairs.find((pair) => pair.startsWith(`${key}=`));
  return match?.split("=")[1];
}

export async function POST(request: NextRequest) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !accessToken) {
    return NextResponse.json({ ok: false, skipped: true }, { status: 202 });
  }

  const payload = (await request.json().catch(() => ({}))) as RequestPayload;
  const eventName = payload.eventName ?? "Lead";
  const eventId = payload.eventId ?? crypto.randomUUID();
  const eventSourceUrl = payload.eventSourceUrl ?? request.headers.get("referer") ?? "https://www.18fifty3.com.au/contact";

  const cookieHeader = request.headers.get("cookie");
  const fbp = readCookieValue(cookieHeader, "_fbp");
  const fbc = readCookieValue(cookieHeader, "_fbc");
  const email = request.headers.get("x-user-email") ?? "";

  const userData: Record<string, string> = {};
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;
  if (email) userData.em = sha256(email);

  const response = await fetch(`https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: eventSourceUrl,
          action_source: "website",
          event_id: eventId,
          user_data: userData,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json({ ok: false, error: errorText }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
