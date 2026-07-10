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
import { realmadridPlayers } from './realmadrid';
import { acmilanPlayers } from './acmilan';
import { bvbPlayers } from './bvb';
import { atleticoPlayers } from './atletico';
import { napoliPlayers } from './napoli';

const BASE = import.meta.env.BASE_URL;

export const teams: Team[] = [
  {
    id: 'realmadrid',
    name: 'Real Madrid',
    shortName: 'RMA',
    color: '#FEBE10',
    logo: `${BASE}logos/realmadrid.png`,
    players: realmadridPlayers,
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    shortName: 'BAR',
    color: '#A50044',
    logo: `${BASE}logos/barcelona.png`,
    players: barcelonaPlayers,
  },
  {
    id: 'atletico',
    name: 'Atletico Madrid',
    shortName: 'ATM',
    color: '#CB3524',
    logo: `${BASE}logos/atletico.png`,
    players: atleticoPlayers,
  },
  {
    id: 'bayern',
    name: 'Bayern Munich',
    shortName: 'BAY',
    color: '#DC052D',
    logo: `${BASE}logos/bayern.png`,
    players: bayernPlayers,
  },
  {
    id: 'bvb',
    name: 'Borussia Dortmund',
    shortName: 'BVB',
    color: '#FDE100',
    logo: `${BASE}logos/bvb.png`,
    players: bvbPlayers,
  },
  {
    id: 'juventus',
    name: 'Juventus',
    shortName: 'JUV',
    color: '#000000',
    logo: `${BASE}logos/juventus.png`,
    players: juventusPlayers,
  },
  {
    id: 'acmilan',
    name: 'AC Milan',
    shortName: 'ACM',
    color: '#FB090B',
    logo: `${BASE}logos/acmilan.png`,
    players: acmilanPlayers,
  },
  {
    id: 'napoli',
    name: 'Napoli',
    shortName: 'NAP',
    color: '#12A0D7',
    logo: `${BASE}logos/napoli.png`,
    players: napoliPlayers,
  },
  {
    id: 'psg',
    name: 'Paris Saint-Germain',
    shortName: 'PSG',
    color: '#004170',
    logo: `${BASE}logos/psg.png`,
    players: psgPlayers,
  },
  {
    id: 'arsenal',
    name: 'Arsenal',
    shortName: 'ARS',
    color: '#EF0107',
    logo: `${BASE}logos/arsenal.png`,
    players: arsenalPlayers,
  },
  {
    id: 'mancity',
    name: 'Manchester City',
    shortName: 'MCI',
    color: '#6CABDD',
    logo: `${BASE}logos/mancity.png`,
    players: mancityPlayers,
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    shortName: 'LIV',
    color: '#C8102E',
    logo: `${BASE}logos/liverpool.png`,
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
    logo: `${BASE}logos/tottenham.png`,
    players: tottenhamPlayers,
  },
];
