import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Planet } from '../../models/Planet';
import { Results } from '../../models/Results';



export const characterApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://swapi.dev/api',
    }),
    endpoints(builder) {
        return {
            fetchCharacters: builder.query<Results, string|void> ({
                query(page="1"){
                    return `/people?page=${page}`;
                },
            }),
            fetchPlanet: builder.query<Planet,string>({
                query(id){
                    return `/planets/${id}`;
                }
            })
        }
    }
});


export const { useFetchCharactersQuery, useFetchPlanetQuery } = characterApiSlice;

