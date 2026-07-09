import { useState } from 'react';
import type { Player } from '../types';
import { LoadingSkeleton } from './LoadingSkeleton';

interface Props {
  player: Player;
  answered: boolean;
  isCorrect: boolean;
  imageLoaded: boolean;
  setImageLoaded: (loaded: boolean) => void;
}

export function PlayerCard({ player, answered, isCorrect, imageLoaded, setImageLoaded }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-64 h-64 md:w-80 md:h-80">
      {!imageLoaded && (
        <div className="absolute inset-0">
          <LoadingSkeleton />
        </div>
      )}

      <div
        className={`
          w-full h-full overflow-hidden rounded-2xl
          transition-opacity duration-300
          ${answered && !isCorrect ? 'animate-shake' : ''}
          ${answered && isCorrect ? 'animate-pulse-scale' : ''}
        `}
        style={{ opacity: imageLoaded ? 1 : 0 }}
      >
        {imgError ? (
          <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-2">⚽</div>
              <p className="text-sm text-gray-400">Player Image</p>
            </div>
          </div>
        ) : (
          <img
            src={player.image}
            alt="Guess this player"
            className={`w-full h-full object-cover transition-all duration-500
              ${answered && !isCorrect ? 'grayscale opacity-70' : ''}
              ${answered && isCorrect ? 'brightness-110 saturate-110' : ''}
            `}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImgError(true);
              setImageLoaded(true);
            }}
          />
        )}

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
      </div>
    </div>
  );
}
