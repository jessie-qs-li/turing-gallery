import Link from "next/link";
import { SpecialText } from "@/components/ui/special-text";

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-neutral-50">
      <main className="mx-auto max-w-5xl flex flex-col px-4 py-8 sm:px-6 lg:px-10">
        <header className="border-b border-white/10 pb-6">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <SpecialText className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  The Turing Gallery
                </SpecialText>
              </Link>
            </h1>
            <nav className="flex items-center gap-4 pt-1 text-sm text-neutral-400">
              <Link href="/about" className="transition hover:text-neutral-200">
                About
              </Link>
              <Link href="/journal" className="text-neutral-200 font-medium transition hover:text-white">
                Journal
              </Link>
            </nav>
          </div>
        </header>

        <article className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Journal</h2>
          <p className="mt-6 text-neutral-400 italic">Coming soon.</p>
        </article>
      </main>
    </div>
  );
}
