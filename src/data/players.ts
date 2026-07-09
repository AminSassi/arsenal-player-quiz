import type { Player } from '../types';

export const players: Player[] = [
  { name: 'David Raya', image: '/players/raya.png' },
  { name: 'Kepa Arrizabalaga', image: '/players/kepa.png' },
  { name: 'Tommy Setford', image: '/players/setford.png' },
  { name: 'William Saliba', image: '/players/saliba.png' },
  { name: 'Cristhian Mosquera', image: '/players/mosquera.png' },
  { name: 'Ben White', image: '/players/white.png' },
  { name: 'Piero Hincapié', image: '/players/hincapie.png' },
  { name: 'Gabriel Magalhães', image: '/players/gabriel.png' },
  { name: 'Jurrien Timber', image: '/players/timber.png' },
  { name: 'Riccardo Calafiori', image: '/players/calafiori.png' },
  { name: 'Myles Lewis-Skelly', image: '/players/lewisskelly.png' },
  { name: 'Martin Ødegaard', image: '/players/odegaard.png' },
  { name: 'Christian Nørgaard', image: '/players/norgaard.png' },
  { name: 'Fábio Vieira', image: '/players/vieira.png' },
  { name: 'Ethan Nwaneri', image: '/players/nwaneri.png' },
  { name: 'Mikel Merino', image: '/players/merino.png' },
  { name: 'Martín Zubimendi', image: '/players/zubimendi.png' },
  { name: 'Declan Rice', image: '/players/rice.png' },
  { name: 'Bukayo Saka', image: '/players/saka.png' },
  { name: 'Gabriel Jesus', image: '/players/jesus.png' },
  { name: 'Eberechi Eze', image: '/players/eze.png' },
  { name: 'Gabriel Martinelli', image: '/players/martinelli.png' },
  { name: 'Viktor Gyökeres', image: '/players/gyokeres.png' },
  { name: 'Leandro Trossard', image: '/players/trossard.png' },
  { name: 'Noni Madueke', image: '/players/madueke.png' },
  { name: 'Reiss Nelson', image: '/players/nelson.png' },
  { name: 'Kai Havertz', image: '/players/havertz.png' },
];

function normalize(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ø/g, 'o')
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Words that are too short or common to match alone
const STOP_WORDS = new Set(['de', 'da', 'di', 'el', 'la', 'le', 'van', 'von']);

function getParts(name: string): { first: string; last: string; full: string } {
  const n = normalize(name);
  const parts = n.split(' ').filter(p => p.length > 0);
  return {
    first: parts[0] || '',
    last: parts[parts.length - 1] || '',
    full: n,
  };
}

// Build unique first names and last names across all players
function buildNameIndex(playerList: Player[]) {
  const firstCount = new Map<string, number>();
  const lastCount = new Map<string, number>();

  for (const p of playerList) {
    const { first, last } = getParts(p.name);
    if (first && !STOP_WORDS.has(first)) {
      firstCount.set(first, (firstCount.get(first) || 0) + 1);
    }
    if (last && !STOP_WORDS.has(last)) {
      lastCount.set(last, (lastCount.get(last) || 0) + 1);
    }
  }

  return { firstCount, lastCount };
}

export function checkAnswer(input: string, correctName: string): boolean {
  const normalizedInput = normalize(input);
  const { first: inputFirst, last: inputLast, full: inputFull } = getParts(input);
  const { first: correctFirst, last: correctLast, full: correctFull } = getParts(correctName);

  // 1. Exact full name match
  if (normalizedInput === correctFull) return true;

  // 2. Surname match (if unique across squad)
  const { firstCount, lastCount } = buildNameIndex(players);

  if (inputFull === correctLast && (lastCount.get(correctLast) || 0) === 1) return true;

  // 3. First name match (if unique across squad)
  if (inputFull === correctFirst && (firstCount.get(correctFirst) || 0) === 1) return true;

  // 4. First + last name in any order
  if (
    inputFirst === correctFirst && inputLast === correctLast
  ) return true;

  if (
    inputFirst === correctLast && inputLast === correctFirst
  ) return true;

  // 5.输入 matches the start of the correct name (e.g. "bukayo s" matches "bukayo saka")
  if (correctFull.startsWith(inputFull) && inputFull.length >= 3) return true;

  // 6. For hyphenated names like "lewis-skelly", accept parts
  if (correctLast.includes('-')) {
    const hyphenParts = correctLast.split('-');
    if (hyphenParts.some(p => p === inputFull)) return true;
  }

  return false;
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
