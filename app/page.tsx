import Image from "next/image";
import { getRanking } from "@/app/lib/googleSheets";

export default async function Home() {
  const ranking = await getRanking();
  const topThree = ranking.slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Logo */}

      <section className="flex flex-col items-center pt-4">

        <Image
          src="/images/royal-hotel-logo-cropped.jpg"
          alt="Royal Hotel"
          width={420}
          height={420}
          priority
          className="w-[340px] max-w-[90vw] h-auto"
        />

      </section>

      {/* Hero */}

      <section className="text-center -mt-6">

        <h1 className="text-6xl md:text-7xl font-black tracking-wide">
          GOAL RUSH
        </h1>
        <p className="mt-3 text-center text-2xl font-bold tracking-[0.35em] text-yellow-400">
          EVERY. GOAL. COUNTS.
        </p>

        <p className="mt-2 text-xl font-semibold text-yellow-400">
          Season 2026/27
        </p>

      </section>

      {/* Navigation */}

      <section className="px-5 pt-10">

        <div className="mx-auto max-w-md space-y-5">

          <a
            href="/leaderboard"
            className="block rounded-3xl border border-yellow-500/30 bg-[#111111] p-6 transition hover:bg-[#1b1b1b]"
          >
            <div className="flex items-center justify-between">

              <div>
                <div className="text-4xl">🏆</div>

                <h2 className="mt-3 text-2xl font-bold">
                  Live Leaderboard
                </h2>

                <p className="mt-1 text-zinc-400">
                  View the latest standings
                </p>
              </div>

              <span className="text-2xl text-zinc-500">→</span>

            </div>
          </a>

          <a
            href="/teams"
            className="block rounded-3xl border border-yellow-500/30 bg-[#111111] p-6 transition hover:bg-[#1b1b1b]"
          >
            <div className="flex items-center justify-between">

              <div>
                <div className="text-4xl">🔍</div>

                <h2 className="mt-3 text-2xl font-bold">
                  Find My Teams
                </h2>

                <p className="mt-1 text-zinc-400">
                  Search your competition entry
                </p>
              </div>

              <span className="text-2xl text-zinc-500">→</span>

            </div>
          </a>

       

          <a
            href="/information"
            className="block rounded-3xl border border-yellow-500/30 bg-[#111111] p-6 transition hover:bg-[#1b1b1b]"
          >
            <div className="flex items-center justify-between">

              <div>
                <div className="text-4xl">ℹ️</div>

                <h2 className="mt-3 text-2xl font-bold">
                  Competition Information
                </h2>

                <p className="mt-1 text-zinc-400">
                  Rules, prizes, charity & FAQ
                </p>
              </div>

              <span className="text-2xl text-zinc-500">→</span>

            </div>
          </a>

        </div>

      </section>
{/* Current Top 3 */}

      <section className="px-5 py-10">

        <div className="mx-auto max-w-md">

          <h2 className="mb-5 text-center text-3xl font-bold text-yellow-400">
            Current Top 3
          </h2>

          <div className="space-y-3">

            <div className="flex items-center justify-between rounded-2xl border border-yellow-500/30 bg-[#111111] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🥇</span>
                <div>
                  <p className="font-semibold">
                    {topThree[0]?.PLAYER === "#N/A"
                    ? "Waiting for kick off . . ."
                    : topThree[0]?.PLAYER}</p>
                  <p className="text-sm text-zinc-400">1st Place</p>
                </div>
              </div>

              <span className="text-xl font-bold text-yellow-400">
                {topThree[0]?.["TOTAL POINTS"]} pts
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-yellow-500/30 bg-[#111111] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🥈</span>
                <div>
                  <p className="font-semibold">{topThree[1]?.PLAYER}</p>
                  <p className="text-sm text-zinc-400">2nd Place</p>
                </div>
              </div>

              <span className="text-xl font-bold text-yellow-400">
                {topThree[1]?.["TOTAL POINTS"]} pts
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-yellow-500/30 bg-[#111111] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🥉</span>
                <div>
                  <p className="font-semibold">{topThree[2]?.PLAYER}</p>
                  <p className="text-sm text-zinc-400">3rd Place</p>
                </div>
              </div>

              <span className="text-xl font-bold text-yellow-400">
                {topThree[2]?.["TOTAL POINTS"]} pts
              </span>
            </div>

          </div>

          <a
            href="/leaderboard"
            className="mt-6 block rounded-2xl bg-yellow-400 py-4 text-center text-lg font-bold text-black transition hover:bg-yellow-300"
          >
            View Full Leaderboard
          </a>

        </div>

      </section>
    </main>
  );
}