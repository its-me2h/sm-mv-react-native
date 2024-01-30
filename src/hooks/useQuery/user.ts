import { useQuery } from 'react-query';
import { GET_PROFILE, GET_SUGGESTED_PROS, GET_USER } from '../../api/graphql/queries/user';
import { reactQueryConfig } from './config';
import { api } from '../../api';

export const useGetUser = (id: any) => {
    return useQuery(['getUser', id], () => getUser(id), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in useGetUser: ', error);
        },
    });
};
const getUser = async (id: any) => {
    try {
        const data: any = await api.request(GET_USER, { id });
        return data.user;
    } catch (error) {
        console.error('Error in useGetUser: ', error);
    }
};

export const useGetProfile = (id: any) => {
    return useQuery(['getProfile', id], () => getProfile(id), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in useGetProfile: ', error);
        },
    });
};
const getProfile = async (id: any) => {
    try {
        const data: any = await api.request(GET_PROFILE, { id });
        return data.user;
    } catch (error) {
        console.error('Error in useGetProfile: ', error);
    }
};

export const useGetSuggestedPros = (limit: any) => {
    return useQuery(['getSuggestedPros', limit], () => GetSuggestedPros(limit), {
        ...reactQueryConfig,
        onError: (error) => {
            console.error('Error in useGetSuggestedPros: ', error);
        },
    });
};
const GetSuggestedPros = async (limit: any) => {
    try {
        const data: any = await api.request(GET_SUGGESTED_PROS, { limit });
        return data.pro;
    } catch (error) {
        console.error('Error in useGetSuggestedPros: ', error);
    }
};

