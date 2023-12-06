import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn
} from '@reduxjs/toolkit/query/react';
// import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
import { setAccessToken } from '../slices/user.slice';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/api/v1/user`,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const { accessToken } = state.userSlice;
    if (accessToken) {
      headers.set('Authorization', accessToken);
    }
    return headers;
  }
});

const customBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    api.dispatch(setAccessToken(null));
  }
  return result;
};

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: '/signup',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
    }),
    getUsers: builder.query({
      query: () => ({
        url: '/',
        method: 'GET'
      })
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET'
      })
    })
  })
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetUsersQuery,
  useGetUserQuery
} = userApi;

export default userApi;
