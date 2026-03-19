import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZZP Timmerman Startsessie | Start zonder dure beginnersfouten",
  description:
    "Praktische begeleiding voor startende ZZP timmermannen. 2 sessies, een compleet systeem en AI assistent. Van iemand die het zelf heeft gedaan.",
  openGraph: {
    title: "ZZP Timmerman Startsessie",
    description:
      "Start als zelfstandig timmerman zonder dure beginnersfouten. Bereik sneller €8k–€12k per maand.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function ZZPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
