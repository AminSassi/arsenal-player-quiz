import type { Player } from '../types';

export const players: Player[] = [
  { name: 'David Raya', image: '/players/rafa.jpg' },
  { name: 'William Saliba', image: '/players/saliba.jpg' },
  { name: 'Gabriel Magalhães', image: '/players/gabriel.jpg' },
  { name: 'Jurrien Timber', image: '/players/timber.jpg' },
  { name: 'Ben White', image: '/players/white.jpg' },
  { name: 'Takehiro Tomiyasu', image: '/players/tomiyasu.jpg' },
  { name: 'Oleksandr Zinchenko', image: '/players/zinchenko.jpg' },
  { name: 'Kieran Tierney', image: '/players/tierney.jpg' },
  { name: 'Thomas Partey', image: '/players/partey.jpg' },
  { name: 'Declan Rice', image: '/players/rice.jpg' },
  { name: 'Martin Ødegaard', image: '/players/odegaard.jpg' },
  { name: 'Granit Xhaka', image: '/players/xhaka.jpg' },
  { name: 'Jorginho', image: '/players/jorginho.jpg' },
  { name: 'Emile Smith Rowe', image: '/players/smithrowe.jpg' },
  { name: 'Bukayo Saka', image: '/players/saka.jpg' },
  { name: 'Gabriel Martinelli', image: '/players/martinelli.jpg' },
  { name: 'Leandro Trossard', image: '/players/trossard.jpg' },
  { name: 'Fabio Vieira', image: '/players/vieira.jpg' },
  { name: 'Eddie Nketiah', image: '/players/nketiah.jpg' },
  { name: 'Gabriel Jesus', image: '/players/jesus.jpg' },
  { name: 'Kai Havertz', image: '/players/havertz.jpg' },
  { name: 'Jakub Kiwior', image: '/players/kiwior.jpg' },
  { name: 'Raheem Sterling', image: '/players/sterling.jpg' },
  { name: 'Myles Lewis-Skelly', image: '/players/lewisskelly.jpg' },
  { name: 'Ethan Nwaneri', image: '/players/nwaneri.jpg' },
];

// Common name variations to accept
const nameAliases: Record<string, string[]> = {
  'david raya': ['raya', 'david raya'],
  'william saliba': ['saliba', 'will saliba'],
  'gabriel magalhães': ['gabriel', 'gabi', 'magalhaes'],
  'jurrien timber': ['timber'],
  'ben white': ['white'],
  'takehiro tomiyasu': ['tomiyasu', 'takehiro'],
  'oleksandr zinchenko': ['zinchenko', 'oleksandr'],
  'kieran tierney': ['tierney'],
  'thomas partey': ['partey'],
  'declan rice': ['rice'],
  'martin ødegaard': ['odegaard', 'martin odegaard', 'odegaard'],
  'granit xhaka': ['xhaka'],
  'jorginho': ['jorginho'],
  'emile smith rowe': ['smith rowe', 'esr', 'emile smith-rowe', 'smith-rowe'],
  'bukayo saka': ['saka', 'bukayo'],
  'gabriel martinelli': ['martinelli', 'gabi martinelli', 'gabriel'],
  'leandro trossard': ['trossard'],
  'fabio vieira': ['vieira', 'fabio'],
  'eddie nketiah': ['nketiah', 'eddie'],
  'gabriel jesus': ['jesus', 'gabi jesus'],
  'kai havertz': ['havertz', 'kai'],
  'jakub kiwior': ['kiwior', 'jakub'],
  'raheem sterling': ['sterling', 'raheem'],
  'myles lewis-skelly': ['lewisskelly', 'myles', 'lewis-skelly', 'lewisskelly'],
  'ethan nwaneri': ['nwaneri', 'ethan'],
};

export function checkAnswer(input: string, correctName: string): boolean {
  const normalized = input.trim().toLowerCase();
  const normalizedCorrect = correctName.toLowerCase();

  if (normalized === normalizedCorrect) return true;

  const aliases = nameAliases[normalizedCorrect] || [];
  return aliases.some(alias => normalized === alias);
}

export function getGrade(score: number, total: number): string {
  const percentage = (score / total) * 100;
  if (percentage >= 95) return 'A+';
  if (percentage >= 90) return 'A';
  if (percentage >= 85) return 'A-';
  if (percentage >= 80) return 'B+';
  if (percentage >= 75) return 'B';
  if (percentage >= 70) return 'B-';
  if (percentage >= 65) return 'C+';
  if (percentage >= 60) return 'C';
  if (percentage >= 55) return 'C-';
  if (percentage >= 50) return 'D';
  return 'F';
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
