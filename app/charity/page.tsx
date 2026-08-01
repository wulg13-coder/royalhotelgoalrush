export default function Leaderboard() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-black text-yellow-400 mb-2">
          🏆 Live Leaderboard
        </h1>

        <p className="text-gray-400 mb-10">
          Current competition standings
        </p>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">

          <div className="grid grid-cols-3 bg-yellow-400 text-black font-bold p-4">
            <div>Rank</div>
            <div>Player</div>
            <div className="text-right">Points</div>
          </div>

          <div className="grid grid-cols-3 p-4 border-t border-zinc-800">
            <div>🥇 1</div>
            <div>William</div>
            <div className="text-right">126</div>
          </div>

          <div className="grid grid-cols-3 p-4 border-t border-zinc-800">
            <div>🥈 2</div>
            <div>John</div>
            <div className="text-right">121</div>
          </div>

          <div className="grid grid-cols-3 p-4 border-t border-zinc-800">
            <div>🥉 3</div>
            <div>Sarah</div>
            <div className="text-right">119</div>
          </div>

          <div className="grid grid-cols-3 p-4 border-t border-zinc-800">
            <div>4</div>
            <div>David</div>
            <div className="text-right">114</div>
          </div>

        </div>

      </div>
    </main>
  );
}