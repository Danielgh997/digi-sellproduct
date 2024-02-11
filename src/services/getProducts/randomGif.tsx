import {request} from '../../network';
import {getProductList} from '../constants/urlConstants';

export const getProductListDetail = async () => {
  const response = await request.axiosGet(getProductList());
  return response;
};
