import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3006/' }),
  endpoints: build => ({
    /* Get All the Skills */
    getSkills: build.query<getSkillsApi[], getSkillsApiArg>({
      query: () => ({ url: `/skills` }),
    }),
    /* Get Specific Skill */
    getSkill: build.query<getSkillsApi, getSkillsApiArg>({
      query: id => ({ url: `/skills/${id}` }),
    }),
  }),
});

export type getSkillsApi = {
  /** ID of skills that needs to be fetched */
  id: number;
  /** Name of the skill */
  name: string;
  /** Level of the skill */
  level: string[];
  /** Content of the skill */
  content: string;
};
export type getSkillsApiArg = void;

export const { useGetSkillsQuery, useGetSkillQuery } = skillsApi;
