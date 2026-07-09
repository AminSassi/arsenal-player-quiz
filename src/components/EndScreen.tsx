import { getGrade } from '../data/players';
import { Confetti } from './Confetti';

interface Props {
  score: number;
  total: number;
  bestScore: number;
  onPlayAgain: () => void;
  onHome: () => void;
}

export function EndScreen({ score, total, bestScore, onPlayAgain, onHome }: Props) {
  const percentage = Math.round((score / total) * 100);
  const grade = getGrade(score, total);
  const isNewBest = score >= bestScore && score > 0;

  const getMessage = () => {
    if (percentage >= 90) return 'Outstanding! You really know your Arsenal!';
    if (percentage >= 75) return 'Great job! You know the squad well.';
    if (percentage >= 50) return 'Not bad! Room for improvement.';
    if (percentage >= 25) return 'Keep learning the squad!';
    return 'Time to study the Arsenal roster!';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in relative">
      <Confetti />

      <div className="text-center max-w-md w-full">
        {/* Grade */}
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto rounded-full bg-arsenal-red/10 dark:bg-arsenal-red/20
            flex items-center justify-center mb-6">
            <span className="text-5xl font-bold text-arsenal-red">{grade}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Quiz Complete!
          </h1>
          <p className="text-gray-500 dark:text-gray-400">{getMessage()}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-800">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{score}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Score</div>
          </div>
          <div className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-800">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{percentage}%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Accuracy</div>
          </div>
          <div className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-800">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{bestScore}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Best</div>
          </div>
        </div>

        {isNewBest && (
          <div className="mb-6 py-2 px-4 rounded-full bg-yellow-100 dark:bg-yellow-900/30
            text-yellow-700 dark:text-yellow-400 text-sm font-medium inline-block">
            🏆 New best score!
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onPlayAgain}
            className="w-full py-4 rounded-2xl bg-arsenal-red text-white font-semibold text-lg
              hover:bg-red-700 active:scale-[0.98]
              transition-all duration-200 shadow-lg shadow-red-500/25"
          >
            Play Again
          </button>
          <button
            onClick={onHome}
            className="w-full py-4 rounded-2xl bg-gray-200 dark:bg-gray-700
              text-gray-600 dark:text-gray-300 font-medium
              hover:bg-gray-300 dark:hover:bg-gray-600 active:scale-[0.98]
              transition-all duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
