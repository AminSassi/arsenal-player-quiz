import { type FormEvent, type KeyboardEvent } from 'react';
import type { Player } from '../types';
import { PlayerCard } from './PlayerCard';
import { Confetti } from './Confetti';

interface Props {
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
  onPlayerNameChange: (name: string) => void;
}

export function QuizScreen({
  currentPlayer,
  currentIndex,
  totalPlayers,
  score,
  answered,
  isCorrect,
  showNext,
  isLastQuestion,
  playerName,
  imageLoaded,
  setImageLoaded,
  inputRef,
  onSubmit,
  onSkip,
  onNext,
  onPlayerNameChange,
}: Props) {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!playerName.trim() || answered) return;
    onSubmit(playerName);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && answered && showNext) {
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
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {currentIndex + 1} / {totalPlayers}
          </div>
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-arsenal-red">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {score}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-arsenal-red rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / totalPlayers) * 100}%` }}
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
                className="flex-1 py-3.5 rounded-2xl bg-arsenal-red text-white font-semibold
                  hover:bg-red-700 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed
                  transition-all duration-200"
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
            className="w-full py-4 rounded-2xl bg-arsenal-red text-white font-semibold text-lg
              hover:bg-red-700 active:scale-[0.98]
              transition-all duration-200 shadow-lg shadow-red-500/25 animate-fade-in"
          >
            {isLastQuestion ? 'See Results' : 'Next Player'}
          </button>
        )}
      </div>
    </div>
  );
}
