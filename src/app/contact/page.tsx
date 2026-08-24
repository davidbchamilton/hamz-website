import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { contactChannels, serviceSelectOptions } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request production work, custom beats, exclusive production, mixing and mastering, vocal production, or sync licensing."
};

type ContactPageProps = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service } = await searchParams;
  const selectedService = serviceSelectOptions.some((option) => option.value === service)
    ? service
    : "";

  return (
    <>
      <PageIntro eyebrow="Contact" title="Start a production inquiry">
        <p>
          Use the form structure below for production, beat, mix, vocal, sync,
          or general inquiries. Delivery is not connected until an approved
          email backend and anti-spam controls are configured.
        </p>
      </PageIntro>
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            className="rounded-md border border-ivory/12 bg-ivory/[0.04] p-6 sm:p-8"
            aria-describedby="contact-status"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ivory">
                Name
                <input
                  name="name"
                  className="min-h-12 rounded-md border border-ivory/12 bg-ink px-3 text-base text-ivory"
                  autoComplete="name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ivory">
                Artist Name
                <input
                  name="artistName"
                  className="min-h-12 rounded-md border border-ivory/12 bg-ink px-3 text-base text-ivory"
                  autoComplete="organization"
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
                {serviceSelectOptions.map((option) => (
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
              />
            </label>
            <p id="contact-status" className="mt-5 text-sm leading-6 text-ivory/58">
              Form submission is intentionally disabled. The `/api/contact`
              endpoint returns a safe not-implemented response until production
              email delivery, validation, and spam protection are approved.
            </p>
            <button
              type="button"
              disabled
              className="mt-6 inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-md bg-ivory/20 px-5 py-3 text-sm font-semibold text-ivory/55"
            >
              Delivery Not Connected
            </button>
          </form>
          <aside>
            <h2 className="text-2xl font-semibold text-ivory">Direct channels</h2>
            <div className="mt-6 grid gap-4">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <div
                    key={channel.label}
                    className="rounded-md border border-ivory/10 bg-ivory/[0.03] p-5"
                  >
                    <Icon className="size-5 text-brass" aria-hidden={true} />
                    <h3 className="mt-4 font-semibold text-ivory">{channel.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-ivory/58">{channel.detail}</p>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
