import {IProductListResponse} from '../types/productList';

export const productListDataMapper = (
  response: any,
): IProductListResponse[] => {
  let productListItem: IProductListResponse[] = [];
  response.map((item: IProductListResponse) => {
    const tempitem: IProductListResponse = {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      url: item.url,
      thumbnailUrl: item.thumbnailUrl,
    };
    productListItem.push(tempitem);
  });
  return productListItem;
};
