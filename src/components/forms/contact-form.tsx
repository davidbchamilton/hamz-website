"use client";

import { useState } from "react";

type ServiceOption = {
  value: string;
  label: string;
};

type ContactFormProps = {
  selectedService: string;
  serviceOptions: ServiceOption[];
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  selectedService,
  serviceOptions
}: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState(
    "Send a production, beat, mix, vocal, sync, or general inquiry."
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setStatusMessage("Sending inquiry...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setSubmitState("error");
        setStatusMessage(result.error ?? "Could not send the inquiry. Please try again.");
        return;
      }

      form.reset();
      setSubmitState("success");
      setStatusMessage(result.message ?? "Inquiry sent.");
    } catch {
      setSubmitState("error");
      setStatusMessage("Network error. Please use email or WhatsApp for now.");
    }
  }

  return (
    <form
      className="rounded-md border border-ivory/12 bg-ivory/[0.04] p-6 sm:p-8"
      aria-describedby="contact-status"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ivory">
          Name
          <input
            name="name"
            className="min-h-12 rounded-md border border-ivory/12 bg-ink px-3 text-base text-ivory"
            autoComplete="name"
            maxLength={120}
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ivory">
          Artist Name
          <input
            name="artistName"
            className="min-h-12 rounded-md border border-ivory/12 bg-ink px-3 text-base text-ivory"
            autoComplete="organization"
            maxLength={120}
          />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-ivory">
        Email
        <input
          name="email"
          type="email"
          className="min-h-12 rounded-md border border-ivory/12 bg-ink px-3 text-base text-ivory"
          autoComplete="email"
          maxLength={180}
          required
        />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-ivory">
        Service
        <select
          name="service"
          defaultValue={selectedService}
          className="min-h-12 rounded-md border border-ivory/12 bg-ink px-3 text-base text-ivory"
        >
          <option value="">General inquiry</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-ivory">
        Message
        <textarea
          name="message"
          rows={6}
          className="rounded-md border border-ivory/12 bg-ink px-3 py-3 text-base text-ivory"
          minLength={10}
          maxLength={3000}
          required
        />
      </label>
      <label className="sr-only">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <p
        id="contact-status"
        className={`mt-5 text-sm leading-6 ${
          submitState === "success"
            ? "text-accent-violet-text"
            : submitState === "error"
              ? "text-red-300"
              : "text-ivory/58"
        }`}
        aria-live="polite"
      >
        {statusMessage}
      </p>
      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-ivory px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-violet hover:text-white disabled:cursor-wait disabled:bg-ivory/35 disabled:text-ivory/55"
      >
        {submitState === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
