import { useState, useEffect } from 'react';
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

  useEffect(() => {
    setImgError(false);
    setImageLoaded(false);
  }, [player.name, setImageLoaded]);

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden">
      {!imageLoaded && !imgError && (
        <div className="absolute inset-0 z-10">
          <LoadingSkeleton />
        </div>
      )}

      {!imgError && (
        <img
          key={player.name}
          src={player.image}
          alt="Guess this player"
          className={`
            w-full h-full object-cover
            transition-all duration-500
            ${answered && !isCorrect ? 'grayscale opacity-70 animate-shake' : ''}
            ${answered && isCorrect ? 'brightness-110 saturate-110 animate-pulse-scale' : ''}
          `}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImgError(true);
            setImageLoaded(true);
          }}
        />
      )}

      {imgError && (
        <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-2">⚽</div>
            <p className="text-sm text-gray-400">Player Image</p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none z-20" />
    </div>
  );
}
