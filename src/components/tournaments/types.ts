export interface Team {
  id: string;
  name: string;
  score?: number;
  isWinner?: boolean;
  status?: 'TBD' | 'Eliminated' | 'Winner';
}

export interface Match {
  id: string;
  round: number; // 0 = Quarter, 1 = Semi, 2 = Final
  team1: Team;
  team2: Team;
  date?: string;
  nextMatchId?: string; // ID of the match the winner advanced to
}
