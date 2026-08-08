"use client";

import { useState } from "react";

type LeaderboardRow = {
  position: number;
  player: string;
  totalPoints: number;

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

      <div className="grid grid-cols-[50px_minmax(0,1fr)_60px] bg-yellow-500 text-black font-bold">
        <div className="text-center">POS</div>
        <div className="text-center">PLAYER</div>
        <div className="text-right">POINTS</div>  
      </div>
      

      {leaderboard.map((row, index) => {
        const expanded = expandedPlayer === row.player;

        const position =
        leaderboard.filter(
          (player) => player.totalPoints > row.totalPoints
        ).length  + 1;
        

        return (
          <div key={row.player}>

            <button
              onClick={() => togglePlayer(row.player)}
              style={{ cursor: "pointer"}}
              className={`grid w-full grid-cols-[35px_minmax(0,1fr)_45px] items-center border-b border-yellow-500/20 px-2 py-3 text-lg font-medium transition-colors duration-200 ${
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
               {position <=3
               ? position === 1
                 ? "🥇"
                 : position === 2
                   ? "🥈"
                   : "🥉"
               : position}
              </div>

              <div className="min-w-0 pl-4 text-center text-lg font-bold">
                {row.player}
              </div>

              <div className="text-right text-2xl font-black text-yellow-400">
              {row.totalPoints}
              </div>

            </button>

            {expanded && (
              <div className="bg-zinc-800 px-8 py-5 border-b border-yellow-500/20">
                <div className="grid grid-cols-[1fr_80px_80px] gap-x-6 gap-y-2 text-lg">
                  <span className="font-bold text-yellow-400">TEAM</span>
<span className="text-right font-bold text-yellow-400">GOALS</span>
<span className="text-right font-bold text-yellow-400">POINTS</span>

<span>{row.team1}</span>
<span className="text-right">{row.goals1}</span>
<span className="text-right">{row.points1}</span>

<span>{row.team2}</span>
<span className="text-right">{row.goals2}</span>
<span className="text-right">{row.points2}</span>

<span>{row.team3}</span>
<span className="text-right">{row.goals3}</span>
<span className="text-right">{row.points3}</span>

<span>{row.team4}</span>
<span className="text-right">{row.goals4}</span>
<span className="text-right">{row.points4}</span>
                </div>
              </div>
            )}

          </div>
        );
      })}

    </div>
  );
}