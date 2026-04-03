import Link from "next/link";
import { SpecialText } from "@/components/ui/special-text";

const entries = [
  {
    date: "April 3",
    items: [
      "Changed UI to make everything sharp edges",
      "Integrated Google Sheets backend",
      <>New game mockup: <a href="https://partygame-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-neutral-100 underline underline-offset-4 hover:text-white">partygame-ten.vercel.app</a> — a party game where players respond to personal prompts while an AI secretly submits its own response among them. Players then read, discuss, and vote to identify which answer was written by the AI.</>,
      "Deployed this journal",
      "Made timer UI stand out more",
      "Added 'review questions' section",
      "Improved UI ('correct') page to look more like NYT article — fewer clicks",
      "Added favicon",
    ],
  },
  {
    date: "March 27",
    items: [
      <>Generated new literature section questions — it feels quite difficult to tell which is human, other than spotting aloof signs of AI writing, such as phrases that feel deep but actually don&apos;t mean much (e.g. &ldquo;sound that carried the weight of a thousand forgotten nights,&rdquo; &ldquo;like the bars of some luminous cage,&rdquo; &ldquo;The desert stretched before them like a page on which nothing had yet been written&rdquo;) and at times the classic antithesis (it&apos;s not this, but this) and rule of three. But generally it was very difficult to spot the human writing unless I had read the book before.</>,
      "Changed layout of 6-point scale to look nicer",
      "New direction for music research: instrumental music — as music with lyrics treads into the territory of identifying AI-generated text; found copyright-free performances of musical artists",
      "It's interesting to think about: would this test just come down to how 'well-educated' — previously exposed to the work of these 'masters' — the user is?",
      "Built out timed mode and marathon mode",
      "Marathon mode is practically impossible if the start time is 15s — it takes at least 30s to even finish reading the texts. So I will tweak the game rules: start time 1 min, (60−2n) additional seconds for each correct answer",
    ],
  },
  {
    date: "March 20",
    items: [
      "Added a 'visual art' section — it might be a bit too easy to discern AI-generated music and video",
      <>Refined research direction to: <em>when AI imitates the masters, can you tell the difference?</em> — because it&apos;s possible still for humans to create &ldquo;slop&rdquo;-feeling content, but with creators whom we&apos;ve prescribed to be &ldquo;masters,&rdquo; what exactly makes their work special, and is it possible to have AI replicate work that makes the audience think and feel the same way as these masters have?</>,
      "Outlined three game modes to add more metrics for investigation, as well as to promote user engagement",
      "Experimented with new set of questions for the Literature section — but the AI outputs read too similar to the original writing. The structure of the paragraph felt similar and most of the AI's work seemed to lie in simply changing wordings. So these questions have been scrapped.",
      "Added 6-point scale — would be interesting to see the relationship between user certainty and the time it takes them to answer the question",
    ],
  },
  {
    date: "March 13",
    items: [
      "Locally running prototype",
      "Generated some questions for each section",
    ],
  },
  {
    date: "March 2",
    items: [
      <>Decided to research: <em>to what extent can we distinguish AI-generated content from human-created content?</em></>,
      "Completed wireframes and research schedule",
    ],
  },
];

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
              <Link href="/about" className="transition hover:text-neutral-200">About</Link>
              <Link href="/journal" className="text-neutral-200 font-medium transition hover:text-white">Journal</Link>
            </nav>
          </div>
        </header>

        <article className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Journal</h2>
          <div className="mt-8 flex flex-col gap-10">
            {entries.map((entry) => (
              <div key={entry.date}>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{entry.date}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {entry.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-neutral-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
