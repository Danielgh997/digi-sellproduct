import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {IHeaderProps} from '../../types/header';
import {NavHandler} from '../../../App';
//@ts-ignore
import BackIcon from '../../assets/images/svgImages/backArrow.svg';
import {styles} from './styles';

const Header: React.FC<IHeaderProps> = ({title}) => {
  return (
    <View style={styles.headerContainerStyle}>
      <TouchableOpacity
        style={styles.backButtonContainerStyle}
        onPress={() => NavHandler.pop()}>
        <BackIcon width={30} height={30} />
      </TouchableOpacity>
      <View style={styles.titleContainerStyle}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
