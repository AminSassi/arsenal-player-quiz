import type { Team } from '../../types';
import { arsenalPlayers } from './arsenal';
import { mancityPlayers } from './mancity';
import { liverpoolPlayers } from './liverpool';
import { chelseaPlayers } from './chelsea';
import { tottenhamPlayers } from './tottenham';
import { barcelonaPlayers } from './barcelona';
import { juventusPlayers } from './juventus';
import { bayernPlayers } from './bayern';
import { psgPlayers } from './psg';

const BASE = import.meta.env.BASE_URL;

export const teams: Team[] = [
  {
    id: 'barcelona',
    name: 'Barcelona',
    shortName: 'BAR',
    color: '#A50044',
    logo: `${BASE}logos/barcelona.svg`,
    players: barcelonaPlayers,
  },
  {
    id: 'bayern',
    name: 'Bayern Munich',
    shortName: 'BAY',
    color: '#DC052D',
    logo: `${BASE}logos/bayern.svg`,
    players: bayernPlayers,
  },
  {
    id: 'psg',
    name: 'Paris Saint-Germain',
    shortName: 'PSG',
    color: '#004170',
    logo: `${BASE}logos/psg.svg`,
    players: psgPlayers,
  },
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
    logo: `${BASE}logos/chelsea.svg`,
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
  {
    id: 'juventus',
    name: 'Juventus',
    shortName: 'JUV',
    color: '#000000',
    logo: `${BASE}logos/juventus.svg`,
    players: juventusPlayers,
  },
];
