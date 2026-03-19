import type { Metadata } from "next";
import { PageShell } from "@/components/zzp/page-shell";
import { LeadForm } from "@/components/zzp/lead-form";
import { Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | ZZP Timmerman Startsessie",
  description:
    "Neem contact op voor een gratis kennismaking over de ZZP Timmerman Startsessie.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "Via het formulier hieronder",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "Ik bel je terug na aanvraag",
  },
  {
    icon: Clock,
    label: "Reactietijd",
    value: "Binnen 24 uur op werkdagen",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-muted">
          Heb je vragen of wil je een gratis kennismaking inplannen? Laat je
          gegevens achter.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {contactInfo.map((item) => (
          <div
            key={item.label}
            className="glow-card flex flex-col items-center rounded-xl p-5 text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <item.icon className="h-5 w-5 text-accent" />
            </div>
            <p className="mt-3 text-sm font-semibold text-white">
              {item.label}
            </p>
            <p className="mt-1 text-sm text-muted">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <LeadForm />
      </div>
    </PageShell>
  );
}
