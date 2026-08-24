import { NextResponse } from "next/server";

export async function POST() {
  // See docs/SECURITY.md and docs/ROUTES.md before implementing contact handling.
  // Do not accept or store real user data in this placeholder phase.
  return NextResponse.json(
    { error: "Contact endpoint is not implemented yet." },
    { status: 501 }
  );
}
