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
      initialRouteName={ScreenNames.listOfProductsPage}>
      <Stack.Screen
        name={ScreenNames.listOfProductsPage}
        component={ProductList}
        options={screenOptions}
      />
      <Stack.Screen
        name={ScreenNames.singleProductPage}
        component={ProductDetail}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default Routes;
