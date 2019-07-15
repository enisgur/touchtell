import axios from 'axios';
import { axiosURL } from '../actions/types';
// SET AXIOS PROXY BASEURL
axios.defaults.baseURL = axiosURL;
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
