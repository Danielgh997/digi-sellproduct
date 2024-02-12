import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosStatic,
} from "axios";

type TAxios = AxiosStatic | AxiosInstance;

type TAxiosResponse = AxiosResponse;

interface IConfig {
  requestConfig: IAxiosRequestConfig;
}

interface IAxiosRequestConfig extends AxiosRequestConfig {
  baseURL: string;
}



export type {
  TAxios,
  TAxiosResponse,
  IConfig,
  IAxiosRequestConfig,
};
