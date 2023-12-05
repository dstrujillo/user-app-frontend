import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';

/*
const customFetchQuery: BaseQueryFn<string, unknown, unknown> = async (
  arg,
  api,
  extraOptions
) => {
  const result = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/user',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const { accessToken } = state.userSlice;
      if (accessToken) {
        headers.set('Authorization', accessToken);
      }
      return headers;
    }
  });
  if (result?.error !== undefined && result?.error?.status === 401) {
  }
  return result;
};
*/

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api/v1/user`,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const { accessToken } = state.userSlice;
      if (accessToken) {
        headers.set('Authorization', accessToken);
      }
      return headers;
    }
  }),
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
