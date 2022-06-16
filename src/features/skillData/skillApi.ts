import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type skillsApiProps = {
  id: number;
  name: string;
  level: string[];
  content: string;
};

//TODO: Add Documentation API https://redux-toolkit.js.org/rtk-query/usage/code-generation

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3006/' }),
  endpoints: builder => ({
    skills: builder.query<skillsApiProps[], void>({
      query: () => '/skills',
    }),
    skill: builder.query<skillsApiProps, string>({
      query: id => `/skills/${id}`,
    }),
  }),
});

export const { useSkillsQuery, useSkillQuery } = skillsApi;
