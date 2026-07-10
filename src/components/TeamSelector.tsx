import { teams } from '../data/teams';
import type { Team } from '../types';

interface Props {
  onSelect: (team: Team) => void;
  selectedLeague: string | null;
  onSelectLeague: (league: string) => void;
  onBack: () => void;
}

const BASE = import.meta.env.BASE_URL;

const LEAGUES = [
  { name: 'Premier League', logo: `${BASE}logos/premier-league.png`, country: 'England' },
  { name: 'La Liga', logo: `${BASE}logos/la-liga.png`, country: 'Spain' },
  { name: 'Serie A', logo: `${BASE}logos/serie-a.png`, country: 'Italy' },
  { name: 'Bundesliga', logo: `${BASE}logos/bundesliga.png`, country: 'Germany' },
  { name: 'Ligue 1', logo: `${BASE}logos/ligue-1.png`, country: 'France' },
  { name: 'Primeira Liga', logo: `${BASE}logos/primeira-liga.png`, country: 'Portugal' },
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

          <div className="flex flex-col items-center gap-2 mb-2">
            {league?.logo && (
              <img src={league.logo} alt={selectedLeague} className="h-12 object-contain" />
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
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
                <img
                  src={league.logo}
                  alt={league.name}
                  className="w-14 h-14 mx-auto mb-2 object-contain"
                />
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
