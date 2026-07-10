import { Searcher, type MatchData } from 'fast-fuzzy';
import type { Player } from '../types';

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

export function createChecker(playerList: Player[]) {
  const fullNameSearcher = new Searcher(playerList, {
    keySelector: (p: Player) => normalize(p.name),
    threshold: 0.85,
    ignoreCase: true,
    ignoreSymbols: true,
    normalizeWhitespace: true,
  });

  const surnameSearcher = new Searcher(playerList, {
    keySelector: (p: Player) => {
      const { last } = getParts(p.name);
      return last;
    },
    threshold: 0.85,
    ignoreCase: true,
    ignoreSymbols: true,
    normalizeWhitespace: true,
  });

  const { firstCount, lastCount } = buildNameIndex(playerList);

  return function checkAnswer(input: string, correctName: string): boolean {
    const normalizedInput = normalize(input);
    const { first: inputFirst, last: inputLast, full: inputFull } = getParts(input);
    const { first: correctFirst, last: correctLast, full: correctFull } = getParts(correctName);

    if (normalizedInput === correctFull) return true;
    if (inputFull === correctLast && (lastCount.get(correctLast) || 0) === 1) return true;
    if (inputFull === correctFirst && (firstCount.get(correctFirst) || 0) === 1) return true;
    if (inputFirst === correctFirst && inputLast === correctLast) return true;
    if (inputFirst === correctLast && inputLast === correctFirst) return true;
    if (inputFull.length >= 3 && correctLast.length >= 3) {
      if (correctLast.includes(inputFull) || inputFull.includes(correctLast)) return true;
    }
    if (correctFull.startsWith(inputFull) && inputFull.length >= 3) return true;
    if (correctLast.includes('-')) {
      const parts = correctLast.split('-');
      if (parts.some(p => p === inputFull)) return true;
    }

    const fullResults: MatchData<Player>[] = fullNameSearcher.search(inputFull, { returnMatchData: true });
    if (fullResults.length > 0 && fullResults[0].score >= 0.82) {
      if (normalize(fullResults[0].item.name) === correctFull) return true;
    }

    if (inputFull.length >= 3) {
      const surnameResults: MatchData<Player>[] = surnameSearcher.search(inputFull, { returnMatchData: true });
      if (surnameResults.length > 0 && surnameResults[0].score >= 0.82) {
        if (normalize(surnameResults[0].item.name) === correctFull) return true;
      }
    }

    return false;
  };
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
