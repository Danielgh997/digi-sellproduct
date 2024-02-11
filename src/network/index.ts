import {axiosSetup} from './axios/index';
// @ts-ignore
import {BaseUrl} from '@env';

console.log(BaseUrl);

export const request = axiosSetup({
  requestConfig: {
    baseURL: BaseUrl,
  },
});
