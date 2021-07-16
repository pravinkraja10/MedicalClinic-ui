import { storageKeys } from '../config/config';

class StorageService {
  isLoggedIn = () => {
    if (localStorage.getItem(storageKeys.token)) {
      return true;
    }
    return false;
  };

  getToken = () => {
    return localStorage.getItem(storageKeys.token);
  };

  setToken = (token) => {
    console.log(token);
    localStorage.setItem(storageKeys.token, token);
  };

  onLogin = (token) => {
    localStorage.setItem(storageKeys.token, token);
  };

  onLogout = () => {
    localStorage.removeItem(storageKeys.token);
    window.location.href = '/overview';
  };
}

const storageService = new StorageService();
export default storageService;
