import { endpoints, requestProcessor } from '../../../utility/utils';
import { getPublicationsFailure, getPublicationsRequest, getPublicationsSuccess } from './reducer';

export const getPublications = () => async dispatch => {
  try {
    dispatch(getPublicationsRequest());
    const users = await requestProcessor(endpoints.getUsers());
    const posts = await requestProcessor(endpoints.getPosts());
    const photos = await requestProcessor(endpoints.getPhotos());
    const data = {
      users,
      posts,
      photos,
    };
    dispatch(getPublicationsSuccess(data));
  } catch (error) {
    dispatch(getPublicationsFailure(error.message));
  }
};
