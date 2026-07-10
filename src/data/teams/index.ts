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
import { interPlayers } from './inter';
import { romaPlayers } from './roma';
import { lyonPlayers } from './lyon';
import { sportingPlayers } from './sporting';
import { benficaPlayers } from './benfica';
import { portoPlayers } from './porto';
import { westhamPlayers } from './westham';
import { brightonPlayers } from './brighton';
import { brazilPlayers } from './brazil';
import { argentinaPlayers } from './argentina';
import { francePlayers } from './france';
import { germanyPlayers } from './germany';
import { spainPlayers } from './spain';
import { englandPlayers } from './england';
import { netherlandsPlayers } from './netherlands';
import { portugalPlayers } from './portugal';
import { italyPlayers } from './italy';
import { croatiaPlayers } from './croatia';
import { japanPlayers } from './japan';
import { southKoreaPlayers } from './south-korea';
import { usaPlayers } from './usa';
import { mexicoPlayers } from './mexico';
import { moroccoPlayers } from './morocco';
import { belgiumPlayers } from './belgium';

const BASE = import.meta.env.BASE_URL;

export const teams: Team[] = [
  // Premier League
  {
    id: 'arsenal',
    name: 'Arsenal',
    shortName: 'ARS',
    color: '#EF0107',
    logo: `${BASE}logos/arsenal.png`,
    league: 'Premier League',
    players: arsenalPlayers,
  },
  {
    id: 'mancity',
    name: 'Manchester City',
    shortName: 'MCI',
    color: '#6CABDD',
    logo: `${BASE}logos/mancity.png`,
    league: 'Premier League',
    players: mancityPlayers,
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    shortName: 'LIV',
    color: '#C8102E',
    logo: `${BASE}logos/liverpool.png`,
    league: 'Premier League',
    players: liverpoolPlayers,
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    shortName: 'CHE',
    color: '#034694',
    logo: `${BASE}logos/chelsea.png`,
    league: 'Premier League',
    players: chelseaPlayers,
  },
  {
    id: 'tottenham',
    name: 'Tottenham',
    shortName: 'TOT',
    color: '#132257',
    logo: `${BASE}logos/tottenham.png`,
    league: 'Premier League',
    players: tottenhamPlayers,
  },
  {
    id: 'westham',
    name: 'West Ham United',
    shortName: 'WHU',
    color: '#7A263A',
    logo: `${BASE}logos/westham.png`,
    league: 'Premier League',
    players: westhamPlayers,
  },
  {
    id: 'brighton',
    name: 'Brighton & Hove Albion',
    shortName: 'BHA',
    color: '#0057B8',
    logo: `${BASE}logos/brighton.png`,
    league: 'Premier League',
    players: brightonPlayers,
  },
  // La Liga
  {
    id: 'realmadrid',
    name: 'Real Madrid',
    shortName: 'RMA',
    color: '#FEBE10',
    logo: `${BASE}logos/realmadrid.png`,
    league: 'La Liga',
    players: realmadridPlayers,
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    shortName: 'BAR',
    color: '#A50044',
    logo: `${BASE}logos/barcelona.png`,
    league: 'La Liga',
    players: barcelonaPlayers,
  },
  {
    id: 'atletico',
    name: 'Atletico Madrid',
    shortName: 'ATM',
    color: '#CB3524',
    logo: `${BASE}logos/atletico.png`,
    league: 'La Liga',
    players: atleticoPlayers,
  },
  // Bundesliga
  {
    id: 'bayern',
    name: 'Bayern Munich',
    shortName: 'BAY',
    color: '#DC052D',
    logo: `${BASE}logos/bayern.png`,
    league: 'Bundesliga',
    players: bayernPlayers,
  },
  {
    id: 'bvb',
    name: 'Borussia Dortmund',
    shortName: 'BVB',
    color: '#FDE100',
    logo: `${BASE}logos/bvb.png`,
    league: 'Bundesliga',
    players: bvbPlayers,
  },
  // Serie A
  {
    id: 'juventus',
    name: 'Juventus',
    shortName: 'JUV',
    color: '#000000',
    logo: `${BASE}logos/juventus.png`,
    league: 'Serie A',
    players: juventusPlayers,
  },
  {
    id: 'acmilan',
    name: 'AC Milan',
    shortName: 'ACM',
    color: '#FB090B',
    logo: `${BASE}logos/acmilan.png`,
    league: 'Serie A',
    players: acmilanPlayers,
  },
  {
    id: 'inter',
    name: 'Inter Milan',
    shortName: 'INT',
    color: '#0068A8',
    logo: `${BASE}logos/inter.png`,
    league: 'Serie A',
    players: interPlayers,
  },
  {
    id: 'napoli',
    name: 'Napoli',
    shortName: 'NAP',
    color: '#12A0D7',
    logo: `${BASE}logos/napoli.png`,
    league: 'Serie A',
    players: napoliPlayers,
  },
  {
    id: 'roma',
    name: 'AS Roma',
    shortName: 'ROM',
    color: '#8E1F2F',
    logo: `${BASE}logos/roma.png`,
    league: 'Serie A',
    players: romaPlayers,
  },
  // Ligue 1
  {
    id: 'psg',
    name: 'Paris Saint-Germain',
    shortName: 'PSG',
    color: '#004170',
    logo: `${BASE}logos/psg.png`,
    league: 'Ligue 1',
    players: psgPlayers,
  },
  {
    id: 'lyon',
    name: 'Olympique Lyonnais',
    shortName: 'OL',
    color: '#0F4C81',
    logo: `${BASE}logos/lyon.png`,
    league: 'Ligue 1',
    players: lyonPlayers,
  },
  // Primeira Liga
  {
    id: 'sporting',
    name: 'Sporting CP',
    shortName: 'SCP',
    color: '#00843D',
    logo: `${BASE}logos/sporting.png`,
    league: 'Primeira Liga',
    players: sportingPlayers,
  },
  {
    id: 'benfica',
    name: 'SL Benfica',
    shortName: 'SLB',
    color: '#FF0000',
    logo: `${BASE}logos/benfica.png`,
    league: 'Primeira Liga',
    players: benficaPlayers,
  },
  {
    id: 'porto',
    name: 'FC Porto',
    shortName: 'FCP',
    color: '#003B7A',
    logo: `${BASE}logos/porto.png`,
    league: 'Primeira Liga',
    players: portoPlayers,
  },
  // National Teams - World Cup 2026
  {
    id: 'brazil',
    name: 'Brazil',
    shortName: 'BRA',
    color: '#009C3B',
    logo: `${BASE}logos/brazil.png`,
    league: 'World Cup 2026',
    players: brazilPlayers,
  },
  {
    id: 'argentina',
    name: 'Argentina',
    shortName: 'ARG',
    color: '#74ACDF',
    logo: `${BASE}logos/argentina.png`,
    league: 'World Cup 2026',
    players: argentinaPlayers,
  },
  {
    id: 'france',
    name: 'France',
    shortName: 'FRA',
    color: '#002654',
    logo: `${BASE}logos/france.png`,
    league: 'World Cup 2026',
    players: francePlayers,
  },
  {
    id: 'germany',
    name: 'Germany',
    shortName: 'GER',
    color: '#000000',
    logo: `${BASE}logos/germany.png`,
    league: 'World Cup 2026',
    players: germanyPlayers,
  },
  {
    id: 'spain',
    name: 'Spain',
    shortName: 'ESP',
    color: '#AA151B',
    logo: `${BASE}logos/spain.png`,
    league: 'World Cup 2026',
    players: spainPlayers,
  },
  {
    id: 'england',
    name: 'England',
    shortName: 'ENG',
    color: '#CF081F',
    logo: `${BASE}logos/england.png`,
    league: 'World Cup 2026',
    players: englandPlayers,
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    shortName: 'NED',
    color: '#FF6600',
    logo: `${BASE}logos/netherlands.png`,
    league: 'World Cup 2026',
    players: netherlandsPlayers,
  },
  {
    id: 'portugal',
    name: 'Portugal',
    shortName: 'POR',
    color: '#006600',
    logo: `${BASE}logos/portugal.png`,
    league: 'World Cup 2026',
    players: portugalPlayers,
  },
  {
    id: 'italy',
    name: 'Italy',
    shortName: 'ITA',
    color: '#008C45',
    logo: `${BASE}logos/italy.png`,
    league: 'World Cup 2026',
    players: italyPlayers,
  },
  {
    id: 'croatia',
    name: 'Croatia',
    shortName: 'CRO',
    color: '#171796',
    logo: `${BASE}logos/croatia.png`,
    league: 'World Cup 2026',
    players: croatiaPlayers,
  },
  {
    id: 'japan',
    name: 'Japan',
    shortName: 'JPN',
    color: '#002654',
    logo: `${BASE}logos/japan.png`,
    league: 'World Cup 2026',
    players: japanPlayers,
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    shortName: 'KOR',
    color: '#003478',
    logo: `${BASE}logos/south-korea.png`,
    league: 'World Cup 2026',
    players: southKoreaPlayers,
  },
  {
    id: 'usa',
    name: 'USA',
    shortName: 'USA',
    color: '#002868',
    logo: `${BASE}logos/usa.png`,
    league: 'World Cup 2026',
    players: usaPlayers,
  },
  {
    id: 'mexico',
    name: 'Mexico',
    shortName: 'MEX',
    color: '#006847',
    logo: `${BASE}logos/mexico.png`,
    league: 'World Cup 2026',
    players: mexicoPlayers,
  },
  {
    id: 'morocco',
    name: 'Morocco',
    shortName: 'MAR',
    color: '#006233',
    logo: `${BASE}logos/morocco.png`,
    league: 'World Cup 2026',
    players: moroccoPlayers,
  },
  {
    id: 'belgium',
    name: 'Belgium',
    shortName: 'BEL',
    color: '#000000',
    logo: `${BASE}logos/belgium.png`,
    league: 'World Cup 2026',
    players: belgiumPlayers,
  },
];
