import { getSpreadsheet } from "../lib/googleSheets";

export default async function TestPage() {
  const doc = await getSpreadsheet();

  const playersSheet = doc.sheetsByTitle["PLAYERS TEST"];
  const engineSheet = doc.sheetsByTitle["ENGINE"];

  if (!playersSheet) {
    return <h1 className="text-white p-10">PLAYERS TEST sheet not found.</h1>;
  }

  if (!engineSheet) {
    return <h1 className="text-white p-10">ENGINE sheet not found.</h1>;
  }

  const players = await playersSheet.getRows();
  const engine = await engineSheet.getRows();

  const leaderboard = players.map((playerRow) => {
    const entryId = playerRow.get("ENTRY ID");

    const engineRow = engine.find(
      (row) => row.get("ENTRY ID") === entryId
    );

    return {
      player: playerRow.get("PLAYER"),
      points: engineRow?.get("TOTAL POINTS") ?? 0,
    };
  });

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Live Leaderboard Test
      </h1>

      <div className="space-y-4">
        {leaderboard.map((entry, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl p-5 flex justify-between text-2xl"
          >
            <span>{entry.player}</span>
            <span>{entry.points}</span>
          </div>
        ))}
      </div>
    </main>
  );
}