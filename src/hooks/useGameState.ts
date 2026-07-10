import { useState, useCallback, useEffect, useRef } from 'react';
import type { Player, Team, GameState } from '../types';
import { createChecker, shuffleArray } from '../data/matching';

const BEST_SCORE_KEY = 'arsenal-quiz-best-score';

function getBestScore(): number {
  try {
    return parseInt(localStorage.getItem(BEST_SCORE_KEY) || '0', 10);
  } catch {
    return 0;
  }
}

function saveBestScore(score: number) {
  try {
    const current = getBestScore();
    if (score > current) {
      localStorage.setItem(BEST_SCORE_KEY, String(score));
    }
  } catch { /* ignore */ }
}

export function useGameState() {
  const [game, setGame] = useState<GameState>({
    screen: 'teams',
    selectedTeam: null,
    players: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    isCorrect: false,
    showNext: false,
    playerName: '',
  });

  const [bestScore, setBestScore] = useState(getBestScore);
  const [imageLoaded, setImageLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentPlayer: Player | null = game.players[game.currentIndex] || null;
  const totalPlayers = game.players.length;
  const isLastQuestion = game.currentIndex === totalPlayers - 1;

  const preloadImages = useCallback((playerList: Player[]) => {
    playerList.forEach(p => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

  const selectTeam = useCallback((team: Team) => {
    const shuffled = shuffleArray(team.players);
    preloadImages(shuffled);
    setGame({
      screen: 'quiz',
      selectedTeam: team,
      players: shuffled,
      currentIndex: 0,
      score: 0,
      answered: false,
      isCorrect: false,
      showNext: false,
      playerName: '',
    });
    setImageLoaded(false);
  }, [preloadImages]);

  const submitAnswer = useCallback((input: string) => {
    if (!currentPlayer || game.answered) return;

    const checker = createChecker(game.players);
    const correct = checker(input, currentPlayer.name);
    const newScore = correct ? game.score + 1 : game.score;

    setGame(prev => ({
      ...prev,
      score: newScore,
      answered: true,
      isCorrect: correct,
      showNext: true,
    }));

    if (!correct) {
      saveBestScore(newScore);
      setBestScore(getBestScore());
    }
  }, [currentPlayer, game.answered, game.score, game.players]);

  const skipPlayer = useCallback(() => {
    if (!currentPlayer || game.answered) return;
    setGame(prev => ({
      ...prev,
      answered: true,
      isCorrect: false,
      showNext: true,
    }));
    saveBestScore(game.score);
    setBestScore(getBestScore());
  }, [currentPlayer, game.answered, game.score]);

  const nextPlayer = useCallback(() => {
    if (isLastQuestion) {
      const finalScore = game.score;
      saveBestScore(finalScore);
      setBestScore(getBestScore());
      setGame(prev => ({ ...prev, screen: 'end' }));
    } else {
      setGame(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        answered: false,
        isCorrect: false,
        showNext: false,
        playerName: '',
      }));
      setImageLoaded(false);
    }
  }, [isLastQuestion, game.score]);

  const goToTeams = useCallback(() => {
    setGame({
      screen: 'teams',
      selectedTeam: null,
      players: [],
      currentIndex: 0,
      score: 0,
      answered: false,
      isCorrect: false,
      showNext: false,
      playerName: '',
    });
    setImageLoaded(false);
  }, []);

  useEffect(() => {
    if (game.screen === 'quiz' && !game.answered && inputRef.current) {
      inputRef.current.focus();
    }
  }, [game.screen, game.currentIndex, game.answered]);

  return {
    game,
    currentPlayer,
    totalPlayers,
    isLastQuestion,
    bestScore,
    imageLoaded,
    setImageLoaded,
    inputRef,
    selectTeam,
    submitAnswer,
    skipPlayer,
    nextPlayer,
    goToTeams,
    setPlayerName: (name: string) => setGame(prev => ({ ...prev, playerName: name })),
  };
}
