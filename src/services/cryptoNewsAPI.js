import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewHeaders = {
  //   "X-BingApis-SDK": "true",
  //   "X-RapidAPI-Key": "833f635080msh3af64ec192852c9p1a5e18jsn6a17695feab5",
  //   "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseURL = "https://bing-news-search1.p.rapidapi.com/news/trendingtopics";
const createRequest = (url) => ({ url, headers: cryptoNewHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseURL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (newsCategory, count) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
