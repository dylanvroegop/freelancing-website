import type { Metadata } from "next";
import { PageShell } from "@/components/zzp/page-shell";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Over mij | ZZP Timmerman Startsessie",
  description:
    "Leer meer over de persoon achter de ZZP Timmerman Startsessie. 12+ jaar ervaring als timmerman, 3 jaar zelfstandig.",
};

export default function OverPage() {
  return (
    <PageShell>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Over mij
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-400">
        <p>
          Ik ben al meer dan 12 jaar actief als timmerman. Begonnen in
          loondienst, waar ik het vak van de grond af heb geleerd. Van
          kozijnen tot dakkapellen, van renovaties tot complete
          nieuwbouwprojecten.
        </p>
        <p>
          Drie jaar geleden besloot ik de stap te zetten naar zelfstandig
          ondernemen. Niet omdat ik het makkelijk vond, maar omdat ik wist
          dat er meer in zat. In loondienst verdiende ik{" "}
          <span className="font-semibold text-white">&euro;2.200 per maand</span>.
          Nu, als ZZP&apos;er, zit ik structureel boven de{" "}
          <span className="font-semibold text-accent">&euro;10.000 per maand</span>.
        </p>
        <p>
          Die groei ging niet vanzelf. Ik heb fouten gemaakt die me
          duizenden euro&apos;s hebben gekost. Offertes waar ik kosten vergat.
          Klanten die niet betaalden. Een uurprijs die te laag was.
          Administratie die ik te lang liet liggen.
        </p>
        <p>
          Al die lessen heb ik gebundeld in de ZZP Timmerman Startsessie.
          Een praktisch systeem zodat jij dezelfde fouten kunt vermijden en
          direct goed van start gaat.
        </p>

        <h2 className="pt-4 text-2xl font-bold text-white">
          Waarom ik dit doe
        </h2>
        <p>
          Ik zie te veel goede vakmensen die wel het vakmanschap hebben, maar
          niet de kennis om een rendabel bedrijf te runnen. Ze werken hard,
          maar houden te weinig over. Dat is zonde, want met het juiste
          systeem kun je als timmerman uitstekend verdienen.
        </p>
        <p>
          Daarnaast heb ik Calvora ontwikkeld &mdash; offertesoftware
          specifiek voor de bouw. Maar deze startsessie is er voor iedereen,
          ongeacht welke tools je gebruikt.
        </p>

        <h2 className="pt-4 text-2xl font-bold text-white">
          Wat mij anders maakt
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-zinc-400">
          <li>Ik ben zelf timmerman &mdash; geen coach die het van de zijlijn roept</li>
          <li>Alles is gebaseerd op eigen ervaring, niet op theorie</li>
          <li>Persoonlijke sessies, geen standaard cursus</li>
          <li>Direct toepasbaar, geen vage adviezen</li>
        </ul>
      </div>

      <div className="mt-12 glow-card rounded-xl p-6 text-center" style={{ borderColor: "rgba(34, 197, 94, 0.15)" }}>
        <p className="text-lg font-medium text-white">
          Klaar om te starten?
        </p>
        <p className="mt-1 text-muted">
          Plan een gratis kennismaking en we bespreken jouw situatie.
        </p>
        <Link
          href="/zzp-timmerman#contact"
          className="group mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-background shadow-lg shadow-accent/20 transition-all hover:bg-accent-dark"
        >
          Boek kennismaking
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </PageShell>
  );
}
