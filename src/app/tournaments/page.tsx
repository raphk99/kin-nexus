"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Bracket } from "@/components/tournaments/Bracket";
import { Match } from "@/components/tournaments/types";
import { ChevronLeft } from "lucide-react";

const MOCK_BRACKET_DATA: Match[] = [
  // Quarterfinals
  {
    id: "qf1",
    round: 0,
    team1: { id: "t1", name: "Team Liquid", score: 13, isWinner: true },
    team2: { id: "t2", name: "Sentinels", score: 10 },
  },
  {
    id: "qf2",
    round: 0,
    team1: { id: "t3", name: "LOUD", score: 5 },
    team2: { id: "t4", name: "Fnatic", score: 13, isWinner: true },
  },
  {
    id: "qf3",
    round: 0,
    team1: { id: "t5", name: "DRX", score: 13, isWinner: true },
    team2: { id: "t6", name: "Paper Rex", score: 11 },
  },
  {
    id: "qf4",
    round: 0,
    team1: { id: "t7", name: "BBL", score: 8 },
    team2: { id: "t8", name: "Cloud9", score: 13, isWinner: true },
  },
  // Semifinals
  {
    id: "sf1",
    round: 1,
    team1: { id: "t1", name: "Team Liquid", score: 2 },
    team2: { id: "t4", name: "Fnatic", score: 0 }, // Score TBD or generic
    nextMatchId: "f1",
  },
    {
    id: "sf2",
    round: 1,
    team1: { id: "t5", name: "DRX", score: 1 },
    team2: { id: "t8", name: "Cloud9", score: 2, isWinner: true },
    nextMatchId: "f1",
  },
  // Finals
  {
    id: "f1",
    round: 2,
    team1: { id: "t1", name: "Team Liquid", status: "TBD" },
    team2: { id: "t8", name: "Cloud9", status: "TBD" },
  },
];

export default function TournamentsPage() {
  const [showBracket, setShowBracket] = useState(false);

  return (
    <main className="flex min-h-screen flex-col p-8 bg-obsidian text-white font-sans max-w-7xl mx-auto">
      <Breadcrumbs />
      
      {!showBracket ? (
        <>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-12 group">
                <div className="absolute inset-0 bg-gradient-to-r from-cobalt-electric to-obsidian opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex items-center px-12">
                <h1 className="text-5xl font-bold tracking-tighter text-white z-10">Tournaments</h1>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Valorant Tournament */}
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-lime-cyber/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-lime-cyber px-2 py-1 rounded-full border border-lime-cyber/30">LIVE</span>
                        <span className="text-sm text-neutral-400">March 12th, 2026</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Valorant: Kinshasa Majors</h2>
                    <p className="text-neutral-400 text-sm mb-4">The biggest showdown yet. Prize pool: $500 USD.</p>
                    <button 
                        onClick={() => setShowBracket(true)}
                        className="w-full py-2 bg-cobalt-electric hover:bg-cobalt-electric/80 text-white rounded-lg font-bold transition-colors"
                    >
                        View Brackets
                    </button>
                </div>

                {/* FIFA Tournament */}
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 opacity-50">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-neutral-500 px-2 py-1 rounded-full border border-neutral-500/30">COMPLETED</span>
                        <span className="text-sm text-neutral-400">Feb 10th, 2026</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">FIFA 26: City League</h2>
                    <p className="text-neutral-400 text-sm mb-4">Champion: ELIKIA_PRO. Watch the replays.</p>
                    <button className="w-full py-2 bg-neutral-800 text-neutral-400 rounded-lg font-bold cursor-not-allowed">
                        Results
                    </button>
                </div>
            </div>
        </>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
                onClick={() => setShowBracket(false)}
                className="flex items-center gap-2 text-neutral-400 hover:text-white mb-6 transition-colors"
            >
                <ChevronLeft size={20} />
                Back to Tournaments
            </button>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                    <div>
                        <h2 className="text-3xl font-bold">Valorant: Kinshasa Majors</h2>
                        <p className="text-lime-cyber font-mono text-sm mt-1">Playoffs Bracket</p>
                    </div>
                     <span className="text-xs font-mono text-lime-cyber px-3 py-1 rounded-full border border-lime-cyber/30 bg-lime-cyber/10">
                        LIVE UPDATES
                    </span>
                </div>
                
                <Bracket matches={MOCK_BRACKET_DATA} />
            </div>
        </div>
      )}
    </main>
  );
}
