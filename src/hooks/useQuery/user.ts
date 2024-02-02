import { useQuery } from 'react-query';
import { fetchData } from '../../api';
import { reactQueryConfig } from './config';
import {
    GET_USER_INFO,
    GET_USER_PROFILE,
    GET_SUGGESTED_PROS
} from '../../api/graphql/queries/user';

export const getUserInfo = (userId: any) => {
    return useQuery(['getUserInfo', userId], () => fetchData(GET_USER_INFO, { userId }), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in useGetUserInfo: ', error);
        },
    });
};

export const getUserProfile = (userId: any) => {
    return useQuery(['getUserProfile', userId], () => fetchData(GET_USER_PROFILE, { userId }), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in getUserProfile: ', error);
        },
    });
};

export const getSuggestedPros = (limit: any) => {
    return useQuery(['getSuggestedPros', limit], () => fetchData(GET_SUGGESTED_PROS, { limit }), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in useGetSuggestedPros: ', error);
        },
    });
};