import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
//@ts-ignore
import MagnifierImage from '../../assets/images/svgImages/magnifier.svg';
import {Styles} from './styles';
import {IProductListResponse} from '../../types/productList';
import {getProductListApi} from '../../services/getProducts/getProductDetail';

const ProductList: React.FC = () => {
  const [productListState, setProductListState] = useState<
    IProductListResponse[]
  >([]);
  const [searchedItemsState, setSearchedItemsState] = useState<
    IProductListResponse[]
  >([]);
  const [searchValue, setSearchedValue] = useState<string>('');

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = useCallback(async () => {
    const response: IProductListResponse[] = await getProductListApi();
    setProductListState(response);
  }, [productListState]);

  useEffect(() => {
    if (searchValue.length >= 2) {
      searchItems();
    }
  }, [searchValue]);

  const searchItems = useCallback(() => {
    let searchedItems: IProductListResponse[] = [];
    productListState.map((item: IProductListResponse) => {
      if (item.title.toLocaleLowerCase().includes(searchValue.toLowerCase())) {
        searchedItems.push(item);
      }
    });
    setSearchedItemsState(searchedItems);
  }, [searchValue, productListState]);

  const ProductListRenderer = useCallback((item: IProductListResponse) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          marginVertical: '5%',
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{width: '80%', height: '100%'}}
            source={{uri: item.thumbnailUrl}}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-start', height: 100}}>
          <Text>{item.title}</Text>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={Styles.pageContainerStyle}>
      <View style={Styles.headerContainerStyle}>
        <View
          style={
            searchValue.length < 2
              ? {...Styles.textInputContainerStyle}
              : {...Styles.textInputContainerStyle, width: '70%'}
          }>
          <View style={{justifyContent: 'center'}}>
            <MagnifierImage />
          </View>
          <TextInput
            value={searchValue}
            onChangeText={setSearchedValue}
            placeholder={'Search'}
            multiline={true}
            style={Styles.searchTextInputStyle}
          />
        </View>
        {searchValue.length >= 2 && (
          <TouchableOpacity
            style={Styles.searchCancelStyle}
            onPress={() => setSearchedValue('')}>
            <Text style={{color: 'blue'}}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={{flex: 1}}>
        {productListState.length === 0 ? (
          <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={{fontSize: 26, fontWeight: 'bold'}}>loading</Text>
          </View>
        ) : (
          <FlatList
            contentContainerStyle={{
              width: '100%',
            }}
            data={
              searchValue.length >= 2 ? searchedItemsState : productListState
            }
            renderItem={item => ProductListRenderer(item.item)}
          />
        )}
      </View>
    </View>
  );
};

export default ProductList;
