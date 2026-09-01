import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
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
  const requestedService = service ?? "";
  const selectedService = serviceSelectOptions.some(
    (option) => option.value === requestedService
  )
    ? requestedService
    : "";

  return (
    <>
      <PageIntro eyebrow="Contact" title="Start a production inquiry">
        <p>
          Send production, beat, mix, vocal, sync, or general inquiries through
          the form, or use one of the direct channels.
        </p>
      </PageIntro>
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm
            selectedService={selectedService}
            serviceOptions={serviceSelectOptions}
          />
          <aside>
            <h2 className="text-2xl font-semibold text-ivory">Direct channels</h2>
            <div className="mt-6 grid gap-4">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                const cardClass =
                  "block rounded-md border border-ivory/10 bg-ivory/[0.03] p-5 transition-colors hover:border-accent-violet hover:bg-ivory/[0.06]";

                const cardContent = (
                  <>
                    <Icon className="size-5 text-accent-violet-text" aria-hidden={true} />
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-ivory">{channel.label}</h3>
                      {channel.href ? (
                        <ArrowUpRight className="size-4 text-accent-violet-text" aria-hidden={true} />
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-ivory/58">{channel.detail}</p>
                  </>
                );

                if (channel.href) {
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      className={cardClass}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {cardContent}
                    </a>
                  );
                }

                return (
                  <div key={channel.label} className={cardClass}>
                    {cardContent}
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
