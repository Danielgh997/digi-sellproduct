import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosStatic,
} from "axios";

type TAxios = AxiosStatic | AxiosInstance;

type TAxiosResponse = AxiosResponse;

type TAuthToken = (token?: string | null | undefined) => void;

interface IConfig {
  requestConfig: IAxiosRequestConfig;
}

interface IAxiosRequestConfig extends AxiosRequestConfig {
  baseURL: string;
}



export type {
  TAxios,
  TAxiosResponse,
  TAuthToken,
  IConfig,
  IAxiosRequestConfig,
};
