import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DeviceInfoState {
  isTablet: boolean;
}

export const deviceInfoInitialState: DeviceInfoState = {
  isTablet: false,
};

const deviceInfoSlice = createSlice({
  name: 'deviceInfo',
  initialState: deviceInfoInitialState,
  reducers: {
    setIsTablet: (state, { payload }: PayloadAction<boolean>) => {
      state.isTablet = payload;
    },
  },
});

export const { setIsTablet } = deviceInfoSlice.actions;

export default deviceInfoSlice.reducer;
