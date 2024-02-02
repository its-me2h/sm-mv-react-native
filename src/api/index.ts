import { GraphQLClient } from 'graphql-request';

// const endpoint = 'http://192.168.100.166:9009/graphql'; // yassine
// const endpoint = 'http://192.168.43.100:9009/graphql';
// const endpoint = 'http://192.168.43.100:9009/graphql';
const endpoint = 'http://192.168.1.20:9009/graphql'; // office

const api = new GraphQLClient(endpoint);

export const fetchData = async (query: any, variables: any) => {
    try {
        const data: any = await api.request(query, variables);
        return data;
    } catch (error: any) {
        console.error(`Error fetching data: ${error.message}`);
    }
};