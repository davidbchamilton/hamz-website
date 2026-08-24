import { NextResponse } from "next/server";

export async function POST() {
  // See docs/BEAT_PACKS.md and docs/SECURITY.md before implementing downloads.
  // Private ZIP files must never be served from /public.
  return NextResponse.json(
    { error: "Download endpoint is not implemented yet." },
    { status: 501 }
  );
}
