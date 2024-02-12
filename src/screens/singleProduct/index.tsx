import {useRoute} from '@react-navigation/core';
import React from 'react';
import {Image, View, Text} from 'react-native';
import Header from '../../components/header';
import {Styles} from './style';

const ProductDetail: React.FC = () => {
  const route: any = useRoute();
  const {title, url, description, price} = route.params;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header title={title} />
      </View>
      <View
        style={{
          flex: 10,
        }}>
        <View style={Styles.contentContainerStyle}>
          <Image
            style={Styles.productImageStyle}
            source={{
              uri: url,
            }}
          />
        </View>
        <View style={Styles.textContainerStyle}>
          <View>
            <Text style={Styles.textStyle}>Name: {title}</Text>
          </View>
          <View style={Styles.descriptionTextContainerStyle}>
            <Text style={Styles.textStyle}>Description: {description}</Text>
          </View>
          <View>
            <Text style={Styles.textStyle}>Price: {price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
