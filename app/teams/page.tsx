import { getEngine } from "../lib/googleSheets";
import TeamsSearch from "./TeamsSearch";
import Image from "next/image";
import Link from "next/link";

export default async function TeamsPage() {
  const rows = await getEngine();

  const players = rows
    .map((row: any) => ({
      entryId: row.get("ENTRY ID") ?? "",
      player: row.get("PLAYER") ?? "",

      team1: row.get("TEAM 1") ?? "",
      goals1: Number(row.get("GOALS 1")) || 0,
      points1: Number(row.get("TEAM 1 POINTS")) || 0,

      team2: row.get("TEAM 2") ?? "",
      goals2: Number(row.get("GOALS 2")) || 0,
      points2: Number(row.get("TEAM 2 POINTS")) || 0,

      team3: row.get("TEAM 3") ?? "",
      goals3: Number(row.get("GOALS 3")) || 0,
      points3: Number(row.get("TEAM 3 POINTS")) || 0,

      team4: row.get("TEAM 4") ?? "",
      goals4: Number(row.get("GOALS 4")) || 0,
      points4: Number(row.get("TEAM 4 POINTS")) || 0,

      totalPoints: Number(row.get("TOTAL POINTS")) || 0,
      lastUpdated: row.get("LAST UPDATED") ?? "",
    }))
    .filter((player: any) => player.player);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-4xl">

         <Link
          href="/"
          className="mb-8 inline-block text-yellow-400 transition-all duration-200 hover:scale-[1.02] hover:text-yellow-300"
        >
          ← Back to Home
        </Link>

        <div className="mb-8 flex justify-center">
          <Image
            src="/images/royal-hotel-logo-cropped.jpg"
            alt="Royal Hotel"
            width={180}
            height={80}
            className="h-auto w-[300px] - object-contain"
          />
        </div>

        <TeamsSearch players={players} />
      </div>
    </main>
  );
}