import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PropertyDetailsResponse, PropertyListResponse } from "./types";

export interface Agency {
  id: number;
  name: string;
  externalID: string;
  location: string;
  agentsCount: number;
  agencyLogo:string
}

interface AgenciesResponse {
  hits: Agency[];
}

export const bayutApi = createApi({
  reducerPath: "bayutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bayut.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", "47b2cd3a68msh571294ae338c697p1a16bejsn0715ed1e39fe");
      headers.set("x-rapidapi-host", "bayut.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAgencies: builder.query<AgenciesResponse, void>({
      query: () => "/agencies/list?query=patriot&hitsPerPage=25&page=0&lang=en",
    }),
    
    getProperties: builder.query<PropertyListResponse,void>({
      query: () => "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en"
    }),
    getPropertyDetail:builder.query<PropertyDetailsResponse,string>({
      query:(propertyId)=> `properties/detail?externalID=${propertyId}`
    })
  })
});

export const { useGetAgenciesQuery,useGetPropertiesQuery,useGetPropertyDetailQuery } = bayutApi;
