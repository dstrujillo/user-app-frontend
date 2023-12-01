import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/user' }),
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
    })
  })
});

export const { useLoginMutation, useSignupMutation } = userApi;

export default userApi;
