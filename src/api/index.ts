import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://192.168.100.166:9009/graphql';
// const endpoint = 'http://192.168.43.100:9009/graphql';
// const endpoint = 'http://192.168.1.20:9009/graphql';

export const api = new GraphQLClient(endpoint);