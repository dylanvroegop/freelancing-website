"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/zzp-timmerman" },
  { label: "Wat je krijgt", href: "/zzp-timmerman#wat-je-krijgt" },
  { label: "Over mij", href: "/zzp-timmerman/over" },
  { label: "FAQ", href: "/zzp-timmerman#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/zzp-timmerman" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight text-white">
            ZZP Timmerman
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            Startsessie
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-muted hover:bg-white/5 hover:text-white md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-background/95 px-4 pb-6 pt-2 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base text-muted transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
