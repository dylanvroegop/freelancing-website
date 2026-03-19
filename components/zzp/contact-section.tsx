"use client";

import { LeadForm } from "./lead-form";
import { AnimateIn } from "./animate-in";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="glow-line absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <AnimateIn>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Start vandaag
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boek een gratis kennismaking
              </h2>
              <p className="mt-4 text-muted">
                Vul het formulier in en ik neem binnen 24 uur contact met je
                op.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay="150ms">
            <div className="mt-8">
              <LeadForm />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
