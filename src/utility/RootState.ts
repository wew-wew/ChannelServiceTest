import { AuthState } from '../features/auth/redux/reducer';
import { DeviceInfoState } from '../features/deviceInfo/redux/reducer';
import { PublicationsState } from '../features/publications/redux/reducer';

export interface RootState {
  publications: PublicationsState;
  auth: AuthState;
  deviceInfo: DeviceInfoState;
}
