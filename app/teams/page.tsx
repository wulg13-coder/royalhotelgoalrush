import { getEngine } from "../lib/googleSheets";
import TeamsSearch from "./TeamsSearch";

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

  return <TeamsSearch players={players} />;
}