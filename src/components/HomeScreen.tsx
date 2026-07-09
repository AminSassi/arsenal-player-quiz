interface Props {
  onStart: () => void;
  bestScore: number;
}

export function HomeScreen({ onStart, bestScore }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
      <div className="text-center max-w-md">
        {/* Arsenal badge */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-arsenal-red/10 dark:bg-arsenal-red/20 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-12 h-12 fill-arsenal-red">
            <path d="M50 5 L60 35 L95 35 L67 55 L77 85 L50 67 L23 85 L33 55 L5 35 L40 35 Z" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
          Guess the<br />Arsenal Player
        </h1>

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
          Can you name every current Arsenal player?
        </p>

        <button
          onClick={onStart}
          className="w-full max-w-xs mx-auto block px-8 py-4 rounded-2xl
            bg-arsenal-red text-white font-semibold text-lg
            hover:bg-red-700 active:scale-[0.98]
            transition-all duration-200 shadow-lg shadow-red-500/25"
        >
          Start Quiz
        </button>

        {bestScore > 0 && (
          <p className="mt-6 text-sm text-gray-400 dark:text-gray-500">
            Best score: {bestScore} / 25
          </p>
        )}
      </div>
    </div>
  );
}
