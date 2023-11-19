import axios from 'axios';

const AUTH_TOKEN = process.env.REACT_APP_API_KEY1;
axios.defaults.baseURL = 'https://api.scripture.api.bible';
axios.defaults.headers.common['api-key'] = AUTH_TOKEN;
axios.defaults.timeout = 6000;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  console.log('this is a request failure', error.message);
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  console.log('this is a response failure', error.message);
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axios;
