import React, {useCallback} from 'react';
import Routes from './src/navigation/routes';
import {NavigationContainer} from '@react-navigation/native';
import {NavHandlerCls} from './src/navigation/navHandler';

export const NavHandler = new NavHandlerCls();

const App = () => {
  const onNavigationReady = useCallback(() => {
    NavHandler.prepareNavRef();
  }, []);
  return (
    <NavigationContainer ref={NavHandler.navRef} onReady={onNavigationReady}>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
