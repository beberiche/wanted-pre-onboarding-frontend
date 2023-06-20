import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

export const customAxios = (url?: string): AxiosInstance => {
  const AxiosApi = axios.create({
    baseURL: BASE_URL + (url || ''),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  if (localStorage.getItem('Authorization')) {
    AxiosApi.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      'Authorization',
    )}`;
  }

  return AxiosApi;
};