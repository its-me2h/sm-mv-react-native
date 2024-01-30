import { gql } from 'graphql-request';

export const GET_USER = gql`
    query getUser($id: ID!) {
        user(id: $id) {
            id
            isPro
            userName
            firstName
            lastName
            avatarURL
        }
    }
`;

export const GET_PROFILE = gql`
    query getProfile($id: ID!) {
        user(id: $id) {
            id
            isPro
            userName
            firstName
            lastName
            avatarURL
            coverURL
            pro {
                bio
                countPosts
                countFollowers
                countSubscribers
                isFollowing
                isSubscribing
            }
        }
    }
`;

export const GET_SUGGESTED_PROS = gql`
    query getSuggestedPros($limit: Int) {
        pro(limit: $limit) {
            user {
                id
                userName
                firstName
                lastName
                avatarURL
            }
        }
    }
`;

