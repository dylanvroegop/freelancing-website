"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimateIn } from "./animate-in";

const faqs = [
  {
    q: "Voor wie is dit?",
    a: "Voor timmermannen en klusbedrijven die net ZZP zijn geworden of dit overwegen. Of je nu al je eerste klus hebt gehad of nog moet beginnen.",
  },
  {
    q: "Is dit een cursus?",
    a: "Nee. Dit zijn persoonlijke sessies op maat. Geen opgenomen video's of generieke content, maar direct toepasbaar advies voor jouw situatie.",
  },
  {
    q: "Hoe werkt de AI Assistent?",
    a: "Na de sessies krijg je 30 dagen toegang tot een AI assistent die je vragen kan beantwoorden over offertes, klantcommunicatie en je bedrijfsvoering. Werkt op credits, dus je kunt het gebruiken wanneer je het nodig hebt.",
  },
  {
    q: "Kan ik ook Calvora nemen?",
    a: "Ja, Calvora (offertesoftware) is optioneel beschikbaar na de sessies. Geen verplichting.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="glow-line absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Veelgestelde vragen
            </h2>
          </AnimateIn>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          {faqs.map((faq, i) => (
            <AnimateIn key={i} delay={`${i * 80}ms`}>
              <div className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-white transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-expanded={open === i}
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                      open === i ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
