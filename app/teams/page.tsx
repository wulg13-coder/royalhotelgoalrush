import Link from "next/link";
import { getEngine } from "../lib/googleSheets";

type Props = {
  searchParams: Promise<{
    player?: string;
  }>;
};

export default async function TeamsPage({ searchParams }: Props) {
  const params = await searchParams;
  const player = params.player?.trim() ?? "";

  const rows = await getEngine();

  const result: any = player
  ? rows.find((row: any) => {
      const sheetPlayer = row.get("PLAYER")?.trim();
      console.log(
        "Comparing:",
        `"${sheetPlayer}"`,
        "with",
        `"${player.trim()}"`
      );
      return sheetPlayer?.toLowerCase() === player.trim().toLowerCase();
    })
  : null;
console.log("searching:", player, "found:", result?.get("PLAYER") ?? "NOT FOUND");
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <div className="mx-auto max-w-md">

        <Link
          href="/"
          className="mb-8 inline-block text-yellow-400 hover:text-yellow-300 cursor-pointer transition-all duration-200 hover:scale-(1.02)"
        >
          ← Back to Home
        </Link>

        <h1 className="text-center text-4xl font-bold text-yellow-400">
          Find My Teams
        </h1>

        <p className="mt-3 mb-10 text-center text-zinc-400">
          Search for your Goal Rush entry.
        </p>
<form>

<input
  type="text"
  name="player"
  list="players"
  autoComplete="off"
  defaultValue={player}
  placeholder="Start typing your name..."
  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-lg outline-none focus:border-yellow-500"
 />

<datalist id="players">
  {rows.map((row: any) => (
    <option
      key={row.get("ENTRY ID")}
      value={row.get("PLAYER")}
    />
  ))}
</datalist>

  <button
    type="submit"
    className="mt-5 w-full rounded-xl bg-yellow-500 py-4 text-lg font-bold cursor-pointer text-black transition hover:bg-yellow-400"
  >
    🔍 Find My Teams
  </button>

</form>

{player && !result && (
  <div className="mt-10 rounded-2xl border border-red-500 bg-zinc-900 p-6 text-center">
    <p className="text-lg font-semibold">Player not found.</p>
    <p className="mt-2 text-zinc-400">
      Please check the spelling and try again.
    </p>
  </div>
)}

{result && (
  <div className="mt-12 border-t border-zinc-800 pt-10">

    <h2 className="text-2xl font-bold">
      {result.get("PLAYER")}
    </h2>

    <p className="mt-8 text-sm uppercase tracking-wider text-zinc-400">
      Your Teams
    </p>
<div className="mt-4 mb-2 grid grid-cols-[1fr_70px_70px] px-5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
  <div>Team</div>
  <div className="text-center">Goals</div>
  <div className="text-center">Points</div>
</div>
    <div className="mt-4 space-y-3 text-xl">

<div className="grid grid-cols-[1fr_70px_70px] items-center rounded-xl bg-zinc-900 px-5 py-4">
  <div>{result.get("TEAM 1")}</div>

  <div className="text-center">
    {result.get("GOALS 1")  || 0}
  </div>

  <div className="text-center font-semibold text-yellow-400">
    {result.get("TEAM 1 POINTS") || 0}
  </div>
</div>
  <div className="grid grid-cols-[1fr_70px_70px] items-center rounded-xl bg-zinc-900 px-5 py-4">
    <div>{result.get("TEAM 2")}</div>

    <div className="text-center">
        {result.get("GOALS 2") || 0}
    </div>

    <div className="text-center font-semibold text-yellow-400">
        {result.get("TEAM 2 POINTS") || 0}
    </div>
</div>

<div className="grid grid-cols-[1fr_70px_70px] items-center rounded-xl bg-zinc-900 px-5 py-4">
    <div>{result.get("TEAM 3")}</div>

    <div className="text-center">
        {result.get("GOALS 3") || 0}
    </div>

    <div className="text-center font-semibold text-yellow-400">
        {result.get("TEAM 3 POINTS") || 0}
    </div>
</div>

<div className="grid grid-cols-[1fr_70px_70px] items-center rounded-xl bg-zinc-900 px-5 py-4">
    <div>{result.get("TEAM 4")}</div>

    <div className="text-center">
        {result.get("GOALS 4") || 0}
    </div>

    <div className="text-center font-semibold text-yellow-400">
        {result.get("TEAM 4 POINTS") || 0}
    </div>
</div>

    </div>

    <div className="mt-10 rounded-2xl border border-yellow-500 bg-zinc-900 p-6 text-center">

      <p className="text-sm uppercase tracking-widest text-zinc-400">
        Current Points
      </p>

      <p className="mt-3 text-6xl font-bold text-yellow-400">
        {result.get("TOTAL POINTS")}
      </p>

      <p className="mt-6 text-xs uppercase tracking-wider text-zinc-500">
        Last Updated
      </p>

      <p className="mt-2 text-sm text-zinc-300">
        {result.get("LAST UPDATED")}
      </p>

    </div>

  </div>
)}

      </div>

    </main>
  );
}