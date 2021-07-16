import HttpService from './HttpService';
import { API } from '../config/config';

class BBService extends HttpService {

  getAllLeagues = async (query) => {
    return await this.sendRequest({
      method: 'GET',
      url: API.getAllBBLeagues,
      responseType: 'json'
    });
  };

  getAllLeagueTeams = async (query) => {
    return await this.sendRequest({
      method: 'GET',
      url: API.getAllBBLeagueTeams + query + '/teams',
      responseType: 'json'
    });
  };

  getAllLeagueHistory = async (query) => {
    return await this.sendRequest({
      method: 'GET',
      url: API.getAllBBLeagueHistory + query,
      responseType: 'json'
    });
  };

  getUpcomingMatches = async () => {
    return await this.sendRequest({
      method: 'GET',
      url: API.getUpcomingMatches,
      responseType: 'json'
    });
  };

  getSingleTeamStats = async (query) => {
    return await this.sendRequest({
      method: 'GET',
      url: API.getSingleTeamStats + query + '/stats',
      responseType: 'json'
    });
  };

  getDualTeamStats = async (query, query2) => {
    return await this.sendRequest({
      method: 'GET',
      url: API.getDualTeamStats + query + '/teams/' + query2 + '/stats',
      responseType: 'json'
    });
  };

  getPlayerStats = async () => {
    return await this.sendRequest({
      method: 'GET',
      url: API.getPlayerStats,
      responseType: 'json'
    });
  };

  getBingoCards = async () => {
    return await this.sendRequest({
      method: 'GET',
      url: API.getBingoMatchCards,
      responseType: 'json'
    });
  };

}

const bbService = new BBService();
export default bbService;
