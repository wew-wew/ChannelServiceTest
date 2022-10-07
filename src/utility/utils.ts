import axios from 'axios';

export const axiosRequest = axios.create();

export enum requestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

const rawUrl = 'https://jsonplaceholder.typicode.com';

export const endpoints = {
  getUsers: () => ({
    endpoint: '/users',
    method: requestMethod.GET,
  }),
  getPosts: () => ({
    endpoint: '/posts',
    method: requestMethod.GET,
  }),
  getPhotos: () => ({
    endpoint: '/photos',
    method: requestMethod.GET,
  }),
};

export interface EndpointData {
  endpoint: string;
  method: requestMethod;
}

export const requestProcessor = async (endpointData: EndpointData) => {
  const finalUrl = `${rawUrl}${endpointData.endpoint}`;

  const response = await axiosRequest.request({
    url: finalUrl,
    method: endpointData.method,
  });

  return response.data;
};
