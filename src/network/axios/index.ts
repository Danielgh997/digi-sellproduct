import {axiosConstructor} from './instance';
import {axiosFetchInstances} from './fetch';
import {IConfig} from './_types';
import {setAxiosInterceptors} from './interceptors';
import {setAxiosAuthToken} from './token';

const axiosSetup = (props: IConfig) => {
  const {requestConfig} = props;

  const instance = axiosConstructor(requestConfig);
  setAxiosAuthToken(instance);

  const config = {
    requestConfig,
  };
  setAxiosInterceptors(instance, {...config});
  const fetch = axiosFetchInstances(instance, requestConfig);

  return {instance, ...fetch};
};

export {axiosSetup};
