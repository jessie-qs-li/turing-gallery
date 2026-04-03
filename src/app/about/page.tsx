import Link from "next/link";
import { SpecialText } from "@/components/ui/special-text";

export default function AboutPage() {
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
              <Link href="/about" className="text-neutral-200 font-medium transition hover:text-white">
                About
              </Link>
              <Link href="/journal" className="transition hover:text-neutral-200">
                Journal
              </Link>
            </nav>
          </div>
        </header>

        <article className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About</h2>
          <p className="mt-6 leading-relaxed text-neutral-300">
            The Turing Gallery is an interactive experiment created by{" "}
            <a
              href="https://www.linkedin.com/in/jessie-qi-shan-li/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 underline underline-offset-4 hover:text-white"
            >
              Jessie Li
            </a>
            , a student at{" "}
            <a
              href="https://columbia.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 underline underline-offset-4 hover:text-white"
            >
              Columbia University
            </a>
            , as part of her research with the{" "}
            <a
              href="https://www.digitalstorytellinglab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 underline underline-offset-4 hover:text-white"
            >
              Columbia Digital Storytelling Lab
            </a>
            . She is mentored by{" "}
            <a
              href="https://arts.columbia.edu/directory/frank-rose"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 underline underline-offset-4 hover:text-white"
            >
              Professor Frank Rose
            </a>
            .
          </p>
          <p className="mt-4 leading-relaxed text-neutral-300">
            You can reach Jessie at{" "}
            <a
              href="mailto:jql2104@columbia.edu"
              className="text-neutral-100 underline underline-offset-4 hover:text-white"
            >
              jql2104 [at] columbia [dot] edu
            </a>
            .
          </p>
          <p className="mt-4 leading-relaxed text-neutral-300">
            Your responses, confidence ratings, and reaction times are collected anonymously.
          </p>
        </article>
      </main>
    </div>
  );
}
