import axios, { type AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.ServerDefaultUrl}`,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
    } else if (error.response && error.response.status === 404) {
    } else if (error.response && error.response.status === 500) {
    } else {
    }
    return Promise.reject(error);
  }
);
