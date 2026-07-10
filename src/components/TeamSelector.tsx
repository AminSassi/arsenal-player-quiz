import { teams } from '../data/teams';
import type { Team } from '../types';

interface Props {
  onSelect: (team: Team) => void;
  selectedLeague: string | null;
  onSelectLeague: (league: string) => void;
  onBack: () => void;
}

const LEAGUES = [
  { name: 'Premier League', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England' },
  { name: 'La Liga', flag: '🇪🇸', country: 'Spain' },
  { name: 'Serie A', flag: '🇮🇹', country: 'Italy' },
  { name: 'Bundesliga', flag: '🇩🇪', country: 'Germany' },
  { name: 'Ligue 1', flag: '🇫🇷', country: 'France' },
  { name: 'Primeira Liga', flag: '🇵🇹', country: 'Portugal' },
];

export function TeamSelector({ onSelect, selectedLeague, onSelectLeague, onBack }: Props) {
  if (selectedLeague) {
    const leagueTeams = teams.filter(t => t.league === selectedLeague);
    const league = LEAGUES.find(l => l.name === selectedLeague);

    return (
      <div className="min-h-screen flex flex-col items-center justify-start px-6 py-10 animate-fade-in">
        <div className="text-center max-w-2xl w-full">
          <button
            onClick={onBack}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-6 inline-flex items-center gap-1"
          >
            ← Back to leagues
          </button>

          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">{league?.flag}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              {selectedLeague}
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Choose a team to play
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {leagueTeams.map(team => (
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
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
      <div className="text-center max-w-lg w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
          Guess the Player
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
          Choose a league
        </p>

        <div className="grid grid-cols-2 gap-3">
          {LEAGUES.map(league => {
            const count = teams.filter(t => t.league === league.name).length;
            return (
              <button
                key={league.name}
                onClick={() => onSelectLeague(league.name)}
                className="group relative p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700
                  bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500
                  active:scale-[0.97] transition-all duration-200 text-center"
              >
                <div className="text-3xl mb-2">{league.flag}</div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">
                  {league.name}
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {count} teams
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
