import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

export async function getSpreadsheet() {
  const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_SHEET_ID!,
    serviceAccountAuth
  );

  await doc.loadInfo();

  return doc;
}
export async function getPlayers() {
  const doc = await getSpreadsheet();

  const sheet = doc.sheetsByTitle["PLAYERS"];

  if (!sheet) {
    throw new Error("PLAYERS sheet not found");
  }

  const rows = await sheet.getRows();

return rows;
}

export async function getTeams() {
  const doc = await getSpreadsheet();

  const sheet = doc.sheetsByTitle["TEAMS"];

  if (!sheet) {
    throw new Error("TEAMS sheet not found");
  }

  const rows = await sheet.getRows();

  return rows;
}

export async function getLeaderboard() {
  const doc = await getSpreadsheet();

  const sheet = doc.sheetsByTitle["LEADERBOARD"];

  if (!sheet) {
    throw new Error("LEADERBOARD sheet not found");
  }

  const rows = await sheet.getRows();

  return rows;
}

export async function getRanking() {
  const doc = await getSpreadsheet();

  const sheet = doc.sheetsByTitle["RANKINGS"];

  if (!sheet) {
    throw new Error("RANKINGS sheet not found");
  }

  const rows = await sheet.getRows();

  const leaderboard = rows.map((row) => ({
    player: row.get("PLAYER"),
    totalPoints: Number(row.get("TOTAL POINTS")) || 0,

    team1: row.get("TEAM 1"),
    goals1: Number(row.get("GOALS 1")) || 0,
    points1: (Number(row.get("GOALS 1")) || 0) * 1,

    team2: row.get("TEAM 2"),
    goals2: Number(row.get("GOALS 2")) || 0,
    points2: (Number(row.get("GOALS 2")) || 0) * 2,

    team3: row.get("TEAM 3"),
    goals3: Number(row.get("GOALS 3")) || 0,
    points3: (Number(row.get("GOALS 3")) || 0) * 2,

    team4: row.get("TEAM 4"),
    goals4: Number(row.get("GOALS 4")) || 0,
    points4: (Number(row.get("GOALS 4")) || 0) * 3,

    lastUpdated: row.get("LAST UPDATED"),
  }));

  // Sort highest points first
  leaderboard.sort((a, b) => b.totalPoints - a.totalPoints);

  // Competition ranking:
  // 16, 16, 16, 14, 14, 10
  //  1,  1,  1,  4,  4, 10
  return leaderboard.map((row, index, sorted) => {
    const position =
      index > 0 && sorted[index - 1].totalPoints === row.totalPoints
        ? sorted.findIndex(
            (item) => item.totalPoints === row.totalPoints
          ) + 1
        : index + 1;

    return {
      position,
      ...row,
    };
  });
}

export async function getEngine() {
  const doc = await getSpreadsheet();

  const sheet = doc.sheetsByTitle["ENGINE"];

  if (!sheet) {
    throw new Error("ENGINE sheet not found");
  }

  const rows = await sheet.getRows();

  console.log("ENGINE ROW COUNT:", rows.length);

  return rows;
}