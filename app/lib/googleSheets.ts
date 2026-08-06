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

 return rows.map((row) => ({
  POSITION: Number(row.get("POSITION")) || 0,
  PLAYER: row.get("PLAYER"),
  "TOTAL POINTS": Number(row.get("TOTAL POINTS")) || 0,
  "TEAM 1": row.get("TEAM 1"),
  "GOALS 1": Number(row.get("GOAL 1")) || 0,
  "TEAM 2": row.get("TEAM 2"),
  "GOALS 2": Number(row.get("GOAL 2")) || 0,
  "TEAM 3": row.get("TEAM 3"),
  "GOALS 3": Number(row.get("GOAL 3")) || 0,
  "TEAM 4": row.get("TEAM 4"),
  "GOALS 4": Number(row.get("GOAL 4")) || 0,

  "LAST UPDATED": row.get("LAST UPDATED"),
  }));
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