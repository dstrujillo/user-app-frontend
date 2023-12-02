import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/user',
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
    })
  })
});

export const { useLoginMutation, useSignupMutation, useGetUsersQuery } =
  userApi;

export default userApi;
