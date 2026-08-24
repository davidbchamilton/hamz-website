import { NextResponse } from "next/server";

export async function POST() {
  // See docs/BEAT_PACKS.md, docs/DATA_MODEL.md, and docs/SECURITY.md before implementing invites.
  // Invite validation must eventually happen server-side.
  return NextResponse.json(
    { error: "Invite endpoint is not implemented yet." },
    { status: 501 }
  );
}
