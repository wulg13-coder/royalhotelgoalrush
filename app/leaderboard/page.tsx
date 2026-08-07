import Link from "next/link";
import { getRanking, getEngine} from "../lib/googleSheets";
import LeaderboardTable from "./LeaderboardTable";
import Image from "next/image";
export default async function LeaderboardPage() {
 const rows = await getRanking();
 const engine = await getEngine();
 const rawlastUpdated = engine[0]?.get("LAST UPDATED") ??  null;
  const lastUpdated = rawlastUpdated ? new Date(rawlastUpdated).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }) : "Not available";

const leaderboard = rows;

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