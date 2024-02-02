import { useQuery } from 'react-query';
import { fetchData } from '../../api';
import { reactQueryConfig } from './config';
import { GET_SPORTS } from '../../api/graphql/queries/sport';

export const getSports = (limit: any) => {
    return useQuery(['getBasicUserInfo', limit], () => fetchData(GET_SPORTS, { limit }), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in useGetBasicUserInfo: ', error);
        },
    });
};
