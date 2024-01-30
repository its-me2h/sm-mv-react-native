import { gql } from "graphql-request";

export const GET_SPORTS = gql`
    query GetSports($limit: Int) {
        sport(limit: $limit) {
            id
            name
            mediaURL
            CountPros
        }
    }
`;
