import { NextResponse } from "next/server";
import { serviceSelectOptions } from "@/data/site";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 180;
const MAX_MESSAGE_LENGTH = 3000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  artistName?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function validatePayload(payload: ContactPayload) {
  const name = cleanString(payload.name, MAX_NAME_LENGTH);
  const artistName = cleanString(payload.artistName, MAX_NAME_LENGTH);
  const email = cleanString(payload.email, MAX_EMAIL_LENGTH).toLowerCase();
  const service = cleanString(payload.service, MAX_NAME_LENGTH);
  const message = cleanString(payload.message, MAX_MESSAGE_LENGTH);
  const website = cleanString(payload.website, MAX_NAME_LENGTH);
  const allowedServices = new Set(serviceSelectOptions.map((option) => option.value));

  if (website) {
    return {
      ok: true as const,
      spam: true as const,
      data: { name, artistName, email, service, message }
    };
  }

  if (!name) {
    return { ok: false as const, error: "Please enter your name." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false as const, error: "Please enter a valid email address." };
  }

  if (service && !allowedServices.has(service)) {
    return { ok: false as const, error: "Please choose a valid service." };
  }

  if (message.length < 10) {
    return { ok: false as const, error: "Please add a message with at least 10 characters." };
  }

  return {
    ok: true as const,
    spam: false as const,
    data: { name, artistName, email, service, message }
  };
}

async function sendEmail(data: {
  name: string;
  artistName: string;
  email: string;
  service: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;

  if (!apiKey || !from || !to) {
    return { ok: false, status: 503, error: "Email delivery is not configured yet." };
  }

  const serviceLabel =
    serviceSelectOptions.find((option) => option.value === data.service)?.label ??
    "General inquiry";
  const subject = `New HAMZXL inquiry: ${serviceLabel}`;
  const html = `
    <h1>New HAMZXL inquiry</h1>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Artist name:</strong> ${escapeHtml(data.artistName || "Not provided")}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Service:</strong> ${escapeHtml(serviceLabel)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
  `;
  const text = [
    "New HAMZXL inquiry",
    `Name: ${data.name}`,
    `Artist name: ${data.artistName || "Not provided"}`,
    `Email: ${data.email}`,
    `Service: ${serviceLabel}`,
    "",
    data.message
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: data.email,
      subject,
      html,
      text
    })
  });

  if (!response.ok) {
    return { ok: false, status: 502, error: "Email provider rejected the inquiry." };
  }

  return { ok: true, status: 200 };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid contact request." }, { status: 400 });
  }

  const validation = validatePayload(payload);

  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  if (validation.spam) {
    return NextResponse.json({
      message: "Thanks. Your inquiry has been received."
    });
  }

  const delivery = await sendEmail(validation.data);

  if (!delivery.ok) {
    return NextResponse.json({ error: delivery.error }, { status: delivery.status });
  }

  return NextResponse.json({
    message: "Thanks. Your inquiry has been sent."
  });
}
