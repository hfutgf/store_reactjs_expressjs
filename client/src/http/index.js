import axios from "axios";

export const API = import.meta.env.VITE_API_KEY;

const $host = axios.create({
  baseURL: API,
});

const $authHost = axios.create({
  baseURL: API,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${JSON.parse(
    localStorage.getItem("token")
  )}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
