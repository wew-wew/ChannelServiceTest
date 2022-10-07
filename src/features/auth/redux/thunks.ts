import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { credentials, screens } from '../../../utility/constants';
import { AppDispatch } from '../../../utility/store';
import {
  authenticationFailure,
  authenticationRequest,
  authenticationSuccess,
  logOutRequest,
  setWrongCredentials,
} from './reducer';

export const authentication =
({ login, password, navigation }: { login: string; password: string; navigation: NavigationProp<ParamListBase> }) =>
  async (dispatch: AppDispatch) => {
    dispatch(authenticationRequest());
    if (login === credentials.login && password === credentials.password) {
      dispatch(authenticationSuccess());
      navigation.reset({ index: 0, routes: [{ name: screens.publicationsScreen }] });
    } else {
      dispatch(setWrongCredentials(true));
      dispatch(authenticationFailure());
    }
  };

export const logOut =
({ navigation }: { navigation: NavigationProp<ParamListBase> }) =>
  async (dispatch: AppDispatch) => {
    navigation.reset({ index: 0, routes: [{ name: screens.loginScreen }] });
    dispatch(logOutRequest());
  };
