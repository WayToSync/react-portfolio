import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type skillsApiProps = {
  name: string;
  level: string[];
  content: string;
};

//TODO: Add Documentation API

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3006/' }),
  endpoints: builder => ({
    skills: builder.query<skillsApiProps[], void>({
      query: () => '/skills',
    }),
    skill: builder.query<skillsApiProps, string>({
      query: name => `/skills/${name}`,
    }),
  }),
});

export const { useSkillsQuery, useSkillQuery } = skillsApi;
