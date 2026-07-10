export interface Player {
  name: string;
  image: string;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  color: string;
  logo: string;
  league: string;
  players: Player[];
}

export type GameScreen = 'teams' | 'home' | 'quiz' | 'end';

export interface GameState {
  screen: GameScreen;
  selectedTeam: Team | null;
  players: Player[];
  currentIndex: number;
  score: number;
  answered: boolean;
  isCorrect: boolean;
  showNext: boolean;
  playerName: string;
}
