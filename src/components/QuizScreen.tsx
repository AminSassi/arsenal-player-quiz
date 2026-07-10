import { type FormEvent, type KeyboardEvent } from 'react';
import type { Player, Team } from '../types';
import { PlayerCard } from './PlayerCard';
import { Confetti } from './Confetti';

interface Props {
  team: Team;
  currentPlayer: Player;
  currentIndex: number;
  totalPlayers: number;
  score: number;
  answered: boolean;
  isCorrect: boolean;
  showNext: boolean;
  isLastQuestion: boolean;
  playerName: string;
  imageLoaded: boolean;
  setImageLoaded: (loaded: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onSubmit: (input: string) => void;
  onSkip: () => void;
  onNext: () => void;
  onBack: () => void;
  onPlayerNameChange: (name: string) => void;
}

export function QuizScreen({
  team,
  currentPlayer,
  currentIndex,
  totalPlayers,
  score,
  answered,
  isCorrect,
  isLastQuestion,
  playerName,
  imageLoaded,
  setImageLoaded,
  inputRef,
  onSubmit,
  onSkip,
  onNext,
  onBack,
  onPlayerNameChange,
}: Props) {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!playerName.trim() || answered) return;
    onSubmit(playerName);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && answered) {
      onNext();
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 animate-fade-in"
      onKeyDown={handleKeyDown}
    >
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            ← {team.name}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {currentIndex + 1} / {totalPlayers}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-lg">❤️</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {score}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentIndex + 1) / totalPlayers) * 100}%`,
              backgroundColor: team.color,
            }}
          />
        </div>

        {/* Player card */}
        <div className="relative">
          <PlayerCard
            player={currentPlayer}
            answered={answered}
            isCorrect={isCorrect}
            imageLoaded={imageLoaded}
            setImageLoaded={setImageLoaded}
          />
          {answered && isCorrect && <Confetti />}
        </div>

        {/* Answer feedback */}
        {answered && (
          <div className="text-center animate-fade-in">
            {isCorrect ? (
              <div className="flex items-center gap-2 text-green-500">
                <span className="text-2xl">✅</span>
                <span className="text-lg font-semibold">Correct!</span>
              </div>
            ) : (
              <div className="text-center">
                <div className="flex items-center gap-2 text-red-500 mb-1">
                  <span className="text-2xl">❌</span>
                  <span className="text-lg font-semibold">Incorrect</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  The answer was{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {currentPlayer.name}
                  </span>
                </p>
              </div>
            )}
          </div>
        )}

        {/* Input & buttons */}
        {!answered ? (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <input
              ref={inputRef}
              type="text"
              value={playerName}
              onChange={e => onPlayerNameChange(e.target.value)}
              placeholder="Type player's name..."
              className="w-full px-5 py-4 rounded-2xl bg-gray-100 dark:bg-gray-800
                text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                border-2 border-transparent focus:border-red-600/30
                outline-none transition-all duration-200 text-lg"
              autoComplete="off"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={!playerName.trim()}
                className="flex-1 py-3.5 rounded-2xl text-white font-semibold
                  active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed
                  transition-all duration-200"
                style={{ backgroundColor: team.color }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onSkip}
                className="px-6 py-3.5 rounded-2xl bg-gray-200 dark:bg-gray-700
                  text-gray-600 dark:text-gray-300 font-medium
                  hover:bg-gray-300 dark:hover:bg-gray-600 active:scale-[0.98]
                  transition-all duration-200"
              >
                Skip
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={onNext}
            className="w-full py-4 rounded-2xl text-white font-semibold text-lg
              active:scale-[0.98]
              transition-all duration-200 shadow-lg animate-fade-in"
            style={{ backgroundColor: team.color, boxShadow: `0 8px 25px ${team.color}40` }}
          >
            {isLastQuestion ? 'See Results' : 'Next Player'}
          </button>
        )}
      </div>
    </div>
  );
}
