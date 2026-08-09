import { getTeams } from "../lib/googleSheets";
import InformationContent from "./InformationContent";

export default async function InformationPage() {
  const rows = await getTeams();

  const teams = rows
    .map((row: any) => ({
      team: row.get("TEAM") ?? "",
      pot: Number(row.get("POT")) || 0,
    }))
    .filter((team) => team.team);

  return <InformationContent teams={teams} />;
}