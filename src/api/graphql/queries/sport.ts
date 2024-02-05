import { gql } from "graphql-request";

export const GET_SPORTS = gql`
    query GetSports($limit: Int) {
        sport(limit: $limit) {
            id
            name
            mediaURL
            countPros
        }
    }
`;

export const GET_SPORT_PROS = gql`
    query GetSportPros($sportId: ID) {
        sport(id: $sportId) {
            id
            name
            mediaURL
            countPros
            pro {
            user {
                id
                isPro
                userName
                firstName
                lastName
                avatarURL
            }
            }
        }
    }
`;
