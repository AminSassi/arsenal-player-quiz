import { Searcher, type MatchData } from 'fast-fuzzy';
import type { Player } from '../types';

const BASE = import.meta.env.BASE_URL;

export const players: Player[] = [
  { name: 'David Raya', image: `${BASE}players/raya.jpg` },
  { name: 'Kepa Arrizabalaga', image: `${BASE}players/kepa.jpg` },
  { name: 'Tommy Setford', image: `${BASE}players/setford.jpg` },
  { name: 'William Saliba', image: `${BASE}players/saliba.jpg` },
  { name: 'Cristhian Mosquera', image: `${BASE}players/mosquera.jpg` },
  { name: 'Ben White', image: `${BASE}players/white.jpg` },
  { name: 'Piero Hincapié', image: `${BASE}players/hincapie.jpg` },
  { name: 'Gabriel Magalhães', image: `${BASE}players/gabriel.jpg` },
  { name: 'Jurrien Timber', image: `${BASE}players/timber.jpg` },
  { name: 'Riccardo Calafiori', image: `${BASE}players/calafiori.jpg` },
  { name: 'Myles Lewis-Skelly', image: `${BASE}players/lewisskelly.jpg` },
  { name: 'Martin Ødegaard', image: `${BASE}players/odegaard.jpg` },
  { name: 'Christian Nørgaard', image: `${BASE}players/norgaard.jpg` },
  { name: 'Fábio Vieira', image: `${BASE}players/vieira.jpg` },
  { name: 'Ethan Nwaneri', image: `${BASE}players/nwaneri.jpg` },
  { name: 'Mikel Merino', image: `${BASE}players/merino.jpg` },
  { name: 'Martín Zubimendi', image: `${BASE}players/zubimendi.jpg` },
  { name: 'Declan Rice', image: `${BASE}players/rice.jpg` },
  { name: 'Bukayo Saka', image: `${BASE}players/saka.jpg` },
  { name: 'Gabriel Jesus', image: `${BASE}players/jesus.jpg` },
  { name: 'Eberechi Eze', image: `${BASE}players/eze.jpg` },
  { name: 'Gabriel Martinelli', image: `${BASE}players/martinelli.jpg` },
  { name: 'Viktor Gyökeres', image: `${BASE}players/gyokeres.jpg` },
  { name: 'Leandro Trossard', image: `${BASE}players/trossard.jpg` },
  { name: 'Noni Madueke', image: `${BASE}players/madueke.jpg` },
  { name: 'Reiss Nelson', image: `${BASE}players/nelson.jpg` },
  { name: 'Kai Havertz', image: `${BASE}players/havertz.jpg` },
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

const STOP_WORDS = new Set(['de', 'da', 'di', 'el', 'la', 'le', 'van', 'von']);

function getParts(name: string): { first: string; last: string; full: string } {
  const n = normalize(name);
  const parts = n.split(' ').filter(p => p.length > 0 && !STOP_WORDS.has(p));
  return {
    first: parts[0] || '',
    last: parts[parts.length - 1] || '',
    full: n,
  };
}

function buildNameIndex(playerList: Player[]) {
  const firstCount = new Map<string, number>();
  const lastCount = new Map<string, number>();

  for (const p of playerList) {
    const { first, last } = getParts(p.name);
    if (first) firstCount.set(first, (firstCount.get(first) || 0) + 1);
    if (last) lastCount.set(last, (lastCount.get(last) || 0) + 1);
  }

  return { firstCount, lastCount };
}

// Build fuzzy searchers for full name and surname
const fullNameSearcher = new Searcher(players, {
  keySelector: (p: Player) => normalize(p.name),
  threshold: 0.85,
  ignoreCase: true,
  ignoreSymbols: true,
  normalizeWhitespace: true,
});

const surnameSearcher = new Searcher(players, {
  keySelector: (p: Player) => {
    const { last } = getParts(p.name);
    return last;
  },
  threshold: 0.85,
  ignoreCase: true,
  ignoreSymbols: true,
  normalizeWhitespace: true,
});

export function checkAnswer(input: string, correctName: string): boolean {
  const normalizedInput = normalize(input);
  const { first: inputFirst, last: inputLast, full: inputFull } = getParts(input);
  const { first: correctFirst, last: correctLast, full: correctFull } = getParts(correctName);
  const { firstCount, lastCount } = buildNameIndex(players);

  // 1. Exact full name match
  if (normalizedInput === correctFull) return true;

  // 2. Surname match (if unique)
  if (inputFull === correctLast && (lastCount.get(correctLast) || 0) === 1) return true;

  // 3. First name match (if unique)
  if (inputFull === correctFirst && (firstCount.get(correctFirst) || 0) === 1) return true;

  // 4. First + last in any order
  if (inputFirst === correctFirst && inputLast === correctLast) return true;
  if (inputFirst === correctLast && inputLast === correctFirst) return true;

  // 5. Input contains surname or surname contains input (e.g. "vieira" matches "fabio vieira")
  if (inputFull.length >= 3 && correctLast.length >= 3) {
    if (correctLast.includes(inputFull) || inputFull.includes(correctLast)) return true;
  }

  // 6. Starts-with (e.g. "bukayo s" matches "bukayo saka")
  if (correctFull.startsWith(inputFull) && inputFull.length >= 3) return true;

  // 7. Hyphenated name parts (e.g. "lewis" matches "lewis-skelly")
  if (correctLast.includes('-')) {
    const parts = correctLast.split('-');
    if (parts.some(p => p === inputFull)) return true;
  }

  // 8. Fuzzy match on full name (catches typos)
  const fullResults: MatchData<Player>[] = fullNameSearcher.search(inputFull, { returnMatchData: true });
  if (fullResults.length > 0 && fullResults[0].score >= 0.82) {
    if (normalize(fullResults[0].item.name) === correctFull) return true;
  }

  // 9. Fuzzy match on surname (catches surname typos)
  if (inputFull.length >= 3) {
    const surnameResults: MatchData<Player>[] = surnameSearcher.search(inputFull, { returnMatchData: true });
    if (surnameResults.length > 0 && surnameResults[0].score >= 0.82) {
      if (normalize(surnameResults[0].item.name) === correctFull) return true;
    }
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
