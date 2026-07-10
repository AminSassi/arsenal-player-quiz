import type { Team } from '../types';

interface Props {
  team: Team;
  onStart: () => void;
  onBack: () => void;
  bestScore: number;
}

export function HomeScreen({ team, onStart, onBack, bestScore }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
      <div className="text-center max-w-md">
        <button
          onClick={onBack}
          className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        >
          ← Teams
        </button>

        <div
          className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center text-4xl"
          style={{ backgroundColor: team.color + '15' }}
        >
          {team.logo}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
          Guess the<br />{team.name} Player
        </h1>

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
          Can you name every {team.name} player?
        </p>

        <button
          onClick={onStart}
          className="w-full max-w-xs mx-auto block px-8 py-4 rounded-2xl text-white font-semibold text-lg
            hover:opacity-90 active:scale-[0.98]
            transition-all duration-200 shadow-lg"
          style={{ backgroundColor: team.color, boxShadow: `0 8px 25px ${team.color}40` }}
        >
          Start Quiz
        </button>

        {bestScore > 0 && (
          <p className="mt-6 text-sm text-gray-400 dark:text-gray-500">
            Best score: {bestScore}
          </p>
        )}
      </div>
    </div>
  );
}
