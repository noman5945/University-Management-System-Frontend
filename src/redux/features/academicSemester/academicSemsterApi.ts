import { baseAPI } from "../../API/baseAPI";

const academicSemesterApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicSemesterApi;
