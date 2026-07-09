export interface Player {
  name: string;
  image: string;
}

export type GameScreen = 'home' | 'quiz' | 'end';

export interface GameState {
  screen: GameScreen;
  players: Player[];
  currentIndex: number;
  score: number;
  answered: boolean;
  isCorrect: boolean;
  showNext: boolean;
  playerName: string;
}
