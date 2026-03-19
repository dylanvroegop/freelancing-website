"use client";

import { ArrowRight, Star } from "lucide-react";
import { trackEvent } from "@/lib/track";
import { AnimateIn } from "./animate-in";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="hero-workshop-bg pointer-events-none absolute inset-0" />
      <div className="hero-workshop-overlay pointer-events-none absolute inset-0" />
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <AnimateIn>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Verdien{" "}
              <span className="text-accent">
                &euro;8k&ndash;&euro;12k per maand
              </span>{" "}
              als ZZP timmerman
            </h1>
          </AnimateIn>

          {/* Subline */}
          <AnimateIn delay="150ms">
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Ik laat je zien hoe je als ZZP timmerman goed verdient, betere
              klanten krijgt en de fouten vermijdt waar veel starters geld op
              verliezen.
            </p>
          </AnimateIn>

          {/* Trust indicators */}
          <AnimateIn delay="250ms">
            <div className="mt-8 space-y-2 text-center">
              <p className="pt-2 text-sm text-zinc-400 sm:pt-3 sm:text-base">
                Dylan Vroegop &bull; 12+ jaar timmerman &bull; 3 jaar ZZP
                timmerman
              </p>
            </div>
          </AnimateIn>

          {/* CTA */}
          <AnimateIn delay="300ms">
            <div className="mt-10">
              <a
                href="#contact"
                onClick={() =>
                  trackEvent("cta_click", { location: "hero_primary" })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-background shadow-lg shadow-accent/20 transition-all hover:bg-accent-dark hover:shadow-accent/30 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                Boek kennismaking
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-600">
              Gratis &bull; Vrijblijvend &bull; Beperkt aantal plekken per maand
            </p>
            <p className="mt-14 flex items-center justify-center gap-2 text-sm text-zinc-300 sm:text-base">
              <span className="inline-flex items-center text-amber-300" aria-hidden>
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <span className="relative h-4 w-4">
                  <Star className="h-4 w-4 text-amber-300/45" />
                  <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                    <Star className="h-4 w-4 fill-current text-amber-300" />
                  </span>
                </span>
              </span>
              <span>
                54+ Timmermannen verdienen nu gemiddeld{" "}
                <span className="text-base font-semibold text-accent sm:text-lg">
                  € 10.208
                </span>
              </span>
            </p>
          </AnimateIn>
        </div>
      </div>

      <div className="glow-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
