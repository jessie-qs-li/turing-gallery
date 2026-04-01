import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      sessionId: body.sessionId,
      module: body.module,
      questionId: body.questionId,
      roundIndex: body.roundIndex,
      humanSide: body.humanOnLeft ? "A" : "B",
      pickedSide: body.pickedSide,
      correct: body.correct,
      confidenceOption: body.confidenceOption,
      responseTimeMs: body.responseTimeMs,
      gameMode: body.gameMode,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
