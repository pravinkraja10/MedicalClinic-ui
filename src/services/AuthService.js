import HttpService from './HttpService';
import { API } from '../config/config';

class AuthService extends HttpService {
  login = async (payload) => {
    return await this.sendRequest({
      method: 'POST',
      url: API.login,
      responseType: 'json',
      data: payload,
    });
  };

  validateToken = async (query) => {
    return await this.sendRequest({
      method: 'GET',
      url: API.validate + query,
      responseType: 'json',
    });
  };

  register = async (data) => {
    return await this.sendRequest({
      method: 'POST',
      url: API.register,
      responseType: 'json',
      data,
    });
  };

  registerVerify = async (query) => {
    return await this.sendRequest({
      method: 'GET',
      url: API.registerVerify + query,
      responseType: 'json',
    });
  };

  resetPasswordInit = async (payload) => {
    return await this.sendRequest({
      method: 'POST',
      url: API.reset,
      responseType: 'json',
      data: payload,
    });
  };

  resetPasswordVerify = async (query) => {
    return await this.sendRequest({
      method: 'GET',
      url: API.verifyResetPassword + query,
      responseType: 'json',
    });
  };

  resetPassword = async (payload) => {
    return await this.sendRequest({
      method: 'POST',
      url: API.resetPassword,
      responseType: 'json',
      data: payload,
    });
  };

  resendSignupVerification = async (payload) => {
    return await this.sendRequest({
      method: 'POST',
      url: API.resendSignupVerification,
      responseType: 'json',
      data: payload,
    });
  };
}

const authService = new AuthService();
export default authService;
