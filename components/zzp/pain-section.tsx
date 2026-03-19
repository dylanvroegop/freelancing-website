"use client";

import { X } from "lucide-react";
import { AnimateIn } from "./animate-in";

const pains = [
  { text: "Je twijfelt aan je uurprijs", detail: "Te laag = geen winst, te hoog = geen klanten" },
  { text: "Offertes kosten te veel tijd", detail: "Uren kwijt aan Excel en vergeten posten" },
  { text: "Je vergeet kosten mee te nemen", detail: "Klein materiaal, transport, afval, reistijd" },
  { text: "Slechte klanten vreten je energie", detail: "Eindeloos onderhandelen, late betalingen" },
  { text: "Geen systeem voor nieuwe klussen", detail: "Werk komt en gaat, geen voorspelbaarheid" },
];

export function PainSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Veel vakmensen starten{" "}
              <span className="text-muted">zonder systeem</span>
            </h2>
            <p className="mt-4 text-muted">
              Herkenbaar? Dan ben je niet de enige.
            </p>
          </AnimateIn>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {pains.map((p, i) => (
            <AnimateIn key={p.text} delay={`${i * 100}ms`}>
              <div className="glow-card group flex items-start gap-4 rounded-xl px-5 py-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                  <X className="h-3.5 w-3.5 text-red-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{p.text}</p>
                  <p className="mt-0.5 text-sm text-muted">{p.detail}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay="600ms">
          <p className="mx-auto mt-10 max-w-xl text-center text-lg text-muted">
            De meeste ZZP&apos;ers leren dit via{" "}
            <span className="font-semibold text-white">dure fouten</span>.{" "}
            <span className="text-accent">Dat kan sneller.</span>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
