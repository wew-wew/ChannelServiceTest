import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Photo, Post, User } from '../../../utility/entities';

export interface Data {
  users: User[];
  posts: Post[];
  photos: Photo[];
}

export interface PublicationsState {
  data: Data;
  fetching: boolean;
}

export const publicationsInitialState: PublicationsState = {
  data: {
    users: [],
    posts: [],
    photos: [],
  },
  fetching: false,
};

const publicationsSlice = createSlice({
  name: 'publications',
  initialState: publicationsInitialState,
  reducers: {
    getPublicationsRequest: (state, { payload }: PayloadAction<string>) => {
      state.fetching = true;
    },
    getPublicationsSuccess: (state, { payload }: PayloadAction<Data>) => {
      state.fetching = false;
      state.data = payload;
    },
    getPublicationsFailure: (state, { payload }: PayloadAction<string>) => {
      state.fetching = false;
    },
  },
});

export const { getPublicationsRequest, getPublicationsSuccess, getPublicationsFailure } = publicationsSlice.actions;

export default publicationsSlice.reducer;
