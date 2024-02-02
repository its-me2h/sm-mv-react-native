import { useQuery } from 'react-query';
import { fetchData } from '../../api';
import { reactQueryConfig } from './config';
import { GET_PRO_POSTS } from '../../api/graphql/queries/post';

export const getProPosts = (proId: any) => {
    return useQuery(['getProPosts', proId], () => fetchData(GET_PRO_POSTS, { proId }), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in getProPosts: ', error);
        },
    });
};
