import { DeviceType } from 'expo-device';

export const credentials = {
  login: 'admin',
  password: '12345',
};

export const screens = {
  loginScreen: 'loginScreen',
  publicationsScreen: 'publicationsScreen',
};

export const deviceTypeMap = {
  [DeviceType.UNKNOWN]: 'unknown',
  [DeviceType.PHONE]: 'phone',
  [DeviceType.TABLET]: 'tablet',
  [DeviceType.DESKTOP]: 'desktop',
  [DeviceType.TV]: 'tv',
};
