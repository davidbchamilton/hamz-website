import type { Metadata } from "next";
import { LockKeyhole, Mail, TicketCheck } from "lucide-react";
import { MediaPlaceholder } from "@/components/media/media-placeholder";

export const metadata: Metadata = {
  title: "CMA Access",
  description:
    "Private Caribbean Music Awards beat-pack access page prepared for invited artists."
};

export default function CmaPage() {
  return (
    <section className="ambient-stage texture-line min-h-[calc(100vh-4.75rem)] px-5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Private CMA access
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-ivory sm:text-6xl">
            Exclusive Beat Packs for invited artists
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/70">
            This page is prepared for Caribbean Music Awards invite traffic.
            Real invite-code validation, secure sessions, private storage, and
            signed downloads are not implemented in this public-site phase.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Invited access", TicketCheck],
              ["Server validation next", LockKeyhole],
              ["Consent kept separate", Mail]
            ].map(([label, Icon]) => {
              const CmaIcon = Icon as typeof TicketCheck;

              return (
                <div key={label as string} className="border-t border-ivory/12 pt-4">
                  <CmaIcon className="size-5 text-brass" aria-hidden={true} />
                  <p className="mt-3 text-sm font-semibold text-ivory">{label as string}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-md border border-brass/25 bg-[#171512]/90 p-6 shadow-2xl sm:p-8">
          <MediaPlaceholder
            className="mb-6"
            label="Approved CMA or producer campaign imagery pending."
          />
          <form aria-describedby="cma-status">
            <label className="grid gap-2 text-sm font-semibold text-ivory">
              Email
              <input
                name="email"
                type="email"
                className="min-h-12 rounded-md border border-ivory/12 bg-ink px-3 text-base text-ivory"
                autoComplete="email"
              />
            </label>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-ivory">
              Invite Code
              <input
                name="inviteCode"
                className="min-h-12 rounded-md border border-ivory/12 bg-ink px-3 text-base uppercase tracking-[0.12em] text-ivory"
                autoComplete="off"
              />
            </label>
            <label className="mt-5 flex gap-3 text-sm leading-6 text-ivory/68">
              <input
                type="checkbox"
                name="marketingConsent"
                className="mt-1 size-4 rounded border-ivory/20 bg-ink"
              />
              Keep me updated about future producer releases and private packs.
            </label>
            <p id="cma-status" className="mt-5 text-sm leading-6 text-ivory/58">
              Access submission is disabled until Supabase-backed verification
              and secure private downloads are implemented.
            </p>
            <button
              type="button"
              disabled
              className="mt-6 inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center rounded-md bg-ivory/20 px-5 py-3 text-sm font-semibold text-ivory/55"
            >
              Secure Access Not Connected
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
