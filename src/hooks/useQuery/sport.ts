import { useQuery } from 'react-query';
import { GET_SPORTS } from '../../api/graphql/queries/sport';
import { reactQueryConfig } from './config';
import { api } from '../../api';

export const useGetSports = (limit: any) => {
    return useQuery(['getSports', limit], () => GetSports(limit), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in useGetSports: ', error);
        },
    });
};

const GetSports = async (limit: any) => {
    try {
        const data: any = await api.request(GET_SPORTS, { limit });
        return data.sport;
    } catch (error) {
        console.error('Error in useGetSports: ', error);
    }
};