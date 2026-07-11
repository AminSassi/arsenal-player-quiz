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
import { tunisiaPlayers } from './tunisia';
import { uruguayPlayers } from './uruguay';
import { colombiaPlayers } from './colombia';
import { switzerlandPlayers } from './switzerland';
import { turkeyPlayers } from './turkey';
import { senegalPlayers } from './senegal';
import { egyptPlayers } from './egypt';
import { iranPlayers } from './iran';
import { scotlandPlayers } from './scotland';
import { serbiaPlayers } from './serbia';
import { denmarkPlayers } from './denmark';
import { polandPlayers } from './poland';
import { canadaPlayers } from './canada';
import { ghanaPlayers } from './ghana';
import { ecuadorPlayers } from './ecuador';
import { cameroonPlayers } from './cameroon';
import { saudiArabiaPlayers } from './saudi-arabia';
import { nigeriaPlayers } from './nigeria';
import { algeriaPlayers } from './algeria';

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
  {
    id: 'tunisia',
    name: 'Tunisia',
    shortName: 'TUN',
    color: '#E70013',
    logo: `${BASE}logos/tunisia.png`,
    league: 'World Cup 2026',
    players: tunisiaPlayers,
  },
  {
    id: 'uruguay',
    name: 'Uruguay',
    shortName: 'URU',
    color: '#5FC2E8',
    logo: `${BASE}logos/uruguay.png`,
    league: 'World Cup 2026',
    players: uruguayPlayers,
  },
  {
    id: 'colombia',
    name: 'Colombia',
    shortName: 'COL',
    color: '#FCD116',
    logo: `${BASE}logos/colombia.png`,
    league: 'World Cup 2026',
    players: colombiaPlayers,
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    shortName: 'SUI',
    color: '#FF0000',
    logo: `${BASE}logos/switzerland.png`,
    league: 'World Cup 2026',
    players: switzerlandPlayers,
  },
  {
    id: 'turkey',
    name: 'Turkey',
    shortName: 'TUR',
    color: '#E30A17',
    logo: `${BASE}logos/turkey.png`,
    league: 'World Cup 2026',
    players: turkeyPlayers,
  },
  {
    id: 'senegal',
    name: 'Senegal',
    shortName: 'SEN',
    color: '#00853F',
    logo: `${BASE}logos/senegal.png`,
    league: 'World Cup 2026',
    players: senegalPlayers,
  },
  {
    id: 'egypt',
    name: 'Egypt',
    shortName: 'EGY',
    color: '#CE1126',
    logo: `${BASE}logos/egypt.png`,
    league: 'World Cup 2026',
    players: egyptPlayers,
  },
  {
    id: 'iran',
    name: 'Iran',
    shortName: 'IRN',
    color: '#239F40',
    logo: `${BASE}logos/iran.png`,
    league: 'World Cup 2026',
    players: iranPlayers,
  },
  {
    id: 'scotland',
    name: 'Scotland',
    shortName: 'SCO',
    color: '#003078',
    logo: `${BASE}logos/scotland.png`,
    league: 'World Cup 2026',
    players: scotlandPlayers,
  },
  {
    id: 'serbia',
    name: 'Serbia',
    shortName: 'SRB',
    color: '#C6363C',
    logo: `${BASE}logos/serbia.png`,
    league: 'World Cup 2026',
    players: serbiaPlayers,
  },
  {
    id: 'denmark',
    name: 'Denmark',
    shortName: 'DEN',
    color: '#C8102E',
    logo: `${BASE}logos/denmark.png`,
    league: 'World Cup 2026',
    players: denmarkPlayers,
  },
  {
    id: 'poland',
    name: 'Poland',
    shortName: 'POL',
    color: '#DC143C',
    logo: `${BASE}logos/poland.png`,
    league: 'World Cup 2026',
    players: polandPlayers,
  },
  {
    id: 'canada',
    name: 'Canada',
    shortName: 'CAN',
    color: '#FF0000',
    logo: `${BASE}logos/canada.png`,
    league: 'World Cup 2026',
    players: canadaPlayers,
  },
  {
    id: 'ghana',
    name: 'Ghana',
    shortName: 'GHA',
    color: '#CE1126',
    logo: `${BASE}logos/ghana.png`,
    league: 'World Cup 2026',
    players: ghanaPlayers,
  },
  {
    id: 'ecuador',
    name: 'Ecuador',
    shortName: 'ECU',
    color: '#FFD100',
    logo: `${BASE}logos/ecuador.png`,
    league: 'World Cup 2026',
    players: ecuadorPlayers,
  },
  {
    id: 'cameroon',
    name: 'Cameroon',
    shortName: 'CMR',
    color: '#007A5E',
    logo: `${BASE}logos/cameroon.png`,
    league: 'World Cup 2026',
    players: cameroonPlayers,
  },
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    shortName: 'KSA',
    color: '#006C35',
    logo: `${BASE}logos/saudi-arabia.png`,
    league: 'World Cup 2026',
    players: saudiArabiaPlayers,
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    shortName: 'NGA',
    color: '#008751',
    logo: `${BASE}logos/nigeria.png`,
    league: 'World Cup 2026',
    players: nigeriaPlayers,
  },
  {
    id: 'algeria',
    name: 'Algeria',
    shortName: 'ALG',
    color: '#006233',
    logo: `${BASE}logos/algeria.png`,
    league: 'World Cup 2026',
    players: algeriaPlayers,
  },
];
