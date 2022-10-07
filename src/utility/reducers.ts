import { combineReducers } from 'redux';
import authReducer from '../features/auth/redux/reducer';
import publicationsReducer from '../features/publications/redux/reducer';
import deviceInfoReducer from '../features/deviceInfo/redux/reducer';

const reducers = combineReducers({
  publications: publicationsReducer,
  auth: authReducer,
  deviceInfo: deviceInfoReducer,
});

export default reducers;
