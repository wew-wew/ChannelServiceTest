import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  authenticated: boolean;
  wrongCredentials: boolean;
  fetching: boolean;
}

export const authInitialState: AuthState = {
  authenticated: false,
  wrongCredentials: false,
  fetching: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    authenticationRequest: (state, { payload }: PayloadAction<string>) => {
      state.fetching = true;
    },
    authenticationSuccess: (state, { payload }: PayloadAction<string>) => {
      state.fetching = false;
      state.authenticated = true;
    },
    authenticationFailure: (state, { payload }: PayloadAction<string>) => {
      state.fetching = false;
    },
    setWrongCredentials: (state, { payload }: PayloadAction<boolean>) => {
      state.wrongCredentials = payload;
    },
    logOutRequest: (state, { payload }: PayloadAction<string>) => {
      state.authenticated = false;
    },
  },
});

export const {
  authenticationRequest,
  authenticationSuccess,
  authenticationFailure,
  setWrongCredentials,
  logOutRequest,
} = authSlice.actions;

export default authSlice.reducer;
