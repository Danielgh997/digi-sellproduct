import React, {RefObject} from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';
import {NavigationContainerRef} from '@react-navigation/native';

interface IPushNavigationCommand {
  name: string;
  params?: any;
  id?: string;
}

interface INavHandler {
  navRef: RefObject<any>;

  navIsReady: boolean;

  prepareNavRef(): void;

  push(navigationCommandObject: IPushNavigationCommand): boolean;

  pop(level?: number): boolean;
}

export class NavHandlerCls implements INavHandler {
  navRef: RefObject<NavigationContainerRef<any>> = React.createRef();
  navIsReady: boolean = false;

  prepareNavRef() {
    this.navIsReady = true;
  }
  push(navigationCommandObject: IPushNavigationCommand): boolean {
    try {
      this.navRef.current?.navigate(
        navigationCommandObject.name,
        navigationCommandObject?.params || {},
      );

      return true;
    } catch (_) {
      return false;
    }
  }

  pop(level?: number): boolean {
    try {
      const popAction = StackActions.pop(level || 1);
      this.navRef.current?.dispatch(popAction);

      return true;
    } catch (_) {
      return false;
    }
  }
}
