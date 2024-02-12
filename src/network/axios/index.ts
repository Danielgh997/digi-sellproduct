import {axiosConstructor} from './instance';
import {axiosFetchInstances} from './fetch';
import {IConfig} from './_types';
import {setAxiosInterceptors} from './interceptors';

const axiosSetup = (props: IConfig) => {
  const {requestConfig} = props;

  const instance = axiosConstructor(requestConfig);

  const config = {
    requestConfig,
  };
  setAxiosInterceptors(instance, {...config});
  const fetch = axiosFetchInstances(instance, requestConfig);

  return {instance, ...fetch};
};

export {axiosSetup};
