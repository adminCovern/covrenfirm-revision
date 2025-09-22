// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Sovereign AI that <span className="underline underline-offset-4">executes</span>. Not negotiates.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          We turn chaos into throughput—building AI operators that erase drag and multiply cashflow. Zero dependencies.
          Absolute control. Outcomes only.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90 transition"
            aria-label="Book the Command Briefing"
          >
            Book the Command Briefing
          </Link>
          <a
            href="#demo"
            className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:bg-zinc-900 transition"
          >
            See the Shadow Board in action
          </a>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Zero-Dependency Architecture</h3>
            <p className="mt-2 text-zinc-400">Own the stack. Own the upside. No rented intelligence.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Execution > Opinions</h3>
            <p className="mt-2 text-zinc-400">Operators that do the work—calls, emails, workflows—without stalling.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Measured by Throughput</h3>
            <p className="mt-2 text-zinc-400">We track cycle time and cashflow—not vanity metrics.</p>
          </div>
        </div>
      </section>

      {/* DEMO ANCHOR */}
      <section id="demo" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold">Watch the system work</h2>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Short demo of the Shadow Board executing a real task. Replace this section with your production clip.
        </p>
        <div className="mt-8 aspect-video w-full rounded-xl border border-zinc-800 bg-zinc-950 grid place-items-center">
          <span className="text-zinc-500">[ Embed demo video here when ready ]</span>
        </div>
      </section>
    </main>
  );
}
