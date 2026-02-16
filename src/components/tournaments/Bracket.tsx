"use client";

import { useMemo } from "react";
import { Match } from "./types";
import { MatchNode } from "./MatchNode";
import { motion } from "framer-motion";

interface BracketProps {
  matches: Match[];
}

export function Bracket({ matches }: BracketProps) {
  // Group matches by round
  const rounds = useMemo(() => {
    const grouped = new Map<number, Match[]>();
    matches.forEach((match) => {
      if (!grouped.has(match.round)) {
        grouped.set(match.round, []);
      }
      grouped.get(match.round)?.push(match);
    });
    // Sort rounds by index
    return Array.from(grouped.entries()).sort((a, b) => a[0] - b[0]);
  }, [matches]);

  return (
    <div className="flex justify-start items-center gap-12 overflow-x-auto p-8 min-h-[500px]">
      {rounds.map(([roundIndex, roundMatches]) => (
        <div key={roundIndex} className="flex flex-col justify-around h-full gap-8">
            <div className="text-center text-sm font-mono text-neutral-500 mb-4 uppercase tracking-wider">
                {roundIndex === 0 ? "Quarterfinals" : roundIndex === 1 ? "Semifinals" : "Finals"}
            </div>
          <div className="flex flex-col gap-12 h-full justify-center">
            {roundMatches.map((match) => (
              <div key={match.id} className="relative">
                <MatchNode match={match} />
                 {/* Connection Lines Logic could go here for a more advanced implementation */}
                 {/* For now we rely on flex alignment which looks decent for simple brackets */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
