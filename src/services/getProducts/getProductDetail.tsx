import {request} from '../../network';
import {productListDataMapper} from '../../utils/productListDataNormalizer';
import {getProductList} from '../constants/urlConstants';

export const getProductListApi = async () => {
  const response = await request.axiosGet(getProductList());
  console.log('responssssssssse', response);
  return productListDataMapper(response.data);
};
