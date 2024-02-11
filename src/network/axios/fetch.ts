import {IAxiosRequestConfig, TAxios} from './_types';

const axiosFetchInstances = (axios: TAxios, config: IAxiosRequestConfig) => {
  const axiosGet = (url: string, params?: object) => axios.get(url, params);

  return {axiosGet};
};

export {axiosFetchInstances};
