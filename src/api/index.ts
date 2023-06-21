import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

export const customAxiosArr: AxiosInstance[] = [];

export const customAxios = (url: string): AxiosInstance => {
  const axiosApi = axios.create({
    baseURL: BASE_URL + (url || ''),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  if (localStorage.getItem('Authorization')) {
    axiosApi.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      'Authorization',
    )}`;
  }

  customAxiosArr.push(axiosApi);
  return axiosApi;
};

// export const setAuthorization = () => {
//   if (localStorage.getItem('Authorization')) {
//     customAxiosArr.forEach((axiosInstance) => {
//       axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
//         'Authorization',
//       )}`;
//     });
//   }
// };
