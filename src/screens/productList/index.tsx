import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
//@ts-ignore
import MagnifierImage from '../../assets/images/svgImages/magnifier.svg';
import {Styles} from './styles';

const ProductList: React.FC = () => {
  const [searchValue, setSearchedValue] = useState<string>('');

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
    </View>
  );
};

export default ProductList;
