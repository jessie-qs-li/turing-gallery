import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("[survey] GOOGLE_APPS_SCRIPT_URL is not set");
      return NextResponse.json({ ok: false, error: "missing env var" }, { status: 500 });
    }

    const params = new URLSearchParams({
      type: "survey",
      timestamp: new Date().toISOString(),
      sessionId: body.sessionId ?? "",
      ageRange: body.ageRange ?? "",
      education: body.education ?? "",
      field: body.field ?? "",
      aiFamiliarity: String(body.aiFamiliarity ?? ""),
      paidSubscriptions: body.paidSubscriptions ?? "",
      aiToolsUsed: (body.aiToolsUsed ?? []).join("|"),
      sourceFamiliarity: String(body.sourceFamiliarity ?? ""),
      categoriesPlayed: (body.categoriesPlayed ?? []).join("|"),
      modesTried: (body.modesTried ?? []).join("|"),
      difficulty: body.difficulty ?? "",
      strategyChange: body.strategyChange ?? "",
      detectionSignals: (body.detectionSignals ?? []).join("|"),
      mostReliableTell: body.mostReliableTell ?? "",
      preConfidence: body.preConfidence ?? "",
      postConfidence: body.postConfidence ?? "",
    });

    const res = await fetch(`${scriptUrl}?${params.toString()}`, {
      method: "GET",
      redirect: "follow",
    });

    if (!res.ok) {
      console.error("[survey] Apps Script returned", res.status, await res.text());
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[survey] unexpected error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
