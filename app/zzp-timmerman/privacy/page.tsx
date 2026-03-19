import type { Metadata } from "next";
import { PageShell } from "@/components/zzp/page-shell";

export const metadata: Metadata = {
  title: "Privacybeleid | ZZP Timmerman Startsessie",
  description: "Privacybeleid van ZZP Timmerman Startsessie.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Privacybeleid
      </h1>
      <p className="mt-4 text-sm text-zinc-500">
        Laatst bijgewerkt: maart 2026
      </p>

      <div className="mt-8 space-y-8 text-zinc-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white">1. Wie zijn wij</h2>
          <p className="mt-3">
            ZZP Timmerman Startsessie is een dienst aangeboden door een
            zelfstandig ondernemer gevestigd in Nederland. Via deze website
            bieden wij consultancy-diensten aan voor startende ZZP
            timmermannen en klusbedrijven.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">2. Welke gegevens verzamelen wij</h2>
          <p className="mt-3">
            Wanneer je het contactformulier invult, verzamelen wij de
            volgende gegevens:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Naam</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer</li>
            <li>Beschrijving van je situatie (optioneel)</li>
            <li>Gewenste startdatum (optioneel)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">3. Waarvoor gebruiken wij je gegevens</h2>
          <p className="mt-3">Wij gebruiken je gegevens uitsluitend om:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Contact met je op te nemen over de startsessie</li>
            <li>De sessies voor te bereiden op jouw situatie</li>
            <li>Toegang te verlenen tot de AI Assistent</li>
          </ul>
          <p className="mt-3">
            Wij verkopen of delen je gegevens niet met derden voor
            marketingdoeleinden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">4. Bewaartermijn</h2>
          <p className="mt-3">
            Wij bewaren je gegevens niet langer dan noodzakelijk. Contactgegevens
            worden maximaal 12 maanden bewaard na het laatste contact, tenzij er
            een lopende overeenkomst is.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">5. Je rechten</h2>
          <p className="mt-3">Op grond van de AVG heb je het recht om:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Inzage te vragen in je persoonsgegevens</li>
            <li>Je gegevens te laten corrigeren of verwijderen</li>
            <li>Bezwaar te maken tegen de verwerking</li>
            <li>Een klacht in te dienen bij de Autoriteit Persoonsgegevens</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">6. Cookies</h2>
          <p className="mt-3">
            Deze website maakt gebruik van strikt noodzakelijke cookies. Wij
            gebruiken geen tracking cookies of cookies van derden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">7. Contact</h2>
          <p className="mt-3">
            Heb je vragen over dit privacybeleid? Neem contact op via het
            contactformulier op onze website.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
