import type { Metadata } from "next";
import { PageShell } from "@/components/zzp/page-shell";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | ZZP Timmerman Startsessie",
  description: "Algemene voorwaarden van ZZP Timmerman Startsessie.",
};

export default function VoorwaardenPage() {
  return (
    <PageShell>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Algemene Voorwaarden
      </h1>
      <p className="mt-4 text-sm text-zinc-500">
        Laatst bijgewerkt: maart 2026
      </p>

      <div className="mt-8 space-y-8 text-zinc-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white">1. Definities</h2>
          <p className="mt-3">
            <strong className="text-zinc-200">Dienstverlener:</strong> de aanbieder van de ZZP
            Timmerman Startsessie, hierna &ldquo;ik&rdquo; of &ldquo;mij&rdquo;.
          </p>
          <p className="mt-2">
            <strong className="text-zinc-200">Klant:</strong> de persoon die de startsessie afneemt,
            hierna &ldquo;jij&rdquo; of &ldquo;je&rdquo;.
          </p>
          <p className="mt-2">
            <strong className="text-zinc-200">Startsessie:</strong> het complete pakket bestaande uit
            Zoom-sessies, playbook, framework en AI Assistent toegang.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">2. Toepasselijkheid</h2>
          <p className="mt-3">
            Deze voorwaarden zijn van toepassing op alle aanbiedingen,
            overeenkomsten en diensten. Door een boeking te plaatsen ga je
            akkoord met deze voorwaarden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">3. Aanbod en prijs</h2>
          <p className="mt-3">
            De startsessie wordt aangeboden voor een eenmalig bedrag van
            &euro;399 inclusief BTW. Prijswijzigingen gelden niet voor reeds
            geboekte sessies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">4. Betaling</h2>
          <p className="mt-3">
            Betaling dient te geschieden voorafgaand aan de eerste sessie.
            Na ontvangst van de betaling wordt de eerste sessie ingepland.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">5. Planning en annulering</h2>
          <p className="mt-3">
            Sessies worden in overleg ingepland. Annulering is kosteloos
            mogelijk tot 48 uur voor de geplande sessie. Volledige restitutie
            is mogelijk als de eerste sessie nog niet heeft plaatsgevonden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">6. AI Assistent</h2>
          <p className="mt-3">
            De AI Assistent is beschikbaar voor 30 dagen na activatie op
            basis van credits. Niet-gebruikte credits vervallen na de
            30-dagen periode. De assistent biedt algemeen advies en vervangt
            geen professioneel juridisch of financieel advies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">7. Aansprakelijkheid</h2>
          <p className="mt-3">
            De startsessie biedt advies op basis van persoonlijke ervaring.
            Resultaten zijn afhankelijk van jouw inzet en situatie. Mijn
            aansprakelijkheid is beperkt tot het betaalde bedrag.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">8. Intellectueel eigendom</h2>
          <p className="mt-3">
            Alle materialen zijn uitsluitend voor persoonlijk gebruik. Delen,
            kopiëren of doorverkopen zonder schriftelijke toestemming is niet
            toegestaan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">9. Toepasselijk recht</h2>
          <p className="mt-3">
            Op deze overeenkomst is Nederlands recht van toepassing.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
