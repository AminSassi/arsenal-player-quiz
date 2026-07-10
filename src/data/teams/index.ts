import type { Team } from '../../types';
import { arsenalPlayers } from './arsenal';
import { mancityPlayers } from './mancity';
import { liverpoolPlayers } from './liverpool';

export const teams: Team[] = [
  {
    id: 'arsenal',
    name: 'Arsenal',
    shortName: 'ARS',
    color: '#EF0107',
    logo: '🔴',
    players: arsenalPlayers,
  },
  {
    id: 'mancity',
    name: 'Manchester City',
    shortName: 'MCI',
    color: '#6CABDD',
    logo: '🩵',
    players: mancityPlayers,
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    shortName: 'LIV',
    color: '#C8102E',
    logo: '🟥',
    players: liverpoolPlayers,
  },
];
