import axios from 'axios';
import { API_CONFIG } from '../config/config';

class HttpService {
  service = null;

  constructor() {
    this.service = axios.create({
      baseURL: API_CONFIG.api
    });
    this.service.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  sendRequest = (config) => {
    config.headers = {
      // Authorization: `bearer ${storageService.getToken()}`
    };
    return this.service.request(config);
  };

  handleSuccess = (res) => {
    return res.data;
  };

  handleError = (e) => {
    console.log(e, e.response);
    if (!e.response) {
      return {
        success: false,
        error: 'Network Failure'
      };
    }

    switch (e.response.status) {
      case 400:
        return {
          success: false,
          error: e.response.data.error
        };
      case 401:
        return {
          success: false,
          error: e.response.data.error
        };
      case 403:
        return {
          success: false,
          error: e.response.data.error
        };
      case 500:
        return {
          success: false,
          error: e.response.data.error
        };
      default:
        return {
          success: false,
          error: 'Unknown Error'
        };
    }
  };
}

export default HttpService;
