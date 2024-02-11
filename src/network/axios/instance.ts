import axios from "axios";
import { IAxiosRequestConfig } from "./_types";

const axiosConstructor = (config: IAxiosRequestConfig) => axios.create(config);

export { axiosConstructor };
