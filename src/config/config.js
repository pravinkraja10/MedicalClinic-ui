const ENVIRONEMTS = {
  local: {
    auth: 'http://localhost:7071',
    api: 'http://localhost:8081'
  },
  dev: {
    auth: 'http://blue23.io:7071',
    api: 'http://blue23.io:8081',
    testApi: 'http://localhost:8081',
  },
  prod: {
    auth: 'http://localhost:7071',
    api: 'http://localhost:8081'
  },
};

export const API_CONFIG = {
  ...ENVIRONEMTS.dev
};

export const API = {
  login: `${API_CONFIG.auth}/v1/auth/signin`,
  register: `${API_CONFIG.auth}/v1/auth/signup`,
  registerVerify: `${API_CONFIG.auth}/v1/auth/email-confirmation/`,
  validate: `${API_CONFIG.auth}/v1/auth/validate/`,

  getBasicStats: `${API_CONFIG.api}/v1`,
  getAllBBLeagues: `${API_CONFIG.api}/v1/basketball/leagues`,
  getAllBBLeagueTeams: `${API_CONFIG.api}/v1/basketball/leagues/`,
  getAllBBLeagueHistory: `${API_CONFIG.api}/v1/basketball/history/leagues/`,
  getUpcomingMatches: `${API_CONFIG.api}/v1/basketball/leagues/nba/matches/today`,
  getSingleTeamStats: `${API_CONFIG.api}/v1/basketball/leagues/nba/teams/`,
  getDualTeamStats: `${API_CONFIG.api}/v1/basketball/leagues/nba/teams/`,
  getPlayerStats: `${API_CONFIG.api}/v1/basketball/leagues/nba/players/stats`,
  getBingoMatchCards: `${API_CONFIG.testApi}/v1/basketball/leagues/nba/bingo`,
};

export const routes = {
  home: '/',
  dashboard: '/dashboard',
  faq: '/faq',
  aboutUs: '/about-us',
  contactUs: '/contact-us',
  nba: {
    base: '/dashboard/nba',
    // route: '/dashboard/nba/:page',
    moneylines: '/dashboard/nba/money-lines',
    history: '/dashboard/nba/history',
    teams: '/dashboard/nba/teams',
    duals: '/dashboard/nba/duals',
    players: '/dashboard/nba/players',
  },
  refresh: '/refresh'
};

export const EMAIL_USERNAME_PATTERN = /^[a-z0-9]+(?:[._][a-z0-9]+)*(?:\+[0-9]+)*$/;
export const EMAIL_DOMAIN_PATTERN = /^([a-z0-9]+?(-[a-z0-9]+)*(?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9]+$/;

export const MINDATE = '2006-10-30';

export const storageKeys = {
  token: 'BO_ACCESS_TOKEN'
};
  