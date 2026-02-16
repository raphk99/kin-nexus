"use client";

import { motion } from "framer-motion";
import { Match, Team } from "./types";
import { cn } from "@/lib/utils";

interface MatchNodeProps {
  match: Match;
  className?: string;
}

const TeamRow = ({ team, isTop }: { team: Team; isTop: boolean }) => (
  <div
    className={cn(
      "flex justify-between items-center px-3 py-2",
      isTop ? "border-b border-white/10" : "",
      team.isWinner ? "bg-cobalt-electric/20" : "bg-transparent"
    )}
  >
    <span
        className={cn(
            "font-medium text-sm truncate max-w-[120px]",
            team.isWinner ? "text-white" : "text-neutral-400",
            team.status === 'TBD' && "text-neutral-600 italic"
        )}
    >
      {team.name}
    </span>
    <span
      className={cn(
        "font-mono text-sm",
        team.isWinner ? "text-lime-cyber" : "text-neutral-500"
      )}
    >
      {team.score ?? "-"}
    </span>
  </div>
);

export function MatchNode({ match, className }: MatchNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "w-48 bg-obsidian border border-white/10 rounded-lg overflow-hidden shadow-sm hover:border-cobalt-electric/50 transition-colors cursor-default",
        className
      )}
    >
        <div className="flex flex-col">
            <TeamRow team={match.team1} isTop={true} />
            <TeamRow team={match.team2} isTop={false} />
        </div>
    </motion.div>
  );
}
