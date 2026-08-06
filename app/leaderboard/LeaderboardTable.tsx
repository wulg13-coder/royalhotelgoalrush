"use client";

import { useState } from "react";

type LeaderboardRow = {
  position: number;
  player: string;
  totalPoints: number;

  team1: string;
  goals1: number;
  team2: string;
  goals2: number;
  team3: string;
  goals3: number;
  team4: string;
  goals4: number;
};

type Props = {
  leaderboard: LeaderboardRow[];
};

export default function LeaderboardTable({ leaderboard }: Props) {
  const [expandedPlayer, setExpandedPlayer] = useState<string | null>(null);

  const togglePlayer = (player: string) => {
    setExpandedPlayer(expandedPlayer === player ? null : player);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-yellow-500 bg-zinc-900 shadow-2xl">

      {/* Header */}
      <div className="sticky top-0 z-20 grid grid-cols-[90px_1fr_120px] bg-yellow-500 px-6 py-4 font-bold uppercase text-black">
        <div className="text-center">Pos</div>
        <div className="pl-8">Player</div>
        <div className="text-right">Points</div>
      </div>

      {leaderboard.map((row, index) => {
        const expanded = expandedPlayer === row.player;

        return (
          <div key={row.player}>

            <button
              onClick={() => togglePlayer(row.player)}
              className={`grid w-full grid-cols-[90px_1fr_120px] items-center px-6 py-5 border-b border-zinc-800 text-left transition hover:bg-zinc-800 cursor-pointer ${
                index === 0
                  ? "bg-yellow-500/10"
                  : index === 1
                  ? "bg-zinc-100/5"
                  : index === 2
                  ? "bg-orange-500/10"
                  : ""
              }`}
            >

              <div className="flex justify-center text-2xl font-bold">
                {index === 0
                  ? "🥇"
                  : index === 1
                  ? "🥈"
                  : index === 2
                  ? "🥉"
                  : index + 1}
              </div>

              <div className="pl-8 text-xl font-bold">
                {row.player}
              </div>

              <div className="text-right text-2xl font-black text-yellow-400">
                {row.totalPoints}
              </div>

            </button>

            {expanded && (
              <div className="bg-zinc-800 px-8 py-5 border-b border-yellow-500/20">
                <div className="grid grid-cols-2 gap-y-2 text-lg">
                  <span>{row.team1}</span>
                  <span className="text-right font-bold">{row.goals1}</span>
                  <span>{row.team2}</span>
                  <span className="text-right font-bold">{row.goals2}</span>
                  <span>{row.team3}</span>
                  <span className="text-right font-bold">{row.goals3}</span>
                  <span>{row.team4}</span>
                  <span className="text-right font-bold">{row.goals4}</span>
                </div>
              </div>
            )}

          </div>
        );
      })}

    </div>
  );
}