"use client";

import {
  Video,
  BookOpen,
  Calculator,
  ShieldAlert,
  PenLine,
  Scale,
  Bot,
} from "lucide-react";
import { AnimateIn } from "./animate-in";

const items = [
  { icon: Video, label: "2x Zoom sessies (1 uur)", desc: "Persoonlijk, op maat" },
  { icon: BookOpen, label: "ZZP Timmerman Playbook", desc: "PDF met alles op een rij" },
  { icon: Calculator, label: "Prijs- & offerteframework", desc: "Nooit meer kosten vergeten" },
  { icon: ShieldAlert, label: "Klantenfilter", desc: "Slechte klanten herkennen" },
  { icon: PenLine, label: "Offerte copywriting", desc: "Kort, professioneel, overtuigend" },
  { icon: Scale, label: "Juridische basis", desc: "Algemene voorwaarden e.d." },
  { icon: Bot, label: "AI Assistent (30 dagen)", desc: "24/7 hulp bij vragen" },
];

export function DeliverablesSection() {
  return (
    <section id="wat-je-krijgt" className="relative py-20 sm:py-28">
      <div className="glow-line absolute top-0 left-0 right-0" />
      <div className="dot-pattern pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Het complete pakket
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Wat je krijgt
            </h2>
            <p className="mt-4 text-lg text-muted">
              Geen losse tips, maar een compleet systeem.
            </p>
          </AnimateIn>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <AnimateIn key={item.label} delay={`${i * 80}ms`}>
              <div className="glow-card group flex items-start gap-4 rounded-xl p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-white">{item.label}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
