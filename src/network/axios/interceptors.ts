import {IConfig, TAuthToken, TAxios, TAxiosResponse} from './_types';
// @ts-ignore
import {axiosConstructor} from './instance';
// @ts-ignore
import {baseURL} from '@env';

const setAxiosInterceptors = (axios: TAxios, config: IConfig) =>
  axios.interceptors.response.use(function (response: TAxiosResponse) {
    const instance = axiosConstructor({
      baseURL: baseURL,
    });

    setAxiosInterceptors(instance, {...config});

    return response;
  });

export {setAxiosInterceptors};
