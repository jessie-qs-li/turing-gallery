import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("[track] GOOGLE_APPS_SCRIPT_URL is not set");
      return NextResponse.json({ ok: false, error: "missing env var" }, { status: 500 });
    }

    // Use GET + query params — POST bodies are dropped by Google's redirect
    const params = new URLSearchParams({
      type: "trial",
      timestamp: new Date().toISOString(),
      sessionId: body.sessionId ?? "",
      module: body.module ?? "",
      questionId: body.questionId ?? "",
      roundIndex: String(body.roundIndex ?? ""),
      humanSide: body.humanOnLeft ? "A" : "B",
      pickedSide: body.pickedSide ?? "",
      correct: body.correct ? "TRUE" : "FALSE",
      confidenceOption: String(body.confidenceOption ?? ""),
      responseTimeMs: String(body.responseTimeMs ?? ""),
      gameMode: body.gameMode ?? "",
    });

    const res = await fetch(`${scriptUrl}?${params.toString()}`, {
      method: "GET",
      redirect: "follow",
    });

    if (!res.ok) {
      console.error("[track] Apps Script returned", res.status, await res.text());
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[track] unexpected error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
