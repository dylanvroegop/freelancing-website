"use client";

import { Check, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/track";
import { AnimateIn } from "./animate-in";

const included = [
  "2x Zoom sessie (1 uur)",
  "ZZP Timmerman Playbook (PDF)",
  "Prijs- & offerteframework",
  "30 dagen AI Assistent toegang",
  "Basis juridische hulp",
];

export function OfferSection() {
  return (
    <section id="prijzen" className="relative py-20 sm:py-28">
      <div className="glow-line absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-md">
            <div className="gradient-border overflow-hidden rounded-2xl">
              <div className="p-8 sm:p-10">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                    Alles-in-1 pakket
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    ZZP Timmerman Startsessie
                  </h2>

                  <div className="mt-6 flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold tracking-tight text-white">
                      &euro;399
                    </span>
                    <span className="text-lg text-muted">eenmalig</span>
                  </div>
                </div>

                <div className="my-8 h-px bg-white/[0.06]" />

                <ul className="space-y-4">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-zinc-300"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() =>
                    trackEvent("cta_click", { location: "offer_card" })
                  }
                  className="group mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-base font-semibold text-background shadow-lg shadow-accent/20 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                >
                  Boek kennismaking
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <p className="mt-4 text-center text-sm text-muted">
                  Beperkt aantal plekken per maand
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
