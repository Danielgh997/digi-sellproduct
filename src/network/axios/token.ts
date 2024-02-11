import {TAxios} from './_types';

const setAxiosAuthToken = (axios: TAxios, token?: string | object) => {
  axios.defaults.headers.common['Authorization'] = ``;
};

export {setAxiosAuthToken};
