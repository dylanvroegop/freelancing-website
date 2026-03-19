import Link from "next/link";

const columns = [
  {
    title: "AANBOD",
    links: [
      { label: "Startsessie", href: "/zzp-timmerman#wat-je-krijgt" },
      { label: "Hoe het werkt", href: "/zzp-timmerman#hoe-het-werkt" },
      { label: "Prijzen", href: "/zzp-timmerman#prijzen" },
      { label: "Contact", href: "/zzp-timmerman#contact" },
    ],
  },
  {
    title: "INFORMATIE",
    links: [
      { label: "Over mij", href: "/zzp-timmerman/over" },
      { label: "Veelgestelde vragen", href: "/zzp-timmerman#faq" },
      { label: "Contact", href: "/zzp-timmerman/contact" },
    ],
  },
  {
    title: "JURIDISCH",
    links: [
      { label: "Privacybeleid", href: "/zzp-timmerman/privacy" },
      { label: "Algemene voorwaarden", href: "/zzp-timmerman/voorwaarden" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-white">
                ZZP Timmerman
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Startsessie
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Praktische begeleiding voor startende zelfstandig timmermannen.
              Van iemand die het zelf heeft gedaan.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} ZZP Timmerman Startsessie. Alle
            rechten voorbehouden.
          </p>
          <p className="text-sm text-zinc-700">
            KvK: 12345678 &bull; BTW: NL001234567B01
          </p>
        </div>
      </div>
    </footer>
  );
}
