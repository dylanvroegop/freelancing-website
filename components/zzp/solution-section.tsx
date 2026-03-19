"use client";

import { MessageSquare, Target, Zap } from "lucide-react";
import { AnimateIn } from "./animate-in";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Korte intake",
    description: "We bespreken waar je staat, wat je doelen zijn en waar je tegenaan loopt.",
  },
  {
    icon: Target,
    number: "02",
    title: "2x sessie op maat",
    description: "Praktisch, op jouw situatie afgestemd. Geen standaard theorie maar concrete oplossingen.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Systeem + hulpmiddelen",
    description: "Je krijgt een compleet framework, playbook en 30 dagen AI assistent mee.",
  },
];

export function SolutionSection() {
  return (
    <section id="hoe-het-werkt" className="relative py-20 sm:py-28">
      <div className="glow-line absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Hoe het werkt
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              De ZZP Timmerman Startsessie
            </h2>
            <p className="mt-4 text-lg text-muted">
              Twee sessies, volledig op maat. Direct toepasbaar.
            </p>
          </AnimateIn>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <AnimateIn key={s.number} delay={`${i * 150}ms`}>
              <div className="glow-card group rounded-xl p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent-glow">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">
                  Stap {s.number}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {s.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
