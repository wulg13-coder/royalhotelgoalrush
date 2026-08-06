"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function InformationPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">

      <div className="mx-auto max-w-4xl">

        <Link
          href="/"
          className="mb-8 inline-block cursor-pointer text-yellow-400 transition hover:text-yellow-300"
        >
          ← Back to Home
        </Link>

        <div className="mb-8 flex justify-center">
          <Image
            src="/images/royal-hotel-logo-cropped.jpg"
            alt="Royal Hotel"
            width={300}
            height={150}
            priority
          />
        </div>

        <h1 className="text-center text-5xl font-black text-yellow-400">
          COMPETITION INFORMATION
        </h1>

        <p className="mb-12 mt-4 text-center text-zinc-400">
          Everything you need to know about Goal Rush.
        </p>

        <div className="space-y-4">

          {/* Competition Rules */}

          <button
            onClick={() => toggle("rules")}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-yellow-500 bg-zinc-900 p-6 text-left transition hover:bg-zinc-800"
          >
            <span className="text-2xl font-bold">
              📖 Competition Rules
            </span>

            <span className="text-3xl">
              {openSection === "rules" ? "▼" : "▶"}
            </span>
          </button>

          {openSection === "rules" && (
            <div className="rounded-xl bg-zinc-950 px-8 py-6 text-lg leading-8 text-zinc-300">

              <p>
                Royal Hotel Goal Rush is a season-long football competition
                where every goal counts.
              </p>

              <br />

              <ul className="list-disc space-y-2 pl-6">
                <li>£10 per entry.</li>
                <li>Every entry receives four teams.</li>
                <li>One team is drawn from each pot.</li>
                <li>Teams are allocated during the live draw.</li>
              </ul>

            </div>
          )}

          {/* Scoring */}

          <button
            onClick={() => toggle("scoring")}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-yellow-500 bg-zinc-900 p-6 text-left transition hover:bg-zinc-800"
          >
            <span className="text-2xl font-bold">
              ⚽ Scoring System
            </span>

            <span className="text-3xl">
              {openSection === "scoring" ? "▼" : "▶"}
            </span>
          </button>

          {openSection === "scoring" && (
            <div className="rounded-xl bg-zinc-950 px-8 py-6 text-lg leading-8 text-zinc-300">

              <ul className="space-y-3">

                <li>Pot 1 – 1 point per goal</li>

                <li>Pot 2 – 2 points per goal</li>

                <li>Pot 3 – 2 points per goal</li>

                <li>Pot 4 – 3 points per goal</li>

                <br />

                <li>Only Premier League and Scottish Premiership league goals count.</li>

                <li>Cup, European, friendly and play-off goals do not count.</li>

              </ul>

            </div>
          )}

          {/* Live Draw */}

          <button
            onClick={() => toggle("draw")}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-yellow-500 bg-zinc-900 p-6 text-left transition hover:bg-zinc-800"
          >
            <span className="text-2xl font-bold">
              🎲 Live Draw
            </span>

            <span className="text-3xl">
              {openSection === "draw" ? "▼" : "▶"}
            </span>
          </button>

          {openSection === "draw" && (
            <div className="rounded-xl bg-zinc-950 px-8 py-6 text-lg leading-8 text-zinc-300">

              <p>
                All players are placed into a random draw order before the live draw begins.
              </p>

              <br />

              <p>
                Every player receives one randomly selected team from each of the four pots.
              </p>

            </div>
          )}

          {/* Prize Breakdown */}

          <div className="rounded-xl border border-yellow-500 bg-zinc-900 p-6 opacity-60">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">
                🏆 Prize Breakdown
              </span>

              <span>Coming Soon</span>
            </div>
          </div>

          {/* FAQ */}

          <div className="rounded-xl border border-yellow-500 bg-zinc-900 p-6 opacity-60">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">
                ❓ Frequently Asked Questions
              </span>

              <span>Coming Soon</span>
            </div>
          </div>

          {/* Charity */}

          <div className="rounded-xl border border-yellow-500 bg-zinc-900 p-6 opacity-60">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">
                ❤️ Charity
              </span>

              <span>Coming Soon</span>
            </div>
          </div>

          {/* Organiser */}

          <button
            onClick={() => toggle("organiser")}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-yellow-500 bg-zinc-900 p-6 text-left transition hover:bg-zinc-800"
          >
            <span className="text-2xl font-bold">
              ⚖ Competition Organiser
            </span>

            <span className="text-3xl">
              {openSection === "organiser" ? "▼" : "▶"}
            </span>
          </button>

          {openSection === "organiser" && (
            <div className="rounded-xl bg-zinc-950 px-8 py-6 text-lg leading-8 text-zinc-300">

              <p>
                The organiser's decision is final on any matter relating to the competition.
                Any unforeseen circumstances or disputes will be resolved fairly
                and in the best interests of all entrants.
              </p>

            </div>
          )}

        </div>

        <div className="mt-12 text-center">

          <h2 className="text-4xl font-black text-yellow-400">
            EVERY. GOAL. COUNTS.
          </h2>

        </div>

      </div>

    </main>
  );
}