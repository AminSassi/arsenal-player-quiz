import type { Team } from '../../types';
import { arsenalPlayers } from './arsenal';
import { mancityPlayers } from './mancity';
import { liverpoolPlayers } from './liverpool';
import { chelseaPlayers } from './chelsea';
import { tottenhamPlayers } from './tottenham';

const BASE = import.meta.env.BASE_URL;

export const teams: Team[] = [
  {
    id: 'arsenal',
    name: 'Arsenal',
    shortName: 'ARS',
    color: '#EF0107',
    logo: `${BASE}logos/arsenal.svg`,
    players: arsenalPlayers,
  },
  {
    id: 'mancity',
    name: 'Manchester City',
    shortName: 'MCI',
    color: '#6CABDD',
    logo: `${BASE}logos/mancity.svg`,
    players: mancityPlayers,
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    shortName: 'LIV',
    color: '#C8102E',
    logo: `${BASE}logos/liverpool.svg`,
    players: liverpoolPlayers,
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    shortName: 'CHE',
    color: '#034694',
    logo: `${BASE}logos/chelsea.png`,
    players: chelseaPlayers,
  },
  {
    id: 'tottenham',
    name: 'Tottenham',
    shortName: 'TOT',
    color: '#132257',
    logo: `${BASE}logos/tottenham.svg`,
    players: tottenhamPlayers,
  },
];
