import { teams } from '../data/teams';
import type { Team } from '../types';

interface Props {
  onSelect: (team: Team) => void;
}

const LEAGUE_ORDER = [
  'Premier League',
  'La Liga',
  'Serie A',
  'Bundesliga',
  'Ligue 1',
  'Primeira Liga',
];

const LEAGUE_FLAGS: Record<string, string> = {
  'Premier League': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'La Liga': '🇪🇸',
  'Serie A': '🇮🇹',
  'Bundesliga': '🇩🇪',
  'Ligue 1': '🇫🇷',
  'Primeira Liga': '🇵🇹',
};

export function TeamSelector({ onSelect }: Props) {
  const grouped = LEAGUE_ORDER.map(league => ({
    league,
    flag: LEAGUE_FLAGS[league] || '',
    teams: teams.filter(t => t.league === league),
  })).filter(g => g.teams.length > 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 py-10 animate-fade-in">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
          Guess the Player
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
          Choose a team to play
        </p>

        <div className="space-y-8">
          {grouped.map(group => (
            <div key={group.league}>
              <div className="flex items-center gap-2 mb-3 px-1">
                <span className="text-lg">{group.flag}</span>
                <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {group.league}
                </h2>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.teams.map(team => (
                  <button
                    key={team.id}
                    onClick={() => onSelect(team)}
                    className="group relative p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700
                      bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500
                      active:scale-[0.97] transition-all duration-200 text-left"
                  >
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-10 h-10 mb-2 object-contain"
                    />
                    <div className="font-semibold text-gray-900 dark:text-white text-xs leading-tight">
                      {team.name}
                    </div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                      {team.players.length} players
                    </div>
                    <div
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: team.color }}
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
