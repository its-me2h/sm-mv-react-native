import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://192.168.100.41:9009/graphql';

const api = new GraphQLClient(endpoint);

export const fetchData = async (query: any, variables: any) => {
    try {
        const data: any = await api.request(query, variables);
        return data;
    } catch (error: any) {
        console.error(`Error fetching data: ${error.message}`);
    }
};