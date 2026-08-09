"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Player = {
  entryId: string;
  player: string;

  team1: string;
  goals1: number;
  points1: number;

  team2: string;
  goals2: number;
  points2: number;

  team3: string;
  goals3: number;
  points3: number;

  team4: string;
  goals4: number;
  points4: number;

  totalPoints: number;
  lastUpdated: string;
};

type Props = {
  players: Player[];
};

export default function TeamsSearch({ players }: Props) {
  const [search, setSearch] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const matches = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    if (!searchText) {
      return [];
    }

    return players
      .filter((player) =>
        player.player.toLowerCase().includes(searchText)
      )
      .slice(0, 12);
  }, [players, search]);

  function selectPlayer(player: Player) {
    setSelectedPlayer(player);
    setSearch(player.player);
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="mx-auto max-w-md">

       <h1 className="text-center text-4xl font-bold text-yellow-400">
          Find My Teams
        </h1>

        <p className="mt-3 text-center text-zinc-400">
          Search for your Goal Rush entry.
        </p>

        {/* SEARCH */}
        <div className="relative mt-8">

          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedPlayer(null);
            }}
            autoComplete="off"
            placeholder="Start typing your name..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-lg outline-none transition focus:border-yellow-500"
          />

          {/* SEARCH RESULTS */}
          {search.trim() && !selectedPlayer && (
            <div className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl">

              {matches.length > 0 ? (
                <div>
                  {matches.map((player) => (
                    <button
                      key={player.entryId || player.player}
                      type="button"
                      onClick={() => selectPlayer(player)}
                      className="w-full border-b border-zinc-800 px-5 py-4 text-left text-lg transition last:border-b-0 hover:bg-zinc-800"
                    >
                      {player.player}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-5 py-4 text-center text-zinc-400">
                  No players found.
                </div>
              )}

            </div>
          )}

        </div>

        {/* SELECTED PLAYER */}
        {selectedPlayer && (
          <div className="mt-10 border-t border-zinc-800 pt-10">

            <h2 className="text-center text-2xl font-bold">
              {selectedPlayer.player}
            </h2>

            <p className="mt-8 text-sm uppercase tracking-wider text-zinc-400">
              Your Teams
            </p>

            <div className="mt-4 grid grid-cols-[1fr_70px_70px] px-5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <div>Team</div>
              <div className="text-center">Goals</div>
              <div className="text-center">Points</div>
            </div>

            <div className="mt-4 space-y-3 text-xl">

              {/* TEAM 1 */}
              <div className="grid grid-cols-[1fr_70px_70px] items-center rounded-xl bg-zinc-900 px-5 py-4">
                <div>{selectedPlayer.team1}</div>

                <div className="text-center">
                  {selectedPlayer.goals1}
                </div>

                <div className="text-center font-semibold text-yellow-400">
                  {selectedPlayer.points1}
                </div>
              </div>

              {/* TEAM 2 */}
              <div className="grid grid-cols-[1fr_70px_70px] items-center rounded-xl bg-zinc-900 px-5 py-4">
                <div>{selectedPlayer.team2}</div>

                <div className="text-center">
                  {selectedPlayer.goals2}
                </div>

                <div className="text-center font-semibold text-yellow-400">
                  {selectedPlayer.points2}
                </div>
              </div>

              {/* TEAM 3 */}
              <div className="grid grid-cols-[1fr_70px_70px] items-center rounded-xl bg-zinc-900 px-5 py-4">
                <div>{selectedPlayer.team3}</div>

                <div className="text-center">
                  {selectedPlayer.goals3}
                </div>

                <div className="text-center font-semibold text-yellow-400">
                  {selectedPlayer.points3}
                </div>
              </div>

              {/* TEAM 4 */}
              <div className="grid grid-cols-[1fr_70px_70px] items-center rounded-xl bg-zinc-900 px-5 py-4">
                <div>{selectedPlayer.team4}</div>

                <div className="text-center">
                  {selectedPlayer.goals4}
                </div>

                <div className="text-center font-semibold text-yellow-400">
                  {selectedPlayer.points4}
                </div>
              </div>

            </div>

            {/* TOTAL */}
            <div className="mt-10 rounded-2xl border border-yellow-500 bg-zinc-900 p-6 text-center">

              <p className="text-sm uppercase tracking-widest text-zinc-400">
                Current Points
              </p>

              <p className="mt-3 text-6xl font-bold text-yellow-400">
                {selectedPlayer.totalPoints}
              </p>

              <p className="mt-6 text-xs uppercase tracking-wider text-zinc-500">
                Last Updated
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                {selectedPlayer.lastUpdated}
              </p>

            </div>

          </div>
        )}

      </div>
    </main>
  );
}