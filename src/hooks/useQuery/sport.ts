import { useQuery } from 'react-query';
import { fetchData } from '../../api';
import { reactQueryConfig } from './config';
import { GET_SPORTS, GET_SPORT_PROS } from '../../api/graphql/queries/sport';

export const getSports = (limit: any) => {
    return useQuery(['getSports', limit], () => fetchData(GET_SPORTS, { limit }), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in getSports: ', error);
        },
    });
};

export const getSportPros = (sportId: any) => {
    return useQuery(['getSportPros', sportId], () => fetchData(GET_SPORT_PROS, { sportId }), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in getSportPros: ', error);
        },
    });
};
