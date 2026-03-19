"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/track";
import { ArrowRight } from "lucide-react";

interface FormData {
  naam: string;
  email: string;
  telefoon: string;
  situatie: string;
  wanneerStarten: string;
}

interface FieldErrors {
  [key: string]: string[] | undefined;
}

export function LeadForm() {
  const [form, setForm] = useState<FormData>({
    naam: "",
    email: "",
    telefoon: "",
    situatie: "",
    wanneerStarten: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setStatus("loading");
    trackEvent("form_submit");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setStatus("error");
        return;
      }

      setStatus("success");
      trackEvent("form_success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glow-card rounded-xl p-8 text-center" style={{ borderColor: "rgba(34, 197, 94, 0.2)" }}>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
          <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Bedankt!</h3>
        <p className="mt-2 text-muted">
          Ik neem zo snel mogelijk contact met je op om een moment in te
          plannen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Field
        label="Naam"
        name="naam"
        type="text"
        required
        value={form.naam}
        onChange={(v) => update("naam", v)}
        error={errors.naam}
        placeholder="Je volledige naam"
      />
      <Field
        label="E-mailadres"
        name="email"
        type="email"
        required
        value={form.email}
        onChange={(v) => update("email", v)}
        error={errors.email}
        placeholder="naam@voorbeeld.nl"
      />
      <Field
        label="Telefoonnummer"
        name="telefoon"
        type="tel"
        required
        value={form.telefoon}
        onChange={(v) => update("telefoon", v)}
        error={errors.telefoon}
        placeholder="06 1234 5678"
      />
      <Field
        label="Beschrijf kort je situatie"
        name="situatie"
        type="textarea"
        value={form.situatie}
        onChange={(v) => update("situatie", v)}
        error={errors.situatie}
        placeholder="Bijv. ik ben net gestart als ZZP timmerman en zoek hulp bij..."
      />
      <Field
        label="Wanneer wil je starten?"
        name="wanneerStarten"
        type="text"
        value={form.wanneerStarten}
        onChange={(v) => update("wanneerStarten", v)}
        error={errors.wanneerStarten}
        placeholder="Bijv. zo snel mogelijk, volgende maand, etc."
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-base font-semibold text-background shadow-lg shadow-accent/20 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-60"
      >
        {status === "loading" ? (
          "Versturen..."
        ) : (
          <>
            Boek kennismaking
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      {status === "error" && !Object.keys(errors).length && (
        <p className="text-center text-sm text-red-400">
          Er ging iets mis. Probeer het later opnieuw.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  error?: string[];
  placeholder?: string;
}) {
  const id = `field-${name}`;
  const baseClasses =
    "block w-full rounded-lg border bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all";
  const borderClass = error ? "border-red-500/50" : "border-white/[0.08] hover:border-white/[0.15]";

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-zinc-300">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseClasses} ${borderClass}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseClasses} ${borderClass}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-400">
          {error[0]}
        </p>
      )}
    </div>
  );
}
