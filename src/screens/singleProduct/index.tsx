import {useRoute} from '@react-navigation/core';
import React from 'react';
import {Image, View, Text} from 'react-native';
import Header from '../../components/header';

const ProductDetail: React.FC = () => {
  const route: any = useRoute();
  // const {title} = route.params;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header title={'Product Detail'} />
      </View>
      <View
        style={{
          flex: 10,
          backgroundColor: 'red',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: '70%', height: '70%'}}
            source={{
              uri: 'https://media.istockphoto.com/id/1415865722/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%BD%D0%B8%D0%B9-%D0%B2%D0%B8%D0%B4-%D0%BD%D0%B0-%D0%BE%D0%B7%D0%B5%D1%80%D0%BE-%D0%BC%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B5-%D0%BE%D0%BA%D0%BE-%D0%B0%D0%B1%D0%BE-%D0%BE%D0%BA%D0%BE-%D0%BC%D0%BE%D1%80%D1%8F-%D1%82%D0%B0%D1%82%D1%80%D0%B8-%D0%BF%D0%BE%D0%B1%D0%BB%D0%B8%D0%B7%D1%83-%D0%B7%D0%B0%D0%BA%D0%BE%D0%BF%D0%B0%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BB%D1%8C%D1%89%D0%B0.jpg?s=1024x1024&w=is&k=20&c=31oJEjvwRxP4J-CyRSmhdNcxqsHK1JXXDM1FYX_da2o=',
            }}
          />
        </View>
        <View style={{paddingHorizontal: '15%'}}>
          <Text>description</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
