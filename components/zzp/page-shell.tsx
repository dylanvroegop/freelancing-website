import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-28">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
