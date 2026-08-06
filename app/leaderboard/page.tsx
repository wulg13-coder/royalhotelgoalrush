import Link from "next/link";
import { getEngine } from "../lib/googleSheets";
import LeaderboardTable from "./LeaderboardTable";
import Image from "next/image";
export default async function LeaderboardPage() {
  const rows = await getEngine();
  const rawlastUpdated = rows[0]?.get("LAST UPDATED");;
  const lastUpdated = rawlastUpdated ? new Date(rawlastUpdated).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }) : "Not available";

  const leaderboard = rows
    .filter((row: any) => row.get("PLAYER"))
    .map((row: any) => ({
      entryId: row.get("ENTRY ID"),
      player: row.get("PLAYER"),
      totalPoints: Number(row.get("TOTAL POINTS") || 0),

      team1: row.get("TEAM 1"),
      goals1: row.get("GOALS 1"),

      team2: row.get("TEAM 2"),
      goals2: row.get("GOALS 2"),

      team3: row.get("TEAM 3"),
      goals3: row.get("GOALS 3"),

      team4: row.get("TEAM 4"),
      goals4: row.get("GOALS 4"),
    }))
    .sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/"
          className="mb-8 inline-block text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="mb-8 flex justify-center">
          <Image
            src="/images/royal-hotel-logo-cropped.jpg"
            alt="Royal Hotel Logo"
            width={300}
            height={150}
            priority
          />
        </div>
        <h1 className="text-center text-5xl font-black text-yellow-400">
          LIVE LEADERBOARD
        </h1>
        <p className="mt-3 text-center text-2xl font-bold tracking-[0.35em] text-yellow-400">
          EVERY. GOAL. COUNTS.
        </p>
        <p className="mt-2 text-xl font-semibold text-yellow-400 text-center">
          Season 2026/27
        </p>

        <div className="mt-6 mb-12 text-center">
          <p className="text-sm font-medium text-zinc-300">
            Last updated: {lastUpdated}
          </p>
        
          </div>
          

        <LeaderboardTable leaderboard={leaderboard} />

      </div>
    </main>
  );
}