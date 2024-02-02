import { gql } from 'graphql-request';

export const GET_PRO_POSTS = gql`
    query getProPosts($proId: ID!) {
        pro(id: $proId) {
            user {
                id
                isPro
                userName
                firstName
                lastName
                avatarURL
            }
            post {
                isPublic
                content
                mediaURL
            }
        }
    }
`;