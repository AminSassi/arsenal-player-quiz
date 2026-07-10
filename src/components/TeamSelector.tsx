import { teams } from '../data/teams';
import type { Team } from '../types';

interface Props {
  onSelect: (team: Team) => void;
}

export function TeamSelector({ onSelect }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
      <div className="text-center max-w-lg w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
          Guess the Player
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
          Choose a team to play
        </p>

        <div className="grid grid-cols-2 gap-3">
          {teams.map(team => (
            <button
              key={team.id}
              onClick={() => onSelect(team)}
              className="group relative p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500
                active:scale-[0.97] transition-all duration-200 text-left"
            >
              <div className="text-3xl mb-2">{team.logo}</div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm">
                {team.name}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {team.players.length} players
              </div>
              <div
                className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: team.color }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
