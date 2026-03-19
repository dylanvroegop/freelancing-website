"use client";

import Image from "next/image";
import { AnimateIn } from "./animate-in";

export function AboutSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="glow-line absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
            {/* Photo */}
            <AnimateIn>
              <div className="shrink-0">
                <div className="relative">
                  {/* Glow behind image */}
                  <div className="absolute -inset-2 rounded-2xl bg-accent/10 blur-xl" />
                  <Image
                    src="/dylan.jpg"
                    alt="Dylan - ZZP Timmerman"
                    width={240}
                    height={240}
                    className="relative h-48 w-48 rounded-2xl object-cover ring-1 ring-white/10 sm:h-56 sm:w-56"
                  />
                </div>
              </div>
            </AnimateIn>

            {/* Text */}
            <div className="text-center md:text-left">
              <AnimateIn delay="100ms">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Over mij
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Geen theorie &mdash; ik heb dit zelf gedaan
                </h2>
              </AnimateIn>

              {/* Income journey visual */}
              <AnimateIn delay="200ms">
                <div className="mt-8 flex items-center justify-center gap-6 sm:gap-10 md:justify-start">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-muted sm:text-3xl">
                      &euro;2.2k
                    </div>
                    <div className="mt-1 text-xs text-muted">Loondienst</div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-px w-16 bg-gradient-to-r from-muted to-accent sm:w-24" />
                    <span className="text-xs text-muted">3 jaar</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent sm:text-3xl">
                      &euro;10k+
                    </div>
                    <div className="mt-1 text-xs text-accent/70">Zelfstandig</div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay="300ms">
                <div className="mt-6 space-y-3 text-muted leading-relaxed">
                  <p>
                    12+ jaar timmerman. Drie jaar geleden de stap gemaakt
                    naar zelfstandig ondernemen. Het ging niet vanzelf
                    &mdash; fouten met offertes, verkeerde klanten, te laag
                    geprijsd.
                  </p>
                  <p>
                    Die lessen heb ik gebundeld in een praktisch systeem.
                    Zodat jij niet dezelfde fouten hoeft te maken en{" "}
                    <span className="text-white">
                      sneller op het niveau zit waar je wilt zijn.
                    </span>
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
