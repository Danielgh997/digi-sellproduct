import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NativeStackNavigationOptions} from 'react-native-screens/createNativeStackNavigator';
import {ScreenNames} from './constants';
import ProductList from '../screens/productList';
import ProductDetail from '../screens/singleProduct';

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  direction: 'ltr',
  headerShown: false,
};
/**
 * Stack registry for handle all screens,
 */
const Routes = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={ScreenNames.showListOfProducts}>
      <Stack.Screen
        name={ScreenNames.showListOfProducts}
        component={ProductList}
        options={screenOptions}
      />
      <Stack.Screen
        name={ScreenNames.showSingleProduct}
        component={ProductDetail}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default Routes;
